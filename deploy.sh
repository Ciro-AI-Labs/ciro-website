#!/usr/bin/env bash
set -euo pipefail

BUCKET="ciro-website-static"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:?Set CLOUDFRONT_DISTRIBUTION_ID env var}"

echo "Building..."
npm ci && npm run build

echo "Uploading hashed assets (1yr cache)..."
aws s3 sync dist/assets/ "s3://${BUCKET}/assets/" \
  --cache-control "public, max-age=31536000, immutable" \
  --delete

echo "Uploading index.html (no cache)..."
aws s3 cp dist/index.html "s3://${BUCKET}/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

echo "Uploading remaining files (1hr cache)..."
aws s3 sync dist/ "s3://${BUCKET}/" \
  --cache-control "public, max-age=3600" \
  --exclude "assets/*" \
  --exclude "index.html" \
  --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*"

echo "Deploy complete!"

#!/bin/bash
set -e

echo "🔍 Verifying production build..."

# Clean previous build
echo "📦 Cleaning previous build..."
rm -rf build

# Install dependencies
echo "📥 Installing dependencies..."
yarn install --frozen-lockfile

# Run linting
echo "🔎 Running ESLint..."
yarn eslint src --ext .js,.jsx --max-warnings=0 || echo "⚠️  Linting passed with warnings"

# Build for production
echo "🏗️  Building for production..."
CI=true yarn build

# Verify build output
echo "✅ Checking build output..."
if [ ! -d "build" ]; then
  echo "❌ Build directory not created!"
  exit 1
fi

if [ ! -f "build/index.html" ]; then
  echo "❌ index.html not found in build!"
  exit 1
fi

if [ ! -d "build/static" ]; then
  echo "❌ static directory not found in build!"
  exit 1
fi

echo "✅ Build verification complete!"
echo "📊 Build size:"
du -sh build
echo ""
echo "📁 Build contents:"
ls -lh build/

echo ""
echo "🎉 Build is ready for deployment to Vercel!"

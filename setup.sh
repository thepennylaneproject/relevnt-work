#!/bin/bash

# Relevnt Project Setup Script
# This script organizes your files for deployment

echo "🚀 Setting up Relevnt project structure..."

# Create directory structure
echo "📁 Creating directories..."
mkdir -p src/pages
mkdir -p src/context
mkdir -p src/api
mkdir -p src/lib
mkdir -p src/components
mkdir -p netlify/functions

# Move pages if they exist in the root
if [ -d "pages" ]; then
  echo "📄 Moving pages to src/pages/..."
  cp -r pages/* src/pages/ 2>/dev/null
  echo "   ✅ Pages moved"
fi

# Move functions if they exist in the root
if [ -d "functions" ]; then
  echo "⚙️  Moving functions to netlify/functions/..."
  cp -r functions/* netlify/functions/ 2>/dev/null
  echo "   ✅ Functions moved"
fi

# Check for essential files
echo ""
echo "📋 Checking essential files..."

check_file() {
  if [ -f "$1" ]; then
    echo "   ✅ $1 exists"
    return 0
  else
    echo "   ❌ $1 missing"
    return 1
  fi
}

check_file "package.json"
check_file "tsconfig.json"
check_file "vite.config.ts"
check_file "index.html"
check_file "netlify.toml"

echo ""
echo "📦 Checking src files..."
check_file "src/main.tsx" || echo "      ⚠️  Create this file (entry point)"
check_file "src/App.tsx" || echo "      ⚠️  Create this file (main app)"
check_file "src/context/AuthContext.tsx" || echo "      ⚠️  Create this file (auth)"
check_file "src/api/base44Adapter.ts" || echo "      ⚠️  Create this file (API adapter)"

echo ""
echo "🎯 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Review the missing files above"
echo "2. Run: npm install"
echo "3. Run: npm run dev (test locally)"
echo "4. Run: git add . && git commit -m 'Setup project' && git push"
echo ""
echo "See DEPLOY_GUIDE.md for detailed instructions"

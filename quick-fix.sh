#!/bin/bash

# Quick Fix Script for TypeScript Build Errors
# This fixes the 3 errors preventing your build

echo "🔧 Applying fixes..."

# FIX 1: Remove unused type parameter in base44Adapter.ts
echo "1️⃣ Fixing base44Adapter.ts..."
sed -i.bak 's/function applyMatch<T>/function applyMatch/g' src/api/base44Adapter.ts
echo "   ✅ Removed unused generic type"

# FIX 2: Fix Dashboard.tsx dev sign-in
echo "2️⃣ Fixing Dashboard.tsx..."
# Replace the problematic dev sign-in with a link to login page
sed -i.bak 's/<button onClick={() => signIn()}>Dev Sign in<\/button>/<a href="\/login"><button>Sign in<\/button><\/a>/g' src/Dashboard.tsx
echo "   ✅ Changed to login link"

# FIX 3: Fix supabase.ts import
echo "3️⃣ Fixing supabase.ts..."
# Comment out the problematic import
sed -i.bak "s/import type { Database } from '..\/types\/database';/\/\/ import type { Database } from '..\/types\/database'; \/\/ TODO: Generate from Supabase/g" src/lib/supabase.ts
# Remove Database type from createClient if present
sed -i.bak 's/createClient<Database>/createClient/g' src/lib/supabase.ts
echo "   ✅ Removed Database type import"

# Clean up backup files
echo "🧹 Cleaning up..."
find src/ -name "*.bak" -delete

echo ""
echo "✅ All fixes applied!"
echo ""
echo "Next steps:"
echo "1. Run: npm run build"
echo "2. If successful, run: git add . && git commit -m 'Fix TypeScript errors' && git push"
echo ""

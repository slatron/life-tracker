#!/usr/bin/env sh

# Abort on errors
set -e

# Remove existing dist directory
rm -rf dist

# Build new app directory
npm run build
cd dist

# Init new git repository and commit to gh-pages branch
git checkout origin/gh-pages
git rm -rf --cache .
git add . -A
git commit -m 'deploy'
git push origin gh-pages --force

# go back to /
git checkout main

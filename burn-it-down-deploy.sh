#!/usr/bin/env sh

# THIS DEPLOYS TO GH-PAGES BUT RMs .GITIGNORE FILES
# - KEEPING FOR GENERAL REFERENCE
# - USE deploy.sh

# Abort on errors
set -e

# checkout to the gh-pages, reset
# and sync the branch with our main
# change here to master if you need
git checkout gh-pages
git reset --hard origin/main

# install dependencies and create
# the react app build
npm run builds

# delete everything on the directory
# except the dist folder
keep=( dist node_modules )
find * -maxdepth 0 -name "${keep[@]}" -prune -o -exec rm -rf '{}' ';'

# move the dist folder content
# to the repository root
mv ./dist/* .

# deletes the git cache and push
# the new content to gh-pages
git rm -rf --cache .
# git add .
# git commit -m "deploy"

# git push origin gh-pages --force

# # go back to main
# git checkout main
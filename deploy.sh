#!/usr/bin/env sh
echo "ccccc"
set -e

git add .
git commit -m 'deploy'

git push
cd -
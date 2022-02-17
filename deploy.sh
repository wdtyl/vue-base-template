#!/usr/bin/env sh
echo "ccccc"
set -e
echo "1"
git add .
echo "2"
git commit -m 'deploy'
echo "3"
git push
echo "4"
cd -
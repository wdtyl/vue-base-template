#!/usr/bin/env sh

set -e

git add .
git commit -m 'deploy'

git push
cd -
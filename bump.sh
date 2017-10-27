#!/usr/bin/env bash

if [ "$1" != "patch" ] && [ "$1" != "minor" ] && [ "$1" != "major" ]; then
	echo "Error. Parameter should be patch | minor | major."
	exit 1
fi

current_version=$(node -pe 'require("./package.json").version')

npm version $1 -m "v%s tagged"

if [ $? -ne 0 ]; then exit 1; fi

next_version=$(node -pe 'require("./package.json").version')

rm -rf build/*
npm run build
if [ $? -ne 0 ]; then exit 1; fi

rm -rf docs/*
npm run build-storybook
if [ $? -ne 0 ]; then exit 1; fi

# git add package.json
# git commit -m "v$next_version"
git push && git push --tags
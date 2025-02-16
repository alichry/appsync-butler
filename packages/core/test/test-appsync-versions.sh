#!/bin/sh

set -e

versions="$(npm view @aws-cdk/aws-appsync-alpha versions --json \
    | sed -E '/^\[|\]/d;s/.*\"(.*)\".*$/\1/g' )"

good=""
bad=""
inconclusive=""

for v in $versions
do
    if ! npm install -D "@aws-cdk/aws-appsync-alpha@$v" "aws-cdk-lib@*"; then
        echo "⚠️ failed to install $v"
        if [ -z "$inconclusive" ]; then
            inconclusive="$v"
        else
            inconclusive="$inconclusive || $v"
        fi
    fi
    if npm run build && npx mocha; then
        echo "✅ $v"
        if [ -z "$good" ]; then
            good="$v"
        else
            good="$good || $v"
        fi
    else
        echo "❌ $v"
        if [ -z "$bad" ]; then
            bad="$v"
        else
            bad="$bad || $v"
        fi
    fi
done

echo "⚠️ Could not test the below versions: "

echo "$inconclusive"

echo ""

echo "✅ Tests passed for the below versions: "

echo "$good"

echo ""

echo "❌ And failedd for the below versions: "

echo "$bad"

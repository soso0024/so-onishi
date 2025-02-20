#!/bin/bash
if [ -f .env ]; then
    source .env
    npx renovate --token $GITHUB_TOKEN soso0024/so-onishi
else
    echo "Please create .env file with GITHUB_TOKEN"
fi
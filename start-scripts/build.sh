#!/bin/bash

# Get the latest Redpanda Console version
export CONSOLE_VERSION=$(node start-scripts/getLatestConsoleVersion.js);

# Set the ALGOLIA environment variables
export ALGOLIA_API_KEY=0a3bd3d7dcdcd4f73c646dcd0c3c5252;
export ALGOLIA_APP_ID=0HC7T0GI45;
export ALGOLIA_INDEX_NAME=test;
export ALGOLIA_ADMIN_API_KEY=;

# Set the latest-console-version attribute
if [[ -n "$CONSOLE_VERSION" ]]; then
  attribute="--attribute latest-console-version=$CONSOLE_VERSION"
else
  attribute=""
fi

# Build the site
antora --to-dir docs $attribute --fetch antora-playbook.yml

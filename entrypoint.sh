#!/usr/bin/env sh
bash

npm install -g rekit
chown node:node -R .
yarn install
yarn start
#!/bin/bash

swagger_urls=(
  "https://talentdev.dipbit.xyz/v3/api-docs/Customer"
  "https://talentdev.dipbit.xyz/v3/api-docs/Profile"
  "https://talentdev.dipbit.xyz/v3/api-docs/Contract"
  "https://talentdev.dipbit.xyz/v3/api-docs/Wish"
  "https://talentdev.dipbit.xyz/v3/api-docs/App"
  "https://talentdev.dipbit.xyz/v3/api-docs/Asset"
  "https://talentdev.dipbit.xyz/v3/api-docs/Search"
  "https://talentdev.dipbit.xyz/v3/api-docs/Quest"
  "https://talentdev.dipbit.xyz/v3/api-docs/Feed"
  "https://api.quests.dev.dipbit.xyz/v3/api-docs/Task"
  "https://talentdev.dipbit.xyz/v3/api-docs/Quests"
)

output_dir="swagger"

mkdir -p "$output_dir"

for url in "${swagger_urls[@]}"; do
  filename=$(basename "$url")
  output_file="$output_dir/$filename.json"
  curl -o "$output_file" "$url"
done

curl -o "swagger/QuestsCustomer.json" "https://api.quests.dev.dipbit.xyz/v3/api-docs/Customer"

npm run generate
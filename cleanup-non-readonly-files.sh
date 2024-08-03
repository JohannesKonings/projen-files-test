#!/bin/bash

tree_file=".projen/tree.json"

jq -r '.. | objects | select(has("nodes")) | .nodes | to_entries | map(select(.value.metadata.readonly == false) | .value.metadata.path) | join("\n")' "$tree_file" | xargs -I {} rm {} -f {}

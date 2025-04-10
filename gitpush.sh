#!/bin/bash

# Prompt for a commit message
echo "Enter a commit message (or press ENTER to use date/time):"
read msg

# If no message, use the current date/time
if [ -z "$msg" ]; then
  msg="Update on $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "Committing with message: $msg"

# Run Git commands
git add .
git commit -m "$msg"
git push

# Check if the last command (push) was successful
if [ $? -eq 0 ]; then
  echo "✅ Push successful at $(date '+%Y-%m-%d %H:%M:%S')"
else
  echo "❌ Push failed"
fi

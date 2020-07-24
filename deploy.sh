#!/usr/bin/env sh

set -e

echo "Start execution to generate static files..."
#npm run generate
echo "Static file generation completed."

STATIC_DOC_PATH=~/open-source/minbox/document/apiboot-group.github.io

rm -rf ${STATIC_DOC_PATH}/*
echo "The old file content is deleted."

mv dist/* ${STATIC_DOC_PATH}
echo "Move the new files in the dist directory to complete."

# join deploy project root path
cd ${STATIC_DOC_PATH}
git add .

git commit -m "Automated deployment"
echo "Commit complete."

ssh-add ~/.ssh/apiboot-group
echo "The ssh public key is added to ssh-client complete."

git push origin master
echo "Deployment complete."
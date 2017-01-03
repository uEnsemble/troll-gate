#!/bin/bash

echo "Trigger simple workflow"
curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/plain' -d '{ }' "http://$CONDUCTOR_SERVER:8080/api/workflow/simple_workflow"

# Legionella Test Project Document

## Installation
if the Android does not startup, probably your sdk is not configured properly. try adding a ```local.properties``` file to ```/android/``` folder in the project and copy this line ``` sdk.dir = /Users/myuser/Library/Android/sdk``` It usually resolves the problem.
in the root, run:
```bash
yarn && yarn pod && yarn dev
```
this will kick start android and ios together.

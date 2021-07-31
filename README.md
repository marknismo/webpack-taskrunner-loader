# Description

Automate the running of a program whenever there is a change in file(s)

# Configuration

## src/index.js

- require the files to watch for changes

## build-utils/task.js

- specify what commands/tasks to run when a change is detected

## webpack.config.js

- modify the test rule to match the file extensions you are monitoring

```
test: /\.txt$/,
```

# How to run the program

- review "Configuration" above then run the commands below

```
npm i
npm run prod
```

# Caveat

This code has only been tested on Ubuntu 18.04

pipeline {
  agent any
  stages {
    stage('Stage One') {
      steps {
        echo 'Welcome to Jenkins pipeline'
        checkout scm
	    sh"""#!/bin/bash -l
           nvm use v8.10.0
           npm install
           npm run build
           CI=true npm test -- --coverage --verbose
        """
      }
    }
  }
}
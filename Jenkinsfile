pipeline {
  agent any
  tools {
    nodejs '18.12.1'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm run test'
      }
    }
  }
}

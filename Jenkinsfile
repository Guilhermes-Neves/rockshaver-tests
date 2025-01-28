pipeline {
    agent { 
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('Tests no Backend') {
            steps {
                dir('api') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }
        stage('Tests no Frontend (Mobile)'){
            steps {
                dir('mobile') {
                    // sh 'npm install'
                    // sh 'npx cypress install --force'
                    // sh 'npx cypress run'
                    sh 'echo teste'
                }
            }
        }
        stage('Tests no Frontend (Web)'){
            steps {
                dir('mobile') {
                    // sh 'npm install'
                    // sh 'npx cypress install --force'
                    // sh 'npx cypress run'
                    sh 'echo teste'
                }
            }
        }
    }
}
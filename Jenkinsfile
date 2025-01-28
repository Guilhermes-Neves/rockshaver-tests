pipeline {
    agent { 
        docker { 
                image 'cypress/browsers:node-22.13.1-chrome-132.0.6834.83-1-ff-134.0.2-edge-132.0.2957.115-1'
                args '-u root --network rockshaver_skynet'
            }
    }
    stages {
        stage('API') {
            steps {
                dir('api') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }
        stage('Mobile'){
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }
        stage('Web'){
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --browser chrome'
                }
            }
        }
    }
}
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
                    sh 'npx cypress run --record --key e328eb75-e9db-4cbd-9ca3-3cde5be14fa7'
                }
            }
        }
        stage('Mobile'){
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --record --key 65af78be-9259-4ca7-a720-66bd4f1a7108'
                }
            }
        }
        stage('Web'){
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --browser chrome --record --key 8ff62def-b097-47c1-b464-b3ebbb39a982'
                }
            }
        }
    }
}
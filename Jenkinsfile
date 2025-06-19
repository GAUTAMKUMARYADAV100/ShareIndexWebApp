pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/GAUTAMKUMARYADAV100/ShareIndexWebApp.git'
            }
        }

        stage('Install Frontend') {
            steps {
                sh 'npm install --prefix $FRONTEND_DIR'
            }
        }

        stage('Install Backend') {
            steps {
                sh 'npm install --prefix $BACKEND_DIR'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build --prefix $FRONTEND_DIR'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}

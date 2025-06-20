pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
    }

    stages {
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
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push theresonator/ipo-backend:latest
                        docker push theresonator/ipo-frontend:latest
                    """
                }
            }
        }



        stage('Deploy') {
          steps {
            sh 'docker-compose down || true'
            sh 'docker-compose up -d'
          }
        }

    }
}

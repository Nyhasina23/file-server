pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('andritiana_dockerhub')
    }
    stages {
        stage('Build docker image') {
            steps {
                sh 'docker build -t andritianaa/file-server:v2.0.6 Services/File-server/.'
            }
        }
        stage('login to dockerhub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps {
                sh 'docker push andritianaa/file-server:v2.0.6'
            }
        }

        stage('Deploying App to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(configs: 'Services/File-server/deployment.yml', kubeconfigId: 'kubernetes')
                }
            }
        }
    }
}

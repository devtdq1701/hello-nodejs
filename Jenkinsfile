pipeline {
    agent any
    stages {
        stage( 'Clone' ) {
            steps {
                git branch: 'main',
                    url: 'https://github.com/devtdq1701/hello-nodejs.git'
            }
        }
        stage( 'Build' ){
            steps{
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t quangtran1701/hello-nodejs:v1.0 .'
                    sh 'docker push quangtran1701/hello-nodejs:v1.0'
                }
            }
        }
        stage( 'SSH' ) {
            steps{
                sshagent (credentials: ['prod-privatekey']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 192.168.5.241 touch test.txt'
                }
            }
        }
    }
    post {
        success {
            mail bcc: '', body: 'Build Successfully !!!', cc: 'quangtran.epu@gmail.com', from: '', replyTo: '', subject: 'Jenkins Notification', to: 'nnhuyenmyepu1701@gmail.com'
        }
    }
}
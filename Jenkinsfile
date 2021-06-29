pipeline {
    agent { dockerfile true }
    stages {
          stage('stop/rm') {
            steps {
                script{
                    sh ''' 
                        npm install
                        ls -la
                        aws s3 cp --recursive build/ s3://casitadelhorror404  --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
                           '''
                    }
                }                                 
            }
        }
    }

             
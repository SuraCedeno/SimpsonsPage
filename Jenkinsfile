pipeline {
      agent { dockerfile true }
      //agent {label "master"}
    stages {
          stage('stop/rm') {
            steps {
                script{
                    sh ''' 
                        npm install
                        ls -la
                        aws s3 cp --recursive dist/ s3://casitadelhorror404  --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
                           '''
                    }
                }                                 
            }
        }
    }

             
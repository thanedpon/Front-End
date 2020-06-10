const sonarqubeScanner = require('sonarqube-scanner');
 
sonarqubeScanner(
  {
    serverUrl : 'https://sonarqube.mycompany.com',
    token : "",
    options: {

    }
  },
  () => process.exit()
)
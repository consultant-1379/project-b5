Setting up SonarQube for this project:

[1] Run the following command from this directory to build the image:
docker build -t sonarqube-project-b5 .

[2] Run the following command to run the container:
docker run -d -p 9000:9000 sonarqube-project-b5

[3] Log in with the details:
admin
admin

[3] Go to my account in the top right, click security and enter a token name for the project.
Copy the token.

[4] From within the Spring project, run the following commands:
mvn clean install
mvn sonar:sonar -Dsonar.login={Your token here}

[5] Go back to SonarQube in your browser and you should see the project.
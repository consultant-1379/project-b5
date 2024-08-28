call mvn clean -f  .\model\mongo\pom.xml install
call mvn clean -f  .\controller\springApp\pom.xml install
call docker-compose up --build
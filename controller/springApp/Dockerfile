FROM openjdk:14-jdk-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
COPY target/vulnerability_analysis-0.0.1-SNAPSHOT.jar /home/spring/application.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/home/spring/application.jar"]

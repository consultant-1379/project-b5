package com.ericsson.mongo.connection;

import com.ericsson.mongo.reports.OwaspCategory;
import com.ericsson.mongo.reports.SecurityHotspot;
import com.ericsson.mongo.reports.Vulnerabilities;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.*;
import com.mongodb.MongoClientURI;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class DBConnection {
    @Value("${spring.data.mongodb.uri}")
    private static final String connection = "mongodb://mongo:27017";

    private static MongoClient client;
    private static MongoDatabase database;

    private static Logger logger = LoggerFactory.getLogger(com.ericsson.mongo.connection.DBConnection.class);

    public static void startConnection(){
        MongoClientURI uri = new MongoClientURI(connection);
        client = new MongoClient(uri);
        database = client.getDatabase("my_database");
    }

    public static void insertProject(Map<Integer, OwaspCategory> categories, String projectKey){
        for(OwaspCategory category : categories.values()){
            insertVulnerabilities(category.getVulnerabilities(), projectKey);
            insertSecurityHotspot(category.getSecurityHotspot(), projectKey);
        }
    }

    public static void insertVulnerabilities(List<Vulnerabilities> vulnerabilities, String projectKey) {
        MongoCollection<Document> collection = createCollection(projectKey);
        for(Vulnerabilities vulnerability : vulnerabilities) {
            Document project = new Document("key", vulnerability.getKey())
                    .append("type", vulnerability.getType().toString())
                    .append("index", vulnerability.getIndex())
                    .append("severity", vulnerability.getSeverity())
                    .append("status", vulnerability.getStatus())
                    .append("creationDate", vulnerability.getCreationDate())
                    .append("updateDate", vulnerability.getUpdateDate());
            if(!checkRowExists(vulnerability.getKey(), vulnerability.getUpdateDate(), collection)){
                collection.insertOne(project);
            }
        }

    }

    public static void insertSecurityHotspot(List<SecurityHotspot> securityHotspots, String projectKey) {
        MongoCollection<Document> collection = createCollection(projectKey);
        for(SecurityHotspot securityHotspot : securityHotspots) {
            Document project = new Document("key", securityHotspot.getKey())
                    .append("type", securityHotspot.getType().toString())
                    .append("index", securityHotspot.getIndex())
                    .append("status", securityHotspot.getStatus())
                    .append("creationDate", securityHotspot.getCreationDate())
                    .append("updateDate", securityHotspot.getUpdateDate());

            if(!checkRowExists(securityHotspot.getKey(), securityHotspot.getUpdateDate(), collection)){
                collection.insertOne(project);
            }
        }
    }

    public static boolean checkRowExists(String key, LocalDateTime updateDate, MongoCollection<Document> collection) {

        BasicDBObject andQuery = new BasicDBObject();
        List<BasicDBObject> obj = new ArrayList<BasicDBObject>();
        obj.add(new BasicDBObject("key", key));
        obj.add(new BasicDBObject("updateDate", updateDate));
        andQuery.put("$and", obj);

        Document result = collection.find(andQuery).first();
        return result != null;
    }

    public static MongoCollection<Document> createCollection(String projectKey) {
        if(!getAllProjects().contains(projectKey)) {
            database.createCollection(projectKey);
        }
        return database.getCollection(projectKey);
    }

    public static FindIterable<Document> getProject(String projectName){
        MongoCollection<Document> collection = database.getCollection(projectName);
        return collection.find();
    }

    public static List<String> getAllProjects(){
        MongoIterable<String> names = database.listCollectionNames();
        List<String> namesList = new ArrayList<>();
        for (String name : names) {
            namesList.add(name);
        }
        return namesList;
    }
}

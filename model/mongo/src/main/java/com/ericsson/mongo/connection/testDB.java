package com.ericsson.mongo.connection;

import org.bson.Document;

import java.util.Iterator;

public class testDB {
    public static void main(String[] args) {
        DBConnection.startConnection();
        for (String s : DBConnection.getAllProjects()) {
            System.out.println(s);
            for (Document row : DBConnection.getProject(s)) {
                System.out.println(row);
            }
        }
    }
}

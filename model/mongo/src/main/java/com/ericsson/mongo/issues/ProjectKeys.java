package com.ericsson.mongo.issues;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectKeys {
    private SonarComponent[] components;

    public ProjectKeys(){}

    public SonarComponent[] getComponents() {
        return components;
    }

    public void setComponents(SonarComponent[] components) {
        this.components = components;
    }
}

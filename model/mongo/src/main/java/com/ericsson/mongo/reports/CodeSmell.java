package com.ericsson.mongo.reports;

public class CodeSmell {
    private int type;
    private String severity;
    private String status;

    public CodeSmell(int type, String severity, String status) {
        this.type = type;
        this.severity = severity;
        this.status = status;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

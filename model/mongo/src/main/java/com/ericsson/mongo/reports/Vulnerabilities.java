package com.ericsson.mongo.reports;

import com.ericsson.mongo.issues.IssueType;

import java.time.LocalDateTime;
import java.util.Map;

public class Vulnerabilities {
    private String key;
    private IssueType type;
    private int index;
    private String severity;
    private String status;
    private LocalDateTime creationDate;
    private LocalDateTime updateDate;
    private Map<String, Integer> textRange;
    private String message;
    private String component;

    public Vulnerabilities(String key, IssueType type, int index, String severity, String status, LocalDateTime creationDate, LocalDateTime updateDate, Map<String, Integer> textRange) {
        this.key = key;
        this.type = type;
        this.index = index;
        this.severity = severity;
        this.status = status;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.textRange = textRange;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public IssueType getType() {
        return type;
    }

    public void setType(IssueType type) {
        this.type = type;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
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

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public Map<String, Integer> getTextRange() {
        return textRange;
    }

    public void setTextRange(Map<String, Integer> textRange) {
        this.textRange = textRange;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getComponent() {
        return component;
    }

    public void setComponent(String component) {
        this.component = component;
    }
}

package com.ericsson.mongo.issues;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SonarQubeIssue {
    private String key;
    private IssueSeverity severity;
    private IssueStatus status;
    private String [] tags;
    private Map<String, Integer> textRange;
    private IssueType type;
    private LocalDateTime creationDate;
    private LocalDateTime updateDate;
    private String message;
    private String component;

    public SonarQubeIssue() {}

    public SonarQubeIssue(String key, IssueSeverity severity, IssueStatus status, String[] tags, IssueType type, LocalDateTime creationDate, LocalDateTime updateDate) {
        this.key = key;
        this.severity = severity;
        this.status = status;
        this.tags = tags;
        this.type = type;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = OffsetDateTime.parse(creationDate, getDateTimeFormatter()).toLocalDateTime();
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = OffsetDateTime.parse(updateDate, getDateTimeFormatter()).toLocalDateTime();
    }

    public static LocalDateTime parseNewDate(String date) {
        return OffsetDateTime.parse(date, getDateTimeFormatter()).toLocalDateTime();
    }

    public static DateTimeFormatter getDateTimeFormatter() {
        return new DateTimeFormatterBuilder()
                .append(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                .optionalStart().appendOffset("+HHMM", "+0000").optionalEnd()
                .toFormatter();
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public IssueSeverity getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = IssueSeverity.valueOf(severity);
    }

    public IssueStatus getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = IssueStatus.valueOf(status);
    }

    public String[] getTags() {
        return tags;
    }

    public Map<String, Integer> getTextRange() {
        return textRange;
    }

    public void setTextRange(Map<String, Integer> textRange) {
        this.textRange = textRange;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public IssueType getType() {
        return type;
    }

    public void setType(String type) {
        this.type = IssueType.valueOf(type);
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

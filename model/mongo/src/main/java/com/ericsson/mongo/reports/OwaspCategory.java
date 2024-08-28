package com.ericsson.mongo.reports;


import com.ericsson.mongo.issues.IssueSeverity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

public class OwaspCategory {
    private Logger logger = LoggerFactory.getLogger(com.ericsson.mongo.reports.OwaspCategory.class);
    private int type;
    private String rating = "A";
    private List<Vulnerabilities> vulnerabilities;
    private List<SecurityHotspot> securityHotspot;
    private List<CodeSmell> codeSmells;
    private List<CWECategory> distribution;
    private int blocker, critical, major, minor, info;

    public OwaspCategory() {}

    public OwaspCategory(int type) {
        this.type = type;
        vulnerabilities = new ArrayList<>();
        securityHotspot = new ArrayList<>();
        codeSmells = new ArrayList<>();
    }

    public OwaspCategory(int type, List<Vulnerabilities> vulnerabilities, List<SecurityHotspot> securityHotspot, List<CWECategory> cweCategories) {
        this.distribution = cweCategories;
    }

    public void countSeverity(IssueSeverity issueSeverity){
        switch(issueSeverity) {
            case BLOCKER:
                blocker++;
                break;
            case CRITICAL:
                critical++;
                break;
            case MAJOR:
                major++;
                break;
            case MINOR:
                minor++;
                break;
            case INFO:
                info++;
                break;
        }
    }

    public void setRating() {
        if(blocker > 0){
            rating = "E";
        }
        else if(critical > 0){
            rating = "D";
        }
        else if(major > 0) {
            rating = "C";
        }
        else if(minor > 0) {
            rating = "B";
        }
        else{
            rating = "A";
        }
    }

    public String getRating(){
        return rating;
    }

    public int getBlocker() {
        return blocker;
    }

    public int getCritical() {
        return critical;
    }

    public int getMajor() {
        return major;
    }

    public int getMinor() {
        return minor;
    }

    public int getInfo() {
        return info;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List<Vulnerabilities> getVulnerabilities() {
        logger.info(String.valueOf(vulnerabilities.size()));
        return vulnerabilities;
    }

    public void setVulnerabilities(List<Vulnerabilities> vulnerabilities) {
        this.vulnerabilities = vulnerabilities;
    }

    public List<SecurityHotspot> getSecurityHotspot() {
        return securityHotspot;
    }

    public void setSecurityHotspot(List<SecurityHotspot> securityHotspot) {
        this.securityHotspot = securityHotspot;
    }

    public List<CodeSmell> getCodeSmells() {
        return codeSmells;
    }

    public void setCodeSmells(List<CodeSmell> codeSmells) {
        this.codeSmells = codeSmells;
    }

    public List<CWECategory> getDistribution() {
        return distribution;
    }

    public void setDistribution(List<CWECategory> distribution) {
        this.distribution = distribution;
    }
}
package com.ericsson.mongo.issues;

import com.ericsson.mongo.reports.OwaspCategory;
import com.ericsson.mongo.reports.SecurityHotspot;
import com.ericsson.mongo.reports.Vulnerabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

public class SortedIssues {
    Logger logger = LoggerFactory.getLogger(com.ericsson.mongo.issues.SortedIssues.class);
    Map<Integer, OwaspCategory> categories;
    private List<Vulnerabilities> vulnerabilities;
    private List<SecurityHotspot> securityHotspots;

    public SortedIssues() {
        initialiseHashMap();
        vulnerabilities = new ArrayList<>();
        securityHotspots = new ArrayList<>();
    }

    public List<Vulnerabilities> getVulnerabilities() {
        return vulnerabilities;
    }

    public void setVulnerabilities(List<Vulnerabilities> vulnerabilities) {
        this.vulnerabilities = vulnerabilities;
    }

    public List<SecurityHotspot> getSecurityHotspots() {
        return securityHotspots;
    }

    public void setSecurityHotspots(List<SecurityHotspot> securityHotspots) {
        this.securityHotspots = securityHotspots;
    }

    public Map<Integer, OwaspCategory> getCategories() {
        return categories;
    }

    public void setCategories(Map<Integer, OwaspCategory> categories) {
        this.categories = categories;
    }

    public Map<Integer, OwaspCategory> sortCategories() {
        sortSecurityHotspots();
        sortVulnerabilities();
        return categories;
    }

    public void sortVulnerabilities() {
        for(Vulnerabilities vulnerability : this.getVulnerabilities()){
            int index = vulnerability.getIndex();
            OwaspCategory category = new OwaspCategory(index);
            categories.put(index, categories.getOrDefault(index, category));
            category = categories.get(index);
            category.getVulnerabilities().add(vulnerability);
            category.countSeverity(IssueSeverity.valueOf(vulnerability.getSeverity()));
            category.setRating();
            logger.info("[vuln] " + categories.toString());
        }
    }

    public void sortSecurityHotspots() {
        for(SecurityHotspot securityHotspot : this.getSecurityHotspots()) {
            int index = securityHotspot.getIndex();
            OwaspCategory category = new OwaspCategory(index);
            categories.put(index, categories.getOrDefault(index, category));
            categories.get(index).getSecurityHotspot().add(securityHotspot);
            logger.info("[hotspot] " + categories.toString());
        }
    }

    private void initialiseHashMap() {
        categories = new HashMap<>();
        for(int i=0;i<10;i++){
            OwaspCategory category = new OwaspCategory(i);
            categories.put(i, category);
        }
    }
}

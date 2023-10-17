package com.example;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.JSONObject;
import org.json.XML;

public class XmlToJsonConverter {

    public static void main(String[] args) {
        String xmlFilePath = "/home/rajesh/Desktop/input.xml"; // Path to your XML file
        String jsonFilePath = "/home/rajesh/Desktop/output.json"; // Output JSON file path

        try {
            String xmlContent = new String(Files.readAllBytes(Paths.get(xmlFilePath)));
            JSONObject jsonObject = XML.toJSONObject(xmlContent);
            String jsonString = jsonObject.toString(4); // Indentation of 4 spaces

            // Write JSON data to the output file
            Files.write(Paths.get(jsonFilePath), jsonString.getBytes());
            System.out.println("Conversion successful. JSON data written to " + jsonFilePath);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

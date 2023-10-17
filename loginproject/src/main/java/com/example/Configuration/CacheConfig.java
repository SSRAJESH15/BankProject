package com.example.Configuration;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
public class CacheConfig {

    @Bean
    public LoadingCache<String, String> userCache() {
        return CacheBuilder.newBuilder()
                .expireAfterWrite(1, TimeUnit.MINUTES)
                .build(new CacheLoader<String, String>() {
                    @Override
                    public String load(String key) {
                        // Load data from database if needed
                        return null;
                    }
                });
    }
}


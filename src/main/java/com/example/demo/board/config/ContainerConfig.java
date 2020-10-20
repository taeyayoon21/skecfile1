package com.example.demo.board.config;

import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ContainerConfig {

    @Bean
    public ServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        // csrf + multipart
        System.out.println("#############csrf + multipart");
        tomcat.addContextCustomizers(context -> context.setAllowCasualMultipartParsing(true));
        return tomcat;
    }

}
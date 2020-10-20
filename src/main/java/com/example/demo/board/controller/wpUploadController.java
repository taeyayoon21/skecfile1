package com.example.demo.board.controller;

import org.apache.commons.io.FileUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.File;
import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.board.common.Innorix;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;

import org.apache.commons.io.FilenameUtils;
//import org.apache.maven.model.Model;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import org.springframework.web.*;


@RestController
public class wpUploadController {
	private static final long serialVersionUID = 1L;
    
    //@PostMapping("/form")    
   //@PostMapping
   //@RequestMapping("/InnorixUpload")    
   //public void doPost(StandardMultipartHttpServletRequest request, @Context HttpServletRequest request2, MultipartHttpServletRequest request3, MultipartFile pocUpload, HttpServletResponse response) throws IOException {
  //public void doPost(HttpServletRequest request2, HttpServletResponse response) throws IOException {
  //@RequestMapping(path = "/InnorixUpload", method = RequestMethod.POST,    produces = "application/json",	        consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
  //@RequestMapping(path = "/InnorixUpload", method = RequestMethod.POST,  consumes="multipart/form-data", produces="text/plain")
	@PostMapping("/InnorixUpload")
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
	      	

  	System.out.println("######################################## wpUploadController.java");
  	//System.out.println("#@@@@@@@@@@@@@@@@@@ body : "+body);
  	//String URI = request2.getRequestURI();
    //System.out.println("@@@@@@@@@@@@@@@URI : "+URI);
    //System.out.println("@@@@@@@@@@@@@@@request.filename : "+request.getFileNames());
 	
		/*
		 * Enumeration enu = request.getParameterNames(); while ( enu.hasMoreElements()
		 * ){ String name = (String) enu.nextElement(); String[] values =
		 * request.getParameterValues(name); for (String value : values) {
		 * System.out.println("name=" + name + ",value=" + value); } }
		 */
	  
		//String _action  = request.getParameter("_action");
		  
      try {
			System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request httpServletRequestToString:["+httpServletRequestToString(request)+"]");
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request2 httpServletRequestToString:["+httpServletRequestToString(request2)+"]");
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ request3 httpServletRequestToString:["+httpServletRequestToString(request3)+"]");
			//System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  pocUpload : "+pocUpload);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
       try {
           
         // new Innorix().upload(request2, response);
          
      } catch (Exception e) {
          
          // TODO Auto-generated catch block
          e.printStackTrace();
      }
      
       
       
       
      
  }

  
  String httpServletRequestToString(HttpServletRequest request) throws Exception {

	    ServletInputStream mServletInputStream = request.getInputStream();
	    byte[] httpInData = new byte[request.getContentLength()];
	    //System.out.println("@@@@@@@@@@@@ mServletInputStream : "+Character.toString((char) httpInData[0]);
	    //System.out.println("@@@@@@@@@@@@ httpInData : "+request.getContentLength());
	    int retVal = -1;
	    StringBuilder stringBuilder = new StringBuilder();

	    while ((retVal = mServletInputStream.read(httpInData)) != -1) {
	        for (int i = 0; i < retVal; i++) {
	            stringBuilder.append(Character.toString((char) httpInData[i]));
	        }
	    }

	    return stringBuilder.toString();
	}
}

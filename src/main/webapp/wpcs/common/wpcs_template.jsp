
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


<%@ page import="org.apache.poi.util.SystemOutLogger"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Date"%>
<%-- <%@ page import="com.skcc.base.Constants" %> --%>

<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<%-- <%@ taglib prefix="framework" uri="http://www.skcc.com/ctl/framework"%>
<%@ taglib prefix="ui" uri="http://www.skcc.com/ctl/ui"%> --%>
<%

try  
{
    String sysdate =  new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        
    /* if (Boolean.TRUE == request.getAttribute(Constants.IS_HEADER)) {  */
    // framework:header 템플릿 시작
%>

<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description" content="" />
    <link href="/favicon.ico" rel="shortcut icon" />

    <title>SKEC - Work Package Control System</title>

    <!-- jQuery -->
    <script src="/ext/script/jquery/jquery-3.4.1.min.js"></script>
   
    <!-- dhtmlx suite 5 -->  
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/material/dhtmlx.css"/>
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/web/dhtmlx.css">
    <link rel="stylesheet" type="text/css" href="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/skins/terrace/dhtmlx.css"/>

    <script src="/ext/script/dhtmlx/dhtmlxSuite_5_1_pro/codebase/dhtmlx.js"></script>
   
   
    <!-- Chart.js v2.9.3 -->
    <link rel="stylesheet" href="/ext/script/chartjs/Chart.min.css">
    <script src="/ext/script/chartjs/Chart.min.js"></script>

   
    <!-- Bootstrap -->  
    <link rel="stylesheet" type="text/css" href="/ext/style/bootstrap/bootstrap.min.css"/>
    <script src="/ext/script/bootstrap/bootstrap.min.js"></script>

   
    <!-- Wijmo5 -->
    <link rel="stylesheet" type="text/css" href="/ext/script/grapecity/Wijmo5-20201.664/Dist/styles/wijmo.css"/>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.input.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.pdf.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.viewer.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.xlsx.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.undo.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.nav.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/cultures/wijmo.culture.en.min.js"></script>
   
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.filter.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.detail.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.grouppanel.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.multirow.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.sheet.min.js"></script>
    <script src="/ext/script/grapecity/Wijmo5-20201.664/Dist/controls/wijmo.grid.xlsx.min.js"></script>

	  <!-- EXCEL MODULE 20200318-->
	  <script src="/ext/script/jszip.min.js"></script>
	  <script src="/ext/script/jszip.js"></script>



    <!-- MDI Icon Pack  [http://meterialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/ext/style/mdi/css/materialdesignicons.css"/>

   
    <!-- WPCS Common  -->
    <link rel="stylesheet" type="text/css" href="/wpcs/common/wpcs_common.css"/>
    <script src="/wpcs/common/wpcs_common.js"></script>
    <script src="/wpcs/common/skec.js"></script>
    <script src="/wpcs/common/message.js"></script>

    
    <c:out value="${j_headerBody}" escapeXml="false"/>
 
 
<%
 // framework:header 템플릿 끝

} else {

// framework:footer 템플릿 시작
%>
   <ui:message/>
   <c:out value="${j_footerBody}" escapeXml="false"/>
  
  </body>
</html>

<%
// framework:footer 템플릿 끝
}
%> 
 
<%
} catch (Exception e) {
        
   e.printStackTrace();
   if (!e.getClass().getName().equals("jeus.servlet.jsp.SkipPageException")) {
         request.setAttribute("javax.servlet.error.exception", e);
         pageContext.include("/Error.jsp");
   }
}
%>
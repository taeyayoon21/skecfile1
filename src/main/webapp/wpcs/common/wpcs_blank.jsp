<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="framework" uri="http://www.skcc.com/ctl/framework"%>

<framework:header bean="com.skec.wpcs.common.AjaxCommon" tx="">
<script type="text/javascript">
   
   function init() {
	   
    skec.error(getUrlParam("msg"), function() {

    });

	   
   }
</script>
</framework:header>
<body onload="init()">
 <div id="dhtmlxObj"></div>
</body>

<framework:footer/> 
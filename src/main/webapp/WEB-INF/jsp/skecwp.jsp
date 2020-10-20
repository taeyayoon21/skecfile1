<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SKEC</title>
    


    <!-- jQuery -->
    <script src="/script/jquery-3.5.1.min.js"></script>
    
    

    
    
    <!-- Bootstrap -->  
    <link rel="stylesheet" type="text/css" href="/script/bootstrap/dist/css/bootstrap.min.css"/>
    <script src="/script/bootstrap/dist/js/bootstrap.min.js"></script>

    
    <!-- dhtmlx suite 6 -->    
    <link rel="stylesheet" type="text/css" href="/script/dhtmlx/suite_trial/codebase/suite.css"/>
    <script src="/script/dhtmlx/suite_trial/codebase/suite.js"></script>


    


    <!-- Chart.js v2.9.3 -->
<!--     <link rel="stylesheet" href="/script/chart.js/Dist/Chart.min.css">
    <script src="/script/chart.js/Dist/Chart.min.js"></script> -->
    <link rel="stylesheet" href="/ext/script/chartjs/Chart.min.css">
    <script src="/ext/script/chartjs/Chart.min.js"></script>




    <!-- MDI Icon Pack  [http://materialdesignicons.com] -->
    <link rel="stylesheet" type="text/css" href="/script/mdi/font/css/materialdesignicons.min.css"/>



    <link rel="stylesheet" href="/script/innorix/innorix.css">
    <script src="/script/innorix/innorix.js"></script>


    <link rel="stylesheet" type="text/css" href="/wpcs/common/skec.css"/>
    <script src="/wpcs/common/skec.js"></script>


    <style>
       


    </style>


    <script>


    </script>

</head>

<body>
 

    <div class="nk-content-lg ">
        <div class="container-fluid">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <div class="nk-block-head nk-block-head-sm">
                        <div class="nk-block-between">
                            <div class="nk-block-head-content">
                                <h3 class="nk-block-title page-title">Material Ref. Files</h3>                                
                            </div>                            
                        </div>
                    </div>
                    <div class="nk-block">
                        <div class="row g-gs">
                            <div class="col-xl-6">
                                <div class="col-xl-12">
                                    <div class="card card-bordered card-full">
                                        <div class="card-inner">
                                            <div id="innoUpload"></div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div class="col-xl-6">    
                                <div class="col-xl-12">
                                    <div class="card card-bordered card-full">
                                        <div class="card-inner">
                                            <div id="innoDownload"></div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </div>

            
    <script>



       



        

        var maxTotalSize = 100 * 1024 * 1024;


        var innoUpload = innorix.create({

            el: '#innoUpload',
            uploadUrl: '/InnorixUpload',
            enableMobileAgent: 'true',
            url: '/innorix',
            agent: 'false',
            resumeType: 'relay',
            custom: {"product":"webpages","subproduct":"codegeneratorhtml5"},
            transferMode: 'upload',
            width: '100%',
            height: 350,
            showGraph: 'true',
            maxTotalSize: maxTotalSize,
            limitRate: 0,
            isHighSpeed: 'true',
            reliableTransfer: 'true',
            resumeUpload: 'true',
            folderIntact: 'true',
            onDblClickRows: 'true',
            loadTransfer: 'true',
            limitExtension: ["exe", "msi", "js", "jsp", "java", "class", "ps"]
        });
            
         
        var innoDown = innorix.create({
                el: '#innoDownload',
                uploadUrl: '/InnorixUpload',
                enableMobileAgent: 'true',
                url: '/innorix',
                agent: 'false',
                resumeType: 'relay',
                custom: {"product":"webpages","subproduct":"codegeneratorhtml5"},
                transferMode: 'download',
                width: '100%',
                height: 350,
                showGraph: 'true',
                transferDownloadPolicy: 'continue',
                limitRate: 0,
                isHighSpeed: 'true',
                reliableTransfer: 'true',
                folderIntact: 'true',
                onDblClickRows: 'true',
                loadTransfer: 'true'
            });

      
	    innoUpload.on('uploadComplete', function(p) {


            alert('upload comp');
            
             
            
        
        });
        
    

    </script>
   
   
  
  </body>

</html>
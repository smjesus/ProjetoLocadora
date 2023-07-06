<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
<%--
 * Projeto:  Carros  -  Sistema de Controle de Locacao de Veiculos.
 * Gerente:  Sergio Murilo  -  smurilo at GMail
 * Data:     Manaus/AM  -  SET/2016
 * Equipe:   Murilo, Erivaldo, Renan
--%>

<%@ page   contentType="text/html"                 pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"           %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"         %>
<%
    response.setHeader("Cache-Control", "no-cache");  // HTTP 1.1
    response.setHeader("Pragma", "no-cache");         // HTTP 1.0
    response.setDateHeader("Expires", -1);            // evita o caching no servidor proxy
%>
<html>
    <head>
        <title>${tituloSistema}</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"                            >
        <meta name="viewport"              content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type"    content="text/html; charset=UTF-8"           >
        <meta HTTP-EQUIV="Pragma"          content="no-cache"                           >
        <meta HTTP-EQUIV="Expires"         content="-1"                                 >
        <link rel="icon" href=<c:url value="/bootstrap/favicon.ico"/>                  />
        <!-- Bootstrap core CSS -->
        <link href=<c:url value="/bootstrap/css/bootstrap.css"/>                     rel="stylesheet">
        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <link href=<c:url value="/bootstrap/css/ie10-viewport-bug-workaround.css"/>  rel="stylesheet">
        <!-- Custom styles for this template -->
        <link href=<c:url value="/bootstrap/css/cover.css"/>                         rel="stylesheet">
        <link href=<c:url value="/bootstrap/css/login.css"/>                         rel="stylesheet">
        <link href=<c:url value="/bootstrap/css/form-elements.css"/>                 rel="stylesheet">
        <link href=<c:url value="/bootstrap/css/style.css"/>                         rel="stylesheet">
        <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500"   rel="stylesheet">

        <!-- Bootstrap core JavaScript by JQuery -->
        <script src=<c:url value="/bootstrap/js/jquery.min.js"/>    ></script>
        <script src=<c:url value="/bootstrap/js/bootstrap.min.js"/> ></script>
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->        
    </head>
    <body>

        <!-- Top content -->
        <div class="top-content" style="margin-bottom: 60px;">
        	
                <div class="container">
                    <div class="row"  style="margin-top: 15px; margin-bottom: 15px;">
                        <div class="col-xs-12 ">
                            <img style="margin: 0 auto;" width="260" src="<c:url value="/WEB-VIEW/images/logo.png" />" class="img-responsive" alt="RS - Locacao de Veiculos">
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                            <div class="form-top">
                                <div class="form-top-left">
                                    <h3><strong>Bem Vindo!</strong></h3>
                                    <p>Para utilizar o sistema forneça suas credenciais.</p>
                                </div>
                                <div class="form-top-right"><i class="fa fa-key"></i></div>
                            </div>
                            <div class="form-bottom">
                                <form role="form" action="<c:url value="/inicio" />" method="post" class="login-form">
                                    <div class="form-group">
                                            <label class="sr-only" for="form-username">Username</label>
                                            <input type="text" name="form-username" placeholder="Usuario..." class="form-username form-control" id="candidato.login" value="${usuario.login}" required autofocus>
                                    </div>
                                    <div class="form-group">
                                            <label class="sr-only" for="form-password">Password</label>
                                            <input type="password" name="form-password" placeholder="Senha..." class="form-password form-control" id="candidato.senha" value="${usuario.senha}" required>
                                    </div>
                                    <button type="submit" class="btn">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 social-login">
                            <h3>...ou fa&ccedil;a o Login com sua conta:</h3>
                        	<div class="social-login-buttons">
	                        	<a class="btn btn-link-1 btn-link-1-facebook" href="#">
	                        		<i class="fa fa-facebook"></i> Facebook
	                        	</a>
	                        	<a class="btn btn-link-1 btn-link-1-twitter" href="#">
	                        		<i class="fa fa-twitter"></i> Twitter
	                        	</a>
	                        	<a class="btn btn-link-1 btn-link-1-google-plus" href="#">
	                        		<i class="fa fa-google-plus"></i> Google Plus
	                        	</a>
                        	</div>
                                <div class="form-group">
                                  &nbsp;${errorMessage}
                                </div>                                
                        </div>
                    </div>

                </div>            
            
        </div>        

        <!--  RODAPE DO SISTEMA   -->   
        <%@include file="/WEB-VIEW/includes/rodape.jsp" %>

    </body>
</html>

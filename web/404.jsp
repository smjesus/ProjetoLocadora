<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
<%--
 * Projeto:  Carros  -  Sistema de Controle de Locacao de Veiculos.
 * Gerente:  Sergio Murilo  -  smurilo at GMail
 * Data:     Manaus/AM  -  SET/2016
 * Equipe:   Murilo, Erivaldo, Renan
--%>

<%@ page   contentType="text/html" pageEncoding="UTF-8"       %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    response.setHeader("Cache-Control", "no-cache");  // HTTP 1.1
    response.setHeader("Pragma", "no-cache");         // HTTP 1.0
    response.setDateHeader("Expires", -1);            // evita o caching no servidor proxy
%>
<html>
    <head>
        <%@include file="/pages/includes/cabecalho.jsp" %>
    </head>

    <body>

    <!--  MENU PRINCIPAL DO SISTEMA   -->
    <%@include file="/pages/includes/menuprincipal.jsp" %>
    
    <!--  CONTEUDO PRINCIPAL DO SISTEMA   -->
    <section class="container">
    <div class="container-fluid "  style="padding-top: 10%;">
	<div class=" text-center ">
            <img height="360" width="220" src="<c:url value="/bootstrap/images/404.png" />" 
                 class="img-responsive center-block m" alt="SIL-BSure">
            <h2  class="cover-heading">Informa&ccedil;&atilde;o n&atilde;o encontrada!</h2>
            <p   class="lead">Se o problema persistir, favor entrar em contato conosco!</p>
	</div>
    </div>
    </section>
    
    <!--  RODAPE DO SISTEMA   -->   
    <%@include file="/pages/includes/rodape.jsp" %>

    </body>
</html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
<%--
 * Projeto:  Carros  -  Sistema de Controle de Locacao de Veiculos.
 * Gerente:  Sergio Murilo  -  smurilo at GMail
 * Data:     Manaus/AM  -  SET/2023
 * Equipe:   Murilo, Victor
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
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"           >
        <meta name="viewport"           content="width=device-width, initial-scale=1"> 
        <meta HTTP-EQUIV="Pragma"       content="no-cache"                           >
        <meta HTTP-EQUIV="Expires"      content="-1"                                 >
    </head>
    <body>
        <h1>Primeira P&acute;gina</h1>
    </body>
</html>

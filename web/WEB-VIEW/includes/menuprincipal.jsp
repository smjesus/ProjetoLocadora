    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#">
                    <img height="240" width="140" src="<c:url value="/pages/images/logo.png" />" class="img-responsive" alt="RS - Locacao de Veiculos">
                </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav  navbar-right">
                        <li <% if (request.getRequestURI().contains("inicio")         ) { %>class="active"<% } %> ><a href='<c:url value="/inicio"            />'><i class="fa fa-home"     ></i> Inicio     </a>  </li>
                        <li <% if (request.getRequestURI().contains("carro/listar")   ) { %>class="active"<% } %> ><a href='<c:url value="/carro/listar"      />'><i class="fa fa-car"      ></i> Carros     </a>  </li>
                        <li <% if (request.getRequestURI().contains("cliente")        ) { %>class="active"<% } %> ><a href='<c:url value="/cliente/listar"    />'><i class="fa fa-users"    ></i> Clientes   </a>  </li>
                        <li <% if (request.getRequestURI().contains("locacao")        ) { %>class="active"<% } %> ><a href='<c:url value="/locacao/listar"    />'><i class="fa fa-calendar" ></i> Locacao    </a>  </li>
                        <li <% if (request.getRequestURI().contains("manutencao")     ) { %>class="active"<% } %> ><a href='<c:url value="/manutencao/listar" />'><i class="fa fa-ambulance"></i> Manutencao </a>  </li>

                        <li id="reports" class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-table"    ></i> Relatorios <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li <% if (request.getRequestURI().contains("preventiva"))        { %>class="active"<% } %> ><a href='<c:url value="/manutencao/preventiva"  />'>Manuten&ccedil;&atilde;o Preventiva</a></li>
                                <li <% if (request.getRequestURI().contains("locacoes")  )        { %>class="active"<% } %> ><a href='<c:url value="/locacao/locacoes"       />'>Locacoes</a></li>
                                <li><a href="#">Locacoes por Mes</a></li>
                                <li><a href="#">Locacoes por Clientes</a></li>
                                <li><a href="#">Balanco Mensal</a></li>
                            </ul>
                        </li>

                        <li id="tools" class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-dashboard" ></i> Administracao <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li <% if (request.getRequestURI().contains("perfil")     ) { %>class="active"<% } %> ><a href='<c:url value="/perfil/listar"      />'>Perfil Administrativo</a></li>
                                <li <% if (request.getRequestURI().contains("graduacao")  ) { %>class="active"<% } %> ><a href='<c:url value="/graduacao/listar"   />'>Gradua&ccedil;&otilde;es Militares</a></li>
                                <li <% if (request.getRequestURI().contains("instituicao")) { %>class="active"<% } %> ><a href='<c:url value="/instituicao/listar" />'>Institui&ccedil;&otilde;es Militares</a></li>
                                <li <% if (request.getRequestURI().contains("item"))        { %>class="active"<% } %> ><a href='<c:url value="/item/listar"        />'>Itens de Manuten&ccedil;&atilde;o</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

              
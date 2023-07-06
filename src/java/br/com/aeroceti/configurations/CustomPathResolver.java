/**
 * Projeto:  Carros  -  Sistema de Controle de Locacao de Veiculos.
 * Gerente:  Sergio Murilo  -  smurilo at GMail
 * Data:     Manaus/AM  -  SET/2016
 * Equipe:   Murilo, Erivaldo, Renan
 */
package br.com.aeroceti.configurations;

import br.com.caelum.vraptor.http.FormatResolver;
import br.com.caelum.vraptor.ioc.Component;
import br.com.caelum.vraptor.view.DefaultPathResolver;

/**
 * Componente de personalizacao de redirecionamento da View do Sistema.
 *     Esta classe modifica o comportamento padrao do VRaptor 3.
 *
 * Copyright (c) 2012 Spectro Tecnologia  -  Todos os direitos reservados.
 *                http://www.spectrotecnologia.com.br
 * 
 * @author Sergio Murilo - smurilo at Gmail.com
 * @version 1.0
 */
@Component
public class CustomPathResolver extends DefaultPathResolver {

    /*
     * Construtor padrão para o PathResolver customizado.
     */
    public CustomPathResolver(FormatResolver resolver) {
        super(resolver);
    }

    /*
     * Este metodo define o local das paginas JSP.
     */
    @Override
    protected String getPrefix() {
        return "/WEB-VIEW/";
    }

}

/*                    End of Class                                            */
/**
 * Projeto:  Carros  -  Sistema de Controle de Locacao de Veiculos.
 * Gerente:  Sergio Murilo  -  smurilo at GMail
 * Data:     Manaus/AM  -  SET/2016
 * Equipe:   Murilo, Erivaldo, Renan
  */
package br.com.aeroceti.carros.appIndex;

//import br.com.aeroceti.configurations.Utilizador;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import java.util.ResourceBundle;

/**
 * Componente de personalizacao de redirecionamento da View do Sistema.
 *     Esta classe inicializa a aplicacao no VRaptor 3.
 *
 * Copyright (c) 2012 Spectro Tecnologia  -  Todos os direitos reservados.
 *                http://www.spectrotecnologia.com.br
 * 
 * @author Sergio Murilo - smurilo at Gmail.com
 * @version 1.0
 */
@Resource
public class PrincipalController {

    /*  Elementos de troca de informacoes do VRaptor  */
    private final Result result       ;
    private final String tituloSistema;
    private final ResourceBundle bundle = ResourceBundle.getBundle("messages");    

    /*
     * Construtor do Controller para as requisicoes iniciais.
     */
    public PrincipalController(Result result) {
        this.result = result;
        this.tituloSistema = bundle.getString("name.title");
    }

    /*
     * Este metodo trata a solicitacao inicial da aplicacao redirecionando para
     * o arquivo index.jsp
     */
    @Path("/")
    public void index() {
        result.include("tituloSistema", tituloSistema);
    }
    
    /*
     * Este metodo trata da solicitacao que redirecionara para um index
     * que contem os menus em modo simples, sem a interface rica em jQuery.
     */
    @Path("/texto")
    public void texto() {
        result.include("tituloSistema", tituloSistema);
    }

    /*
     * Este metodo trata a validacao do login do usuario e o encaminha para a tela
     * inicial do sistema utilizando a interface rica do jQuery Mobile.
     
    @Path("/inicio")
    public Utilizador inicio(Utilizador candidato) {
        result.include("tituloSistema", tituloSistema);
        return candidato;
    }
    */
}

/*                    End of Class                                            */
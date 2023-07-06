/*!
 * Tools v0.1 for Bootstrap 3, by Walter
 * Copyright 2017 AeroCETI 
 * Licensed under http://opensource.org/licenses/MIT
 *
 */

/* global waitingDialog */

// Endereco do servidor:
   var servidor  =  "localhost:8080/carros";                  //  HOMOLOGACAO  
// var servidor  =  "congresso.aeroceti.com.br:8080/carros";  //  HOMOLOGACAO  
// var servidor  =  "locacoes.rscarros.manaus.br";            //  PRODUCAO

$(document).ready(function(){
    // Formata a Tabela da Listagem dos dados:
    $('#table1').DataTable({
      "order": [[ 0, "asc"]],
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": false,
      "info": true,
      "autoWidth": true,
      language: {
        "decimal": ",",
        "thousands": ".",
        "sEmptyTable": "Nenhum registro encontrado",
        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "_MENU_ resultados por página",
        "sLoadingRecords": "Carregando...",
        "sProcessing": "Processando...",
        "sZeroRecords": "Nenhum registro encontrado",
        "sSearch": "Pesquisar",
        "oPaginate": {
            "sNext": "Próximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Último"
        },
        "oAria": {
            "sSortAscending": ": Ordenar colunas de forma ascendente",
            "sSortDescending": ": Ordenar colunas de forma descendente"
        }
      }
    });

    //Quando o campo cep perde o foco.
    $('input[name="endereco.cep"]').blur(function() {
        if ( buscarEndereco() === true ) { 
            $('input[name="endereco.numero"]').focus();
        } else {
            $('input[name="endereco.cep"]').focus();
        }
    });
    
    // Grava o endereco do Cliente:
    $("#submitGravarEndereco").click(function () {
        salvarEndereco();
    });

    // Grava a IMAGEM da CNH do Cliente:
    $("#submitGravarCNH").click(function () {
        salvarCNHFoto();
    });    
});

// Esta funcao apresenta o modal para os DETALHES do CLIENTE:
function showDetalhesCliente(cpf_colaborador) {
    var cpf_formatado   =  cpf_colaborador;
    cpf_colaborador     = cpf_colaborador.replace(/[^\d]+/g,"");
    $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'http://' + servidor + '/cliente/buscar/' +cpf_colaborador+ '/false',
            success: function(data){
                 $.each(data, function(i, colaborador) {
                    //  Limpa o Formulario:
                    $('input[name="cliente.nomeCompleto"]').val("");                           
                    $('input[name="cliente.graduacao"]').val("");
                    $('input[name="cliente.nomeGuerra"]').val("");                    
                    $('input[name="cliente.dataNascimento"]').val("");                    
                    $('input[name="cliente.cpf"]').val("");                    
                    $('input[name="cliente.telefone"]').val("");                    
                    $('input[name="cliente.forcaArmada"]').val("");
                    $('input[name="cliente.localTrabalho"]').val("");                    
                    $('input[name="cliente.telefoneComercial"]').val("");  
                    $('input[name="cliente.email"]').val("");                    
                    $('input[name="cliente.logradouro"]').val("");                    
                    $('input[name="cliente.numero"]').val("");
                    $('input[name="cliente.complemento"]').val("");                    
                    $('input[name="cliente.bairro"]').val("");                    
                    $('input[name="cliente.cep"]').val("");
                    //  Preeche com os dados recebidos da consulta: 
                    $('input[name="cliente.nomeCompleto"]').val(colaborador.nomeCompleto);
                    $('input[name="cliente.cpf"]').val(cpf_formatado);
                    $('input[name="cliente.graduacao"]').val(colaborador.graduacao.titulo);
                    $('input[name="cliente.nomeGuerra"]').val(colaborador.nomeGuerra);                    
                    $('input[name="cliente.dataNascimento"]').val(colaborador.dataNascimento);                    
                    $('input[name="cliente.telefone"]').val(colaborador.telefone);                    
                    $('input[name="cliente.forcaArmada"]').val(colaborador.instituicao.nome);
                    $('input[name="cliente.localTrabalho"]').val(colaborador.localTrabalho.nome);                    
                    $('input[name="cliente.telefoneComercial"]').val(colaborador.localTrabalho.telefone);  
                    $('input[name="cliente.email"]').val(colaborador.email);
                    if( colaborador.endereco.logradouro !== null || colaborador.endereco.logradouro !== "undefined") {
                        $('input[name="cliente.logradouro"]').val(colaborador.endereco.logradouro);
                    }
                    if( colaborador.endereco.numero !== null || colaborador.endereco.numero !== "undefined") {
                        $('input[name="cliente.numero"]').val(colaborador.endereco.numero);
                    }
                    if( colaborador.endereco.complemento !== null || colaborador.endereco.complemento !== "undefined") {
                        $('input[name="cliente.complemento"]').val(colaborador.endereco.complemento);                    
                    }
                    if( colaborador.endereco.bairro !== null || colaborador.endereco.bairro !== "undefined") {
                        $('input[name="cliente.bairro"]').val(colaborador.endereco.bairro);                    
                    }
                    if( colaborador.endereco.cep !== null || colaborador.endereco.cep !== "undefined") {
                        $('input[name="cliente.cep"]').val(colaborador.endereco.cep);  
                    }
                    $('#fichaCAD').append(colaborador.clienteID);
                });  
            }
    });
    $('#detalhesModal').modal('show');
}

function limpa_formulário_cep() {
    $('input[name="endereco.cep"]').val("");
    $('input[name="endereco.logradouro"]').val("");
    $('input[name="endereco.bairro"]').val("");
    $('input[name="endereco.cidade"]').val("");
    $('input[name="endereco.estado"]').val("");
}
 
// Apresenta o formulario para Endereco:
function showFormEndereco(cliente_id) {
    // Limpa os campos:
    limpa_formulário_cep();
    var cpf = cliente_id.replace(/[^\d]+/g,"");
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://' + servidor + '/cliente/buscar/' + cpf + "/false",
        "success": function(data){
            $.each(data, function(i, dados) {
                if( dados.toString() !== "No entity found for query" ) {
                    if(dados.endereco.cep !== null || dados.endereco.cep !== undefined ) {
                        $('input[name="endereco.cep"]').val(dados.endereco.cep);
                    }
                    if(dados.endereco.logradouro !== null || dados.endereco.logradouro !== undefined ) {
                        $('input[name="endereco.logradouro"]').val(dados.endereco.logradouro);
                    }
                    if(dados.endereco.bairro !== null || dados.endereco.bairro !== undefined ) {
                        $('input[name="endereco.bairro"]').val(dados.endereco.bairro);
                    }
                    if(dados.endereco.localidade !== null || dados.endereco.localidade !== undefined ) {
                        $('input[name="endereco.cidade"]').val(dados.endereco.localidade);
                    }
                    if(dados.endereco.estado !== null || dados.endereco.estado !== undefined ) {
                        $('input[name="endereco.estado"]').val(dados.endereco.estado);
                    }
                    if(dados.endereco.numero !== null || dados.endereco.numero !== undefined ) {
                        $('input[name="endereco.numero"]').val(dados.endereco.numero);
                    }
                    if(dados.endereco.complemento !== null || dados.endereco.complemento !== undefined ) {
                        $('input[name="endereco.complemento"]').val(dados.endereco.complemento);
                    }
                    if(dados.clienteID !== null || dados.clienteID !== undefined ) {
                        $('input[name="cliente.clienteID"]').val(dados.clienteID);
                    }
                    if(dados.endereco.enderecoID !== null || dados.endereco.enderecoID !== undefined ) {
                        $('input[name="endereco.enderecoID"]').val(dados.endereco.enderecoID);
                    }                    
                    // abre o Formulario:
                    $('input[name="endereco.cep"]').focus();
                    $('#enderecoModal').modal('show');
                } else {
                    alert("CPF nao encontrado!");
                    $('input[name="endereco.cep"]').focus();
                    return false;
                }
            });
        },
        "error": function(){
            alert("Falha na conexao com o Servidor!");
            $('input[name="endereco.cep"]').focus();
            return false;
        }
    });
}
 
// BUSCA O ENDERECO CONFORME O CEP:
function buscarEndereco() {
    var resposta = true;
    //Nova variável "cep" somente com dígitos.
    var cep = $('input[name="endereco.cep"]').val().replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep !== "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if(validacep.test(cep)) {
            waitingDialog.show("Pesquisando CEP no ViaCEP ...");
            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $('input[name="endereco.logradouro"]').val(dados.logradouro);
                    $('input[name="endereco.bairro"]').val(dados.bairro);
                    $('input[name="endereco.cidade"]').val(dados.localidade);
                    $('input[name="endereco.estado"]').val(dados.uf);
                    $('input[name="endereco.numero"]').focus();
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    limpa_formulário_cep();
                    waitingDialog.hide();
                    resposta = false;
                    alert("CEP não encontrado.");
                    $('input[name="endereco.cep"]').focus();
                }
            });
            waitingDialog.hide();
        } //end if.
        else {
            //cep é inválido.
            resposta = false;
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        //cep sem valor, limpa formulário.
        resposta = false;
        limpa_formulário_cep();
        $('input[name="endereco.cep"]').focus();
    }
    return resposta;
};

function salvarEndereco(){
    $.ajax({
        "url": "http://" + servidor + "/cliente/endereco",
        "type":"POST",
        "data": $("#formularioEnderecoCliente").serialize(),
        "crossDomain": true,
        "success": function(data){
            if( data.RESPOSTA === "SUCESSO" ) {
                alert("Atualizacao Realizada!");
                $('#enderecoModal').modal('hide');
                return false;
            } else {
                alert("Não conseguiu salvar os dados, por favor verifique!");
            }
        },
        "error" : function(){
            alert("Falha na conexao com o Servidor!");
            return false;  
        }
    });        
}

// Apresenta o formulario para a IMAGEM da CNH:
function showFormCNH(cliente_id) {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://' + servidor + '/cliente/buscarCNH/' + cliente_id + "/false",
        "success": function(data){
            $.each(data, function(i, dados) {
                if( dados.toString() !== "No entity found for query" ) {

                    $('input[name="cliente.clienteID"]').val(cliente_id);
                    $('input[name="habilitacaoImagemFile"]').val("");
                    $('input[name="habilitacaoImagemFile"]').focus();
                    $('#cnhFotoModal').modal('show');
                } else {
                    alert("Cliente nao encontrado!");
                    $('input[name="endereco.cep"]').focus();
                    return false;
                }
            });
        },
        "error": function(){
            alert("Falha na conexao com o Servidor!");
            $('input[name="endereco.cep"]').focus();
            return false;
        }
    });
}


// Apresenta a IMAGEM da CNH:
function abrirFOTO(cliente_id) {
    var url = 'http://' + servidor + '/cliente/mostrarCNH/' + cliente_id ;
    $("#cnhShowFotoModal img").attr("src", url);
    $("#cnhShowFotoModal").modal("show");

//    $.ajax({
//        type: 'get',
//        dataType: 'json',
//        url: 'http://' + servidor + '/cliente/buscarCNH/' + cliente_id + "/true",
//        "success": function(data){
//            $.each(data, function(i, dados) {
//                if( dados.toString() !== "No entity found for query" ) {
//                    $('#fotoTituloCNH').append(dados.nomeGuerra);
//                    $('#fotoCNH_do_Cliente').append(dados.habilitacaoImagem);
//                    $('#cnhShowFotoModal').modal('show');
//                } else {
//                    alert("Cliente nao encontrado!");
//                    return false;
//                }
//            });
//        },
//        "error": function(){
//            alert("Falha na conexao com o Servidor!");
//            $('input[name="endereco.cep"]').focus();
//            return false;
//        }
//    });
}
     
function salvarCNHFoto(){
    $.ajax({
        "url": "http://" + servidor + "/cliente/adicionarCNH",
        "type":"POST",
        "data": {
                'cliente.clienteID':  $('#cliente.clienteID').val(),
                'habilitacaoImagemFile': $('#habilitacaoImagemFile').val()

            },
        "crossDomain": true,
        "processData": false,
        "success": function(data){
            if( data.RESPOSTA === "SUCESSO" ) {
                alert("Atualizacao Realizada!");
                $('#cnhFotoModal').modal('hide');
            } else {
                alert("Não conseguiu salvar os dados, por favor verifique!");
            }
            return false;
        },
        "error" : function(){
            alert("Falha na conexao com o Servidor!");
            return false;  
        }
    });        
}

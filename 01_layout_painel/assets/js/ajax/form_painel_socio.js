$('#form-painel-socio').submit(function (e) { 
    e.preventDefault();

    var dados = $( this ).serializeArray();

    var alerta_1 = $('.alerta-submit-form_1');
    var alerta_2 = $('.alerta-submit-form_2');
    var alerta_3 = $('.alerta-submit-form_3');

   $(alerta_1).html('Mensagem de Orientação!').addClass('alerta-submit-form-orientacao');
   $(alerta_2).html('Mensagem de Concluído!').addClass('alerta-submit-form-concluido');
   $(alerta_3).html('Mensagem de Erro!').addClass('alerta-submit-form-erro');
    
      
});
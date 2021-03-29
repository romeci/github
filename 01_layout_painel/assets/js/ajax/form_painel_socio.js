$('#form-painel-socio').submit(function (e) { 
    e.preventDefault();

    var dados = $( this ).serializeArray();

    console.log(dados);
    
});
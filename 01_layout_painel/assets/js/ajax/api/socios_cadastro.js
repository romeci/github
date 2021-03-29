var urlParams = new URLSearchParams(window.location.search);
var cpf = urlParams.get('cpf');
var cpf_padrao = 15586251353;

cpf = (cpf === 'undefined' || cpf === null) ? cpf_padrao : cpf;

var parametros_api = {
  token: "a4a0393088dcdb03ccc2bdf0547aeb2e",
  cpf: cpf,
};

$.ajax({
  type: "POST",
  url: "//assetj.com.br/api/socios/cadastro",
  beforeSend: function (xhr) {
    $(".preload")
      .css("position", "absolute")
      .append(
        '\
      <div id="preloader">\
	<div id="preloader_1" class="preloader"></div>\
	<div id="preloader_2" class="preloader"></div>\
	<div id="preloader_3" class="preloader"></div>\
	<div id="preloader_4" class="preloader"></div>\
	<div id="preloader_5" class="preloader"></div>\
	<div id="preloader_6" class="preloader"></div>\
	<div id="preloader_7" class="preloader"></div>\
	<div id="preloader_8" class="preloader"></div>\
</div>\
      '
      );

    $(".preload > #preloader").show();
  },
  data: JSON.stringify(parametros_api),
  dataType: "json",
  success: function (r) {
    $(".preload > #preloader").hide();

    if (r.status == "sucesso") {

      var hp_foto = r.dados.pessoais.foto;
      var hp_nome = r.dados.pessoais.nome;
      var hp_sobrenome = r.dados.pessoais.sobrenome;
      var hp_nome_sobrenome = hp_nome + " " + hp_sobrenome;
      var hp_cargo = r.dados.profissionais.cargo;
      var hp_data_de_associacao = data_formatada(r.dados.pessoais.data_de_associacao);
      var hp_n_associado = r.dados.pessoais.id;
      var hp_numero_matricula = r.dados.pessoais.numero_matricula;

      var hp_limite_disponivel = r.dados.limite.valor_atual.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      var hp_limite_total = r.dados.limite.valor_normal.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      var hp_plano = r.dados.saude.plano;
      var hp_plano_tipo = r.dados.saude.tipo;
      var hp_plano_contrato_de = r.dados.saude.data_contrato;
      var hp_plano_forma_debito = r.dados.saude.forma_de_debito;

      if (!hp_foto) {
        $(".hp_foto").css({
          "background-image": "url(assets/img/foto.png)",
          "background-repeat": "no-repeat",
          "background-position": "top center",
        });
      } else {
        $(".hp_foto").css({
          "background-image": "url(" + hp_foto + ")",
          "background-repeat": "no-repeat",
          "background-position": "top center",
          "background-size": "cover",
        });
      }

      $(".hp_nome_sobrenome").text(hp_nome_sobrenome);
      $(".hp_cargo").text(hp_cargo);
      $(".hp_data_de_associacao").text(hp_data_de_associacao);
      $(".hp_n_associado").text(hp_n_associado);
      $(".hp_numero_matricula").text(hp_numero_matricula);
      $(".hp_limite_disponivel").text(hp_limite_disponivel);
      $(".hp_limite_total").text(hp_limite_total);
      $(".hp_plano").text(hp_plano);
      $(".hp_plano_tipo").text(hp_plano_tipo);
      $(".hp_plano_contrato_de").text("Contrato de " + hp_plano_contrato_de);
      $(".hp_plano_forma_debito").text(hp_plano_forma_debito);
    } else {
      //
    }

    // const resposta = JSON.stringify(r);
  },
  error: function (r) {
    //
    $("#preloader").hide();
  },
});

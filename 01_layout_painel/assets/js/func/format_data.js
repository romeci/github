function data_formatada(data){

    dia = data.split('/')[0];
    mes = data.split('/')[1];
    ano = data.split('/')[2];

    var date = new Date(ano+"-"+mes+"-"+dia+"T00:00:00.000");

    // "Sat, June 01, 2019"
    var data_formatada = date.toLocaleString("default", {
      //   weekday: 'long', // "Terça-feira"
      month: "long", // "Junho"
      //   day: '2-digit', // "01"
      day: "numeric", // "1"
      year: "numeric", // "2019"
    });

    return data_formatada;
  }


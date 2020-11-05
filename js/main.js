(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function(){


//map




//campo de usuario

let nombre = document.getElementById('nombre');
let  apellido = document.getElementById('apellido');
let  email = document.getElementById('email');


    //campo  pases
  let pase_dia = document.getElementById('pase_dia');
  let  pase_dosdias = document.getElementById('pase_dosdia');
  let   pase_completo = document.getElementById('pase_completo');

  //botones y divs

  let calcular = document.getElementById('calcular');
  let erroDiv = document.getElementById('error');
  let botonRegistro = document.getElementById('btnRegistro');
  let lista_productos= document.getElementById('lista-productos');
  let suma = document.getElementById('suma-total');

  //extras
  let camisas = document.getElementById('camisa_evento');
  let etiquetas = document.getElementById('etiquetas');




  calcular.addEventListener('click', calcularMontos);
  pase_dia.addEventListener('blur', mostrarDias);
  pase_dosdias.addEventListener('blur', mostrarDias);
  pase_completo.addEventListener('blur', mostrarDias);

  nombre.addEventListener('blur', validarCampos);
  apellido.addEventListener('blur', validarCampos);
  email.addEventListener('blur', validarCampos);
  email.addEventListener('blur', validarMail);

  function validarCampos() {
    if(this.value == '') {
      erroDiv.style.display = 'block';
      erroDiv.innerHTML = "*Este campo es obligatorio";
      this.style.border = "1px solid red";
      /* erroDiv.style.border = '1px solid red'; */
    }else {
      erroDiv.style.display = 'none';
      this.style.border = "1px solid #ccc";
    }
  }

  function validarMail() {
    if(this.value.indexOf("@") > -1) {
      erroDiv.style.display = 'none';
      this.style.border = "1px solid #ccc";
    }else {
      erroDiv.style.display = 'block';
      erroDiv.innerHTML = "*Debe escribir caracteres validos";
      this.style.border = "1px solid red";
    }
  }




  function calcularMontos(event) {
    event.preventDefault();
    if(regalo.value === '') {
      alert("Debes elegir un  regalo");
      regalo.focus();
    }else {
      let boletosDias = parseInt(pase_dia.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

      let totalPagar = (boletosDias * 30) + (boletos2Dias*45) + (boletoCompleto * 50) + ((cantCamisas * 10)* .93) + (cantEtiquetas * 2);



      let listadoProductos = [];
      if(boletosDias >= 1) {
      listadoProductos.push(boletosDias + 'Pases por  dia');
      }
      if(boletos2Dias >= 1) {
      listadoProductos.push(boletos2Dias + 'Pases por  2 dias');
      }

      if(boletoCompleto >= 1) {
      listadoProductos.push(boletoCompleto + 'Pases completos');
      }

      if(cantCamisas >= 1) {
        listadoProductos.push(cantCamisas + 'Camisas');
      }

      if(cantEtiquetas >= 1) {
        listadoProductos.push(cantEtiquetas+ 'Etiquetas');
      }
      lista_productos.style.display = 'block';
      lista_productos.innerHTML =  '';
      for(let i = 0; i < listadoProductos.length; i++) {
        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
      }

      suma.innerHTML = "$" +  totalPagar.toFixed(2);



    }
  }

  function mostrarDias()  {
      let boletosDias = parseInt(pase_dia.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0;

            let diasElegidos = [];
            if(boletosDias > 0) {
              diasElegidos.push('viernes');
              }
              if(boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
              }

              if(boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
              }
              for(let i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
              }

  }













}); //DOM CONTENT LOADED


})();

$(function() {

  // Programa de Conferencias

  $('div.ocultar').hide();
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');





  $('.menu-programa a').on('click', function() {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    let enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);

    return false;
  });

  //Animaciones para los Numeros
  $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500);

//cuenta regresiva
/* $('.cuenta-regresiva').countdown('2016/02/10 08:30:00', function(e){
  $('#dias').html(e.strftime('%-d'));
  $('#horas').html(e.strftime('%-H'));
  $('#minutos').html(e.strftime('%M'));
  $('#segundos').html(e.strftime('%S'));
}); */

});

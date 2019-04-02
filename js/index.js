// JavaScript Document

$('#a_editar_informe_form').submit(function(e) {
	e.preventDefault();
  	var data = $(this).serializeArray();
	//console.log("index");
	//editarInformeInicial()
	obtenerInfoInforme(data[0].value);
	
	
});



var iniciarInforme = function(){
	//var keyInfo = iniciarInformeBD();
	window.location.href = 'crearInforme.html';
    //return false;
}



$(document).ready(function(){
	
	sessionStorage.removeItem("informe");
	sessionStorage.removeItem("informeKey");
	
});
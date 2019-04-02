// JavaScript Document

$('#general_form').submit(function(e) {
	e.preventDefault();
  	var data = $(this).serializeArray();
	//var foto_general = $("#foto_general").val();
	//var foto_satelital = $("#foto_satelital").val();
	//console.log(data);
	
	var key = crearInforme(data);
	console.log(key);
	window.location.href = 'editar.html';
	$('.InformeKey').text(key);
	//$('.guardar1').hide();
	//printJS({printable: data, properties: ['name', 'value'], type: 'json'});
	//genPDF(data);
	
});

$('#general_evaluacion_riesgos_form').submit(function(e) {
	e.preventDefault();
  	var data = $(this).serializeArray();
	
	console.log(data);
	
	
	
});



var colors = function() {
	
		var p = $('#man_predictivo').val();
		var pre = $('#man_preventivo').val();
		var c = $('#man_correctivo').val();
	
		
	
		if(p==""){
			p=0;
		}
		if(pre==""){
			pre=0;
		}
		if(c==""){
			c=0;
		}
		var total = parseInt(p) + parseInt(pre) + parseInt(c);
		
		$('#man_total').val(total);
		
		if(total<=100){
			document.getElementById('man_total').style.background = "darkseagreen";
			    
		}else{
			
			document.getElementById('man_total').style.background = "indianred";
			alert("El porcentaje de mantenimiento debe ser menor a 100.")
			$('#man_correctivo').val("");
			$('#man_preventivo').val("");
			$('#man_predictivo').val("");
			$('#man_total').val(0);
		}
	};

var genPDF =function(json) {
	
	var doc = new jsPDF('p', 'pt', 'letter');
	//doc.setFontSize(20);
	//doc.text(20,30,'Informe de inspección', 'center');
	//doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
	//doc.setFontSize(16);
	//doc.setFont("times");
	//doc.setFontType("italic");
	
	var specialElementHandlers = {
		// element with id of "bypass" - jQuery style selector
		'#bypassme': function(element, renderer){
			// true = "handled elsewhere, bypass text extraction"
			return true
		},
		'.hide': function(element, renderer){
      		// true = "handled elsewhere, bypass text extraction"
			return true
		}
	};
	 var source = $('.formulario')[0];
	var margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };
	
	doc.fromHTML(
    	source // HTML string or DOM elem ref.
    	, margins.left // x coord
    	, margins.top // y coord
    	, {
    		'width': margins.width // max width of content on PDF
    		, 'elementHandlers': specialElementHandlers
    	},
    	function (dispose) {
    	  // dispose: object with X, Y of the last line add to the PDF 
    	  //          this allow the insertion of new lines after html
          doc.save('Test.pdf');
        },
    	margins
    )
//	doc.setTextColor(100);
//	doc.text(20, 20, 'This is gray.');
//
//	doc.setTextColor(150);
//	doc.text(20, 30, 'This is light gray.');
//
//	doc.setTextColor(255,0,0);
//	doc.text(20, 40, 'This is red.');
//
//	doc.setTextColor(0,255,0);
//	doc.text(20, 50, 'This is green.');
//
//	doc.setTextColor(0,0,255);
//	doc.text(20, 60, 'This is blue.');
	
	
//	doc.addPage();
//	doc.text(20,20,'TEST Page 2!');
//	
//	doc.setProperties({
//    title: 'Informe de inspeccion',
//    subject: 'Ingetech',
//    author: 'Oscar Gomez',
//    creator: 'Oscar Gomez'
//	});
//	doc.save('InformeInspeccion.pdf');
	
}

$(document).ready(function(){
	
	$("#descripccion_grupo").hide();
	
    $('#grupo_construccion').on('change', function() {
	  $("#descripccion_grupo").show();
      if ( this.value == 1)
      {
        $("#descripccion_grupo").text("Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1Descripccion GRupo 1");
      }
      else if(this.value == 2)
      {
        $("#descripccion_grupo").text("Descripccion GRupo 2");
      }else if(this.value == 3)
      {
        $("#descripccion_grupo").text("DescripccionGRupo 3");
      }else if(this.value == 4)
      {
        $("#descripccion_grupo").text("Descripccion GRupo 4");
      }else if(this.value == 5)
      {
        $("#descripccion_grupo").text("Descripccion GRupo 5");
      }else if(this.value == 6)
      {
        $("#descripccion_grupo").text("Descripccion GRupo 6");
      }else{
		  $("#descripccion_grupo").text("");
	  }
    });
	
	
	  $('#btnDelMaq').attr('disabled','disabled');
	  $('#btnAddMaq').click(function() {
		var num = $('.clonedInputMaq').length; // how many "duplicatable" input fields we currently have
		var newNum = new Number(num + 1); // the numeric ID of the new input field being added

		// create the new element via clone(), and manipulate it's ID using newNum value
		var newElem = $('#maquinaria' + num).clone().attr('id', 'maquinaria' + newNum);

		// manipulate the name/id values of the input inside the new element
		  var cont = 0;
		  newElem.children().children(':input').each(function(){
			  if(cont==0){
				  $(this).attr('id', 'nombre_maquinaria_' + newNum).attr('name', 'nombre_maquinaria_' + newNum);
			  }else if(cont==1){
				   $(this).attr('id', 'marca_maquinaria_' + newNum).attr('name', 'marca_maquinaria_' + newNum);
			  }else if(cont==2){
				   $(this).attr('id', 'cantidad_maquinaria_' + newNum).attr('name', 'cantidad_maquinaria_' + newNum);
			  }else if(cont==3){
				   $(this).attr('id', 'edad_maquinaria_' + newNum).attr('name', 'edad_maquinaria_' + newNum);
			  }else if(cont==4){
				   $(this).attr('id', 'mantenimiento_maquinaria_' + newNum).attr('name', 'mantenimiento_maquinaria_' + newNum);
			  }else {
				   $(this).attr('id', 'syr_maquinaria_' + newNum).attr('name', 'syr_maquinaria_' + newNum);
			  }
        	   cont++;
        	});
		  
//		newElem.children().children[0].attr('id', 'name' + newNum).attr('name', 'name' + newNum);

		// insert the new element after the last "duplicatable" input field
		$('#maquinaria' + num).after(newElem);
		$('#cuantas_maquinas').val(num+1);
		// enable the "remove" button
		$('#btnDelMaq').attr('disabled',false);

		// business rule: you can only add 10 names
		if (newNum === 10){
		  $('#btnAddMaq').attr('disabled','disabled');
		}
	  });

	  $('#btnDelMaq').click(function() {
		  
		var num = $('.clonedInputMaq').length; // how many "duplicatable" input fields we currently have
		$('#maquinaria' + num).remove(); // remove the last element
		$('#cuantas_maquinas').val(num-1);
		// enable the "add" button
		$('#btnAddMaq').attr('disabled',false);

		// if only one element remains, disable the "remove" button
		if (num-1 === 1){
		  $('#btnDelMaq').attr('disabled','disabled');
		}
	  });
	
	 $('#btnDelEq').attr('disabled','disabled');
	  $('#btnAddEq').click(function() {
		var num = $('.clonedInputEq').length; // how many "duplicatable" input fields we currently have
		var newNum = new Number(num + 1); // the numeric ID of the new input field being added

		// create the new element via clone(), and manipulate it's ID using newNum value
		var newElem = $('#equipo' + num).clone().attr('id', 'equipo' + newNum);

		// manipulate the name/id values of the input inside the new element
		  var cont = 0;
		  newElem.children().children(':input').each(function(){
			  if(cont==0){
				  $(this).attr('id', 'nombre_equipo_' + newNum).attr('name', 'nombre_equipo_' + newNum);
			  }else if(cont==1){
				   $(this).attr('id', 'marca_equipo_' + newNum).attr('name', 'marca_equipo_' + newNum);
			  }else if(cont==2){
				   $(this).attr('id', 'cantidad_equipo_' + newNum).attr('name', 'cantidad_equipo_' + newNum);
			  }else if(cont==3){
				   $(this).attr('id', 'edad_equipo_' + newNum).attr('name', 'edad_equipo_' + newNum);
			  }else if(cont==4){
				   $(this).attr('id', 'mantenimiento_equipo_' + newNum).attr('name', 'mantenimiento_equipo_' + newNum);
			  }else {
				   $(this).attr('id', 'syr_equipo_' + newNum).attr('name', 'syr_equipo_' + newNum);
			  }
        	   cont++;
        	});
		  
//		newElem.children().children[0].attr('id', 'name' + newNum).attr('name', 'name' + newNum);

		// insert the new element after the last "duplicatable" input field
		$('#equipo' + num).after(newElem);
		$('#cuantos_equipos').val(num+1);
		// enable the "remove" button
		$('#btnDelEq').attr('disabled',false);

		// business rule: you can only add 10 names
		if (newNum === 10){
		  $('#btnAddEq').attr('disabled','disabled');
		}
	  });

	  $('#btnDelEq').click(function() {
		  
		var num = $('.clonedInputEq').length; // how many "duplicatable" input fields we currently have
		$('#equipo' + num).remove(); // remove the last element
		$('#cuantos_equipos').val(num-1);
		// enable the "add" button
		$('#btnAddEq').attr('disabled',false);

		// if only one element remains, disable the "remove" button
		if (num-1 === 1){
		  $('#btnDelEq').attr('disabled','disabled');
		}
	  });
	
	
	 
	
	
	
	  $('#btnDelExt').attr('disabled','disabled');
	  $('#btnAddExt').click(function() {
		var num = $('.clonedInputExt').length; // how many "duplicatable" input fields we currently have
		var newNum = new Number(num + 1); // the numeric ID of the new input field being added

		// create the new element via clone(), and manipulate it's ID using newNum value
		var newElem = $('#extintor' + num).clone().attr('id', 'extintor' + newNum);

		// manipulate the name/id values of the input inside the new element
		  var cont = 0;
		  newElem.children().children(':input').each(function(){
			  if(cont==0){
				  $(this).attr('id', 'cantidad_extintor_' + newNum).attr('name', 'cantidad_extintor_' + newNum);
			  }else if(cont==1){
				   $(this).attr('id', 'capacidad_extintor_' + newNum).attr('name', 'capacidad_extintor_' + newNum);
			  }else if(cont==2){
				   $(this).attr('id', 'tipo_extintor_' + newNum).attr('name', 'tipo_extintor_' + newNum);
			  }else {
				   $(this).attr('id', 'fecha_carga_extintor' + newNum).attr('name', 'fecha_carga_extintor' + newNum);
			  }
        	   cont++;
        	});
		  
//		newElem.children().children[0].attr('id', 'name' + newNum).attr('name', 'name' + newNum);

		// insert the new element after the last "duplicatable" input field
		$('#extintor' + num).after(newElem);
		
		// enable the "remove" button
		$('#btnDelExt').attr('disabled',false);

		// business rule: you can only add 10 names
		if (newNum === 10){
		  $('#btnAddExt').attr('disabled','disabled');
		}
	  });

	  $('#btnDelExt').click(function() {
		  
		var num = $('.clonedInputExt').length; // how many "duplicatable" input fields we currently have
		$('#extintor' + num).remove(); // remove the last element
		
		// enable the "add" button
		$('#btnAddExt').attr('disabled',false);

		// if only one element remains, disable the "remove" button
		if (num-1 === 1){
		  $('#btnDelExt').attr('disabled','disabled');
		}
	  });
 


	
	
	
});




// JavaScript Document

$('#general_form').submit(function(e) {
	e.preventDefault();
  	var data = $(this).serializeArray();
	var foto_general = $("#foto_general").val();
	var foto_satelital = $("#foto_satelital").val();
	console.log(data);
	//printJS({printable: data, properties: ['name', 'value'], type: 'json'});
	genPDF(data);
	
});

var genPDF =function(json) {
	
	var doc = new jsPDF('p', 'pt', 'letter')
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
});




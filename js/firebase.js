// JavaScript Document 
var config = {
    apiKey: "AIzaSyABQlll7jAWzi5LcsweGC8acrJ2-PN8wyM",
    authDomain: "ingetech-5cc58.firebaseapp.com",
    databaseURL: "https://ingetech-5cc58.firebaseio.com",
    projectId: "ingetech-5cc58",
    storageBucket: "ingetech-5cc58.appspot.com",
    messagingSenderId: "619161368411"
  };

  firebase.initializeApp(config);

var titulo = document.getElementById('hola');
var dbref= firebase.database().ref().child('titulo');
//dbref.on('value', snap => titulo.innerText = snap.val());


function hoyFecha(){
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = addZero(dd);
        mm = addZero(mm);
 
        return yyyy+'-'+mm+'-'+dd;
}


function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}


var crearInforme =function(datajson) {
	 var checks = $('input:checkbox').map(function() {
   return { name: this.name, value: this.checked ? this.value : "false" };
 });
//console.log(checks);
	console.log(datajson);
	var databaseRef = firebase.database().ref();
	var postsRef = databaseRef.child("informes");
	

	var newPostRef = postsRef.push();
	
	newPostRef.update({
	    fecha_creacion : hoyFecha(),
		aseguradora : datajson[0].value,
		ciudad : datajson[1].value,
		consecutivo_visita : datajson[2].value,
		tipo_riesgo : datajson[3].value,
		cliente : datajson[4].value,
		intermediario : datajson[5].value,
		fecha_asignacion : datajson[6].value,
		fecha_inspeccion : datajson[7].value,
		ordenado_por : datajson[8].value,
		inspector : datajson[9].value,
		asegurado : datajson[10].value,
		nit : datajson[11].value,
		direccion : datajson[12].value,
		estrato : datajson[13].value,
		ciudad_riesgo : datajson[14].value,
		departamento : datajson[15].value,
		telefono : datajson[16].value,
		persona_contacto : datajson[17].value,
		cargo : datajson[18].value,
		tipo_actividad : datajson[19].value,
		descripccion : datajson[20].value,
		numero_bloques : datajson[21].value,
		numero_pisos_bloque : datajson[22].value,
		numero_apartamentos : datajson[23].value,
		numero_parqueaderos : datajson[24].value,
		numero_sotanos : datajson[25].value,
		descripccion_parqueaderos : datajson[26].value,
		latitud : datajson[27].value,
		longitud : datajson[28].value,
		altitud : datajson[29].value,
		descripcion_ubicacion : datajson[30].value,
		lindero_norte : datajson[31].value,
		lindero_sur : datajson[32].value,
		lindero_oriente : datajson[33].value,
		lindero_occidente : datajson[34].value,
		grupo_construccion : datajson[35].value,
		edad_constructiva : datajson[36].value,
		norma_sismoresistencia : datajson[37].value,
		material_cubierta_estructura : datajson[38].value,
		materiales_fachada : datajson[39].value,
		materiales_escalera : datajson[40].value,
		materiales_entrepisos : datajson[41].value,
		materiales_pisos : datajson[42].value,
		irregularidad_altura : datajson[43].value,
		irregularidad_planta : datajson[44].value,
		cerramiento : datajson[45].value,
		observaciones_tipo_construccion: datajson[46].value,
		senderos_peatonales : checks[0].value,
		vias_vehiculares : checks[1].value,
		porteria : checks[2].value,
		lobby : checks[3].value,
		banos_porteria : checks[4].value,
		cuarto_basura : checks[5].value,
		oficina_admin : checks[6].value,
		canchas_deportivas : checks[7].value,
		salon_comunal : checks[8].value,
		zona_humeda : checks[9].value,
		juegos_infantiles : checks[10].value,
		tanques_agua_sub : checks[11].value,
		tanques_agua_aereos : checks[12].value,
		transformador_electrico : checks[13].value,
		planta_electrica : checks[14].value,
		ascensores : checks[15].value,
		cuartos_maquina_bombeo : checks[16].value,
		equipos_bombeo : checks[17].value,
		gimnasio : checks[18].value,
		bbq : checks[19].value,
		riesgo_azaroso: datajson[47].value,
		ventilacion_adecuada:  datajson[48].value,
 		tipo_iluminacion:  datajson[49].value,
		merc_separada_lamp_techos:  datajson[50].value,
		iluminacion_corredores:  datajson[51].value,
		forma_almacenamiento:  datajson[52].value,
		altura_apilamineto:  datajson[53].value,
		tipo_embalaje:  datajson[54].value,
		ancho_corredor:  datajson[55].value,
		observaciones_info_almacenamiento:  datajson[56].value,
		energia:  datajson[57].value,
		quien_energia:  datajson[58].value,
		agua:  datajson[59].value,
		quien_agua:  datajson[60].value,
		aire_acondicionado:  datajson[61].value,
		quien_aire:  datajson[62].value,
		gas:  datajson[63].value,
		quien_gas:  datajson[64].value,
		combustible	:  datajson[65].value,
		quien_combustible:  datajson[66].value,
		cuales_combustible:  datajson[67].value,
		telecomunicaciones:  datajson[68].value,
		quien_telecom:  datajson[69].value,
		cuales_telecom:  datajson[70].value,
		orden_lugar:  datajson[71].value,
		limpieza:  datajson[72].value,
		vias_circulacion:  datajson[73].value,
		vias_evacuacion:  datajson[74].value,
		periodicidad_aseo:  datajson[75].value,
		tiene_permisos:  datajson[76].value,
		cuales_permisos_se_trabjan:  datajson[77].value,
		permisos_auditados:  datajson[78].value,
		frecuencia_auditoria:  datajson[79].value,
		software_especilizado:  datajson[80].value,
		que_programas:  datajson[81].value,
		licencias_software:  datajson[82].value,
		dinero_efectivo:  datajson[83].value,
		monto_avg_mensual:  datajson[84].value,
		siniestro_1:  datajson[85].value,
		bien_afectado_1:  datajson[86].value,
		vr_perdida_1:  datajson[87].value,
		poliza_si_1:  datajson[88].value,
		valor_indem_1:  datajson[89].value,
		correctivos_1:  datajson[90].value,
		siniestro_2:  datajson[91].value,
		bien_afectado_2:  datajson[92].value,
		vr_perdida_2:  datajson[93].value,
		poliza_si_2:  datajson[94].value,
		valor_indem_2:  datajson[95].value,
		correctivos_2:  datajson[96].value,
		siniestro_3:  datajson[97].value,
		bien_afectado_3:  datajson[98].value,
		vr_perdida_3:  datajson[99].value,
		poliza_si_3:  datajson[100].value,
		valor_indem_3:  datajson[101].value,
		correctivos_3:  datajson[102].value

		
		
	
	});
	
	return newPostRef.key;
	
	//alert("Recuerda que para editar tu informe debes recordar el siguiente ID: " + newPostRef.key);
	
	
	//console.log('-LWmea6xgbnwQkYU67Kd');
	//window.location.href = 'index.html';
	
};


var editarInforme =function(datajson) {
	var checks = $('input:checkbox').map(function() {
   		return { name: this.name, value: this.checked ? this.value : "false" };
 	});

	var databaseRef = firebase.database().ref();
	var llave = sessionStorage.getItem('informeKey');
	var postsRef = databaseRef.child("informes").child(llave);
	
	//console.log(datajson);

	
	postsRef.update({
	    fecha_edicion : hoyFecha(),
		aseguradora : datajson[0].value,
		ciudad : datajson[1].value,
		consecutivo_visita : datajson[2].value,
		tipo_riesgo : datajson[3].value,
		cliente : datajson[4].value,
		intermediario : datajson[5].value,
		fecha_asignacion : datajson[6].value,
		fecha_inspeccion : datajson[7].value,
		ordenado_por : datajson[8].value,
		inspector : datajson[9].value,
		asegurado : datajson[10].value,
		nit : datajson[11].value,
		direccion : datajson[12].value,
		estrato : datajson[13].value,
		ciudad_riesgo : datajson[14].value,
		departamento : datajson[15].value,
		telefono : datajson[16].value,
		persona_contacto : datajson[17].value,
		cargo : datajson[18].value,
		tipo_actividad : datajson[19].value,
		descripccion : datajson[20].value,
		numero_bloques : datajson[21].value,
		numero_pisos_bloque : datajson[22].value,
		numero_apartamentos : datajson[23].value,
		numero_parqueaderos : datajson[24].value,
		numero_sotanos : datajson[25].value,
		descripccion_parqueaderos : datajson[26].value,
		latitud : datajson[27].value,
		longitud : datajson[28].value,
		altitud : datajson[29].value,
		descripcion_ubicacion : datajson[30].value,
		lindero_norte : datajson[31].value,
		lindero_sur : datajson[32].value,
		lindero_oriente : datajson[33].value,
		lindero_occidente : datajson[34].value,
		grupo_construccion : datajson[35].value,
		edad_constructiva : datajson[36].value,
		norma_sismoresistencia : datajson[37].value,
		material_cubierta_estructura : datajson[38].value,
		materiales_fachada : datajson[39].value,
		materiales_escalera : datajson[40].value,
		materiales_entrepisos : datajson[41].value,
		materiales_pisos : datajson[42].value,
		irregularidad_altura : datajson[43].value,
		irregularidad_planta : datajson[44].value,
		cerramiento : datajson[45].value,
		observaciones_tipo_construccion: datajson[46].value,
		senderos_peatonales : checks[0].value,
		vias_vehiculares : checks[1].value,
		porteria : checks[2].value,
		lobby : checks[3].value,
		banos_porteria : checks[4].value,
		cuarto_basura : checks[5].value,
		oficina_admin : checks[6].value,
		canchas_deportivas : checks[7].value,
		salon_comunal : checks[8].value,
		zona_humeda : checks[9].value,
		juegos_infantiles : checks[10].value,
		tanques_agua_sub : checks[11].value,
		tanques_agua_aereos : checks[12].value,
		transformador_electrico : checks[13].value,
		planta_electrica : checks[14].value,
		ascensores : checks[15].value,
		cuartos_maquina_bombeo : checks[16].value,
		equipos_bombeo : checks[17].value,
		gimnasio : checks[18].value,
		bbq : checks[19].value
		
		
	
	});
	
	//alert("Recuerda que para editar tu informe debes recordar el siguiente ID: " + postsRef.key);
	
	
	//console.log('hosjlas');
	window.location.href = 'index.html';
	
};


var obtenerInfoInforme = function(keyInforme){
	var databaseRef = firebase.database().ref().child("informes");
	var entro = false;
	databaseRef.on("child_added", function(snapshot) {
		if(snapshot.key==keyInforme){	
			var newPost = snapshot.val();
			sessionStorage.setItem('informe', JSON.stringify(newPost));
			sessionStorage.setItem('informeKey', keyInforme);
			window.location.href = 'editarInforme.html';
			var entro = true;
		}
		
 
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
//	if(!entro){
//		alert("No se pudo encontrar el informe con ese ID en nuestra base de datos");
//	}
	
}

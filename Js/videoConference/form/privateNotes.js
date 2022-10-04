
function privateNotes(){
	
	$('#tab-d').on('click', function(){
		//Si el elemento esta vacio solo puedo crear nueva nota. 
		toastr.options = {
			"closeButton": true,
			"positionClass": "toast-bottom-right",

		  }
		toastr.info('Click <b>"New Note"</b> to start a new note');
		
	});
	$('.btn-new-note').on('click', function(){
		//Si el elemento esta vacio solo puedo crear nueva nota. 
		showElements(this)
		$('#note').attr("placeholder", "Now, add a heading and press Enter");
	});
	// Demo: edición de título que se reescribe con el texto del textarea
	$('#note').on('keydown keyup', function(){
		insertTitle();
		
	});
	// Agrego clase selected para mostrar opción de borrar
	$('.note-title').on('click', function(){
		toggleSelected(this)
		if ($(this).hasClass("selected")){
			$('.icon-remove').fadeIn()
		}else{
			$('.icon-remove').hide()
		}

		
	});
	$('.icon-remove').on('click', function(){
		hideElementsOn(this)
	})
}				
/*-----------------FUNCIONES DE NOTAS PRIVADAS--------------*/	 
function showElements(elem){
	//Si el elemento esta vacio solo puedo crear nueva nota. 
	if ($.trim($(elem).html())){
		$('.title-wrapper').show()
		$('.notes').removeAttr("disabled").focus();
	}
}
function toggleSelected(elem){
	$(elem).toggleClass("selected");	
}
function hideElementsOn(elem){
	$('.title-wrapper').hide()
	$('.note-title').removeClass('selected').html('New Note')
	$('.notes').val('').attr("disabled", true)
	$(elem).hide();
}
function writeTitle(){
	// se agrega la primer porcion del texto al titulo. Esta pensado en un input por la posibilidad de editar el titulo
	if($('.notes').length > 0){
	 	var texto= $('.notes').val()
	 	var lines = texto.substring(0, 30);
		/*console.log(lines)*/
	 	$('.note-title').text(lines)
		 
 	}
}
function insertTitle(){
	$('#note').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			writeTitle()  
			console.log("apreto")
		}
		
	});
}

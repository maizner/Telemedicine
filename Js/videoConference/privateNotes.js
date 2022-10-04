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
	$('.note-title').removeClass('selected').html('Nueva nota')
	$('.notes').val('').attr("disabled", true)
	$(elem).hide();
}
function insertTitle(){
	// se agrega la primer porcion del texto al titulo. Esta pensado en un input por la posibilidad de editar el titulo
	if($('.notes').length > 0){
	 	var texto= $('.notes').val()
	 	var lines = texto.substring(0, 30);
		/*console.log(lines)*/
	 	$('.note-title').text(lines)
 	}
}
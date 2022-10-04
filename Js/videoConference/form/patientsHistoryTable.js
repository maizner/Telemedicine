/*-----------------HISTORIAL DE CONSULTAS--------------*/	
function PatientHistoryTable(){
	//Agrego una clase que pinta la fila seleccionada
	$('.history-striped-table tr').on('click', function (e) {
		$('tr').removeClass('selected');
	    $(this).addClass('selected');

	    if ($(this).hasClass('selected')){
	    	$('.histories-container').hide();
	    	$('.patient-history-container').fadeIn(500);
	    }
	}); 

	$('.back-container').on('click', function(){
		
    	$('.patient-history-container').hide();
    	$('.histories-container').fadeIn(500);
	})
}
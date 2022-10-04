function focusInOutLabelForm(){
	$('.form-group').on('focusin', function(){
	$(this).addClass('focus');
    }).on('focusout', function(){
    	var input = $(this).find('.form-control');
    	if(($(input).val().length == 0)){
    		/*console.log(input);*/
    		$(this).removeClass('focus');
    	}
    });
}
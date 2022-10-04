function switchToggleColor(element){
	var swStatus = false;
	var swbox = $(element).find('.switch-checkbox');
	swbox.on('change', function() {
		if ($(this).is(':checked')) {
	        swStatus = true;
	        $("#specialist").removeAttr("disabled")
	        $(this).parents().siblings('.enable').addClass("active")
	        $(this).parents().siblings('.disable').removeClass("active")
	    }
	    else {
	       swStatus = false;
	       $("#specialist").prop('disabled', 'disabled')
	       $(this).parents().siblings('.enable').removeClass("active")
	       $(this).parents().siblings('.disable').addClass("active")
	    }

	});
	
}
function buttonVideoBehavior(){
	$('.btn_video').on('click', function(){
		var buttonText = $(this).siblings("p")
		
		if ($(this).hasClass('on')){

			$(this).removeClass('on').addClass('off')
			
			if ($(this).hasClass('btn-camera')){

				$('.img-wrap').css('background-image', '')
				$('.dr-image.img-wrap').css('background-image', '')
				$('.dr-image .avatar').removeClass('hidden')
			
				toastr.warning('Your camera is off');
			}
			if ($(this).hasClass('btn-microphone')){
				
				toastr.warning('Your microphone is off');
			}
			
			
		}else{
			$(this).addClass('on').removeClass('off')
			$('.dr-image.img-wrap').css('background-image', 'url(img/thumb84x101.jpg)')
			$('.dr-image .avatar').addClass('hidden')
			
			if ($(this).hasClass('btn-camera')){

				toastr.success('Your camera is on');
			}
			if ($(this).hasClass('btn-microphone')){
		
				toastr.success('Your microphone is on');
			}
		}

		if(buttonText.hasClass('unclicked')){
			buttonText.addClass('clicked').removeClass('unclicked')
		}else{buttonText.removeClass('clicked').addClass('unclicked')}
	});
}
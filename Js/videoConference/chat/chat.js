function toggleChat(){
			
	    $('.close-tab').on('click', function(){
	    	$('.chat-box').removeClass('open');
	    	chatAttachOff()
	    });
	   
	   $('.btn-chat').on('click', function(){
	   		chatTabsBehavior($(this), '#chat-tab')
	   })

	    $('.btn-attach').on('click', function(){
	    	chatTabsBehavior($(this), '#chatfile-tab')
	   })
}

function chatAttachOff(){
	$('.btn-chat, .btn-attach').removeClass('on').addClass('off')
}

function chatTabsBehavior(element, theOtherTab){
	if($(element).hasClass('on')){
   		$('.chat-box').addClass('open');
   		$(theOtherTab).trigger("click")
   	}else{
   		$('.chat-box').removeClass('open');
   		chatAttachOff()
   	}
}
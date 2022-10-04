function videoSequential(){
 var i = 0;
    $('#video').bind('ended', function() {
        this.src = sources[i++ % sources.length]
        this.load()
        this.play()
        var selectorhash = videoSel[i -1 % videoSel.length];
        var selector = selectorhash.substring(1);
        console.log(selectorhash)

       
    });
}


function onPress(selector,source){
  var vid = $('#video')
	$(selector).click( function(){
    $(selector).addClass('active').siblings().removeClass('active');

    var selectorId = this.id    
 		vid.stop().attr('src', source);
    vid.attr('data-info', selectorId);

   });
}


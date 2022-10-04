function videoSequential(){
 var i = 0;
    $('#video').bind('ended', function() {
        this.src = sources[i++ % sources.length]
        this.load()
        this.play()
        var selectorhash = videoSel[i - 1 % videoSel.length];
        var selector = selectorhash.substring(1);
        console.log(selector)
        
        $('#video').attr('data-info', selector)
        var myStep = $('video-cards').find('.step')
        if ($('.step').id == selector){
          this.addClass('active').siblings().removeClass('active');
        }
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


function makeProgress(){
  var i = 0;
    if(i < 100){
        i = i + 1;
        $(".progress-bar").css("width", i + "%");
    }
    // Wait for sometime before running this script again
    setTimeout("makeProgress()", 100);
}

index js old
var sources = ['media/video/seq1.mp4','media/video/seq2.mp4', 'media/video/seq3.mp4'];
  var videoSel = ['#sel-0','#sel-1', '#sel-2']

  $(document).ready(function() {
    
    makeProgress()
    function makeProgress(){
      var i = 0;
        if(i < 100){
            i = i + 1;
            $(".progress-bar").css("width", i + "%");
        }
        // Wait for sometime before running this script again
        setTimeout("makeProgress()", 100);
    }
  });
  

$(function(){
  if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (hash == "sentemail"){
        openToastr();
      }
  }
  videoSequential();
      for (i = 0; i < videoSel.length; i++) { 
      onPress(videoSel[i],sources[i]);
  }

})

function openToastr(){
  setTimeout(function() {
        toastr.options = {
            closeButton: false,
            progressBar: false,
            "positionClass": "toast-top-center",
            showMethod: 'slideDown',
            timeOut: 4000
        };
        toastr.info('¡hola');

    }, 1300);
}
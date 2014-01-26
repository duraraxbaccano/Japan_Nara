window.onload = function(){

  $('p#menubar a[data-target]').click(function() {
      var moveTo=$($(this).attr("data-target"));

        $('html,body').animate({
          scrollTop: moveTo.offset().top
        }, 1000);
  });

  $("p#menubar").affix({
  	offset: {
  		top: $("p#menubar").offset().top
  	}
  });
};
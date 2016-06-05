
jQuery(document).ready(function() {
		jQuery(".fancybox").fancybox();
    //add caption
    $(".fancybox").fancybox({
        helpers : {
            title: {
                type: 'outside'
            }
        }
    });
    //remove white border around image
    $(".fancybox")
        .attr('rel', 'gallery')
          .fancybox({
              padding : 0
            });
    $(".fancybox")
      .attr('rel', 'gallery')
      .fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
          nextEffect  : 'none',
          prevEffect  : 'none',
          padding     : 0,
          margin      : [20, 60, 20, 60] // Increase left/right margin
      });

			var options = {
    		valueNames: [ 'captionText' ]
			};

			var captionList = new List('gallery', options);
});

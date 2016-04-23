
$(document).ready(function() {
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $caption = $("<p></p>");

  //image to overlay
  $overlay.append($image);
  //Arrows
  var $leftArrow = $("<div id='leftArrow'><-</div>");
  var $rightArrow = $("<div id='rightArrow'>-></div>");

  $image.before($leftArrow);
  $image.after($rightArrow);
  //caption to overlay
  $overlay.append($caption);

  //add overlay
  $("body").append($overlay);

  //click event on link to an image
  $("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageAnchor = $(this);
    var imageLocation = $(this).attr("href");
    //update overlay with imageLocation
    $image.attr("src", imageLocation);

    //show overlay
    $overlay.show();
    //Show arrows
    $('.arrows').show();
    $leftArrow.click(function(){
      $(this).off("click");
      getPrevImage(imageAnchor);
    });

    $rightArrow.click(function(){
      getNextImage(imageAnchor);
    });
    //get child's alt attribute and set caption
    var captionText= $(this).children("img").attr("title");
    $caption.text(captionText);
  });
  function getPrevImage(thisImage) {
    event.stopPropagation();
    imageParent = $(thisImage).parent().prev().children("a");
    if(imageParent.length!==0){
      thisImage = $(imageParent).children("a");
    }
    console.log(imageParent);
    getCurrentImage(imageParent);

    $leftArrow.click(function(){
      $(this).off("click");
      getPrevImage(imageParent);
    });
  }

  function getNextImage(thisImage) {
    console.log(thisImage);
    event.stopPropagation();
    imageParent = $(thisImage).parent().next().children("a");
    if(imageParent.length!==0){
      thisImage = $(imageParent).children("a");
    }
    getCurrentImage(imageParent);

    $rightArrow.click(function(){
      $(this).off("click");
      getNextImage(imageParent);
    });
  }

  function getCurrentImage(thisImage) {
    imageLocation = $(thisImage).attr("href");
    $image.attr("src", imageLocation);

  }

  //overlay clicked
  $overlay.click(function() {
    //hide overlay
    $overlay.hide();
  });
});

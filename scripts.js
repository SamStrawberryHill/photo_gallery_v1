
$(document).ready(function() {
var $overlay = $('<div> id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//image to overlay
$image.append($image);

//caption to overlay
$overlay.append($caption);

//add overlay
$("body").append($overlay);

//click event on link to an image
$("imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with imageLocation
  $image.attr("src", imageLocation);
  //show overlay
  $overlay.show();
  //get child's alt attribute and set caption
  var captionText= $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//overlay clicked
$overlay.click(function() {
  //hide overlay
  $overlay.hide();
});
});


var $overlay = $('<div id = "overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
// image to overlay
$overlay.append($image);
// caption to overlay
$overlay.append($caption);
// add overlay
$("body").append($overlay);
// capture click event on a link to an image
$("#lightGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  // show the overlay
  $overlay.show();
  //get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
//when overlay is clicked
$overlay.click(function() {
  //hide overlay
  $overlay.hide();
});

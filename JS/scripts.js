

// $(document).ready(function() {
//   var $overlay = $('<div id="overlay"></div>');
//   var $image = $("<img>");
//   var $caption = $("<p></p>");
//
//   //image to overlay
//   $overlay.append($image);
//   //Arrows
//   var $leftArrow = $("<div id='leftArrow'><-</div>");
//   var $rightArrow = $("<div id='rightArrow'>-></div>");
//
//   $image.before($leftArrow);
//   $image.after($rightArrow);
//   //caption to overlay
//   $overlay.append($caption);
//
//   //add overlay
//   $("body").append($overlay);
//
//   //click event on link to an image
//   $("#imageGallery a").click(function(event){
//     event.preventDefault();
//     var $imageAnchor = $(this);
//     var imageLocation = $imageAnchor.attr("href");
//     //update overlay with imageLocation
//     $image.attr("src", imageLocation);
//
//     //show overlay
//     $overlay.show();
//
//     if ($imageAnchor.parent().next().length === 0) {
//       $rightArrow.hide();
//       console.log($imageAnchor.parent().next());
//     } else {
//       $rightArrow.show();
//       console.log($imageAnchor.parent().next());
//     }
//
//     if ($imageAnchor.parent().prev().length === 0) {
//       $leftArrow.hide();
//       console.log($imageAnchor.parent().prev());
//     } else {
//       $leftArrow.show();
//       console.log($imageAnchor.parent().prev());
//     }
//
//
//     $leftArrow.click(function(){
//       getPrevImage($imageAnchor);
//
//       if ($imageAnchor.parent().prev().length === 0) {
//         $rightArrow.hide();
//         console.log($imageAnchor.parent().prev());
//       } else {
//         $rightArrow.show();
//         console.log($imageAnchor.parent().prev());
//       }
//     });
//
//     $rightArrow.click(function(){
//       getNextImage($imageAnchor);
//
//       if ($imageAnchor.parent().next().length === 0) {
//         $leftArrow.hide();
//         console.log($imageAnchor.parent().next());
//       } else {
//         $leftArrow.show();
//         console.log($imageAnchor.parent().next());
//       }
//
//     });
//     //get child's alt attribute and set caption
//     var captionText= $(this).children("img").attr("title");
//     $caption.text(captionText);
//   });
//
//   function getPrevImage(thisImage) {
//     event.stopPropagation();
//     imageParent = $(thisImage).parent().prev().children("a");
//
//     getCurrentImage(imageParent);
//
//     $leftArrow.click(function(){
//       $(this).off("click");
//       getPrevImage(imageParent);
//     });
//   }
//
//   function getNextImage(thisImage) {
//     event.stopPropagation();
//
//
//     imageParent = $(thisImage).parent().next().children("a");
//
//     getCurrentImage(imageParent);
//
//     $rightArrow.click(function(){
//       $(this).off("click");
//       getNextImage(imageParent);
//     });
//   }
//
//   function getCurrentImage(thisImage) {
//     imageLocation = $(thisImage).attr("href");
//     $image.attr("src", imageLocation);
//
//   }
//
//   //overlay clicked
//   $overlay.click(function() {
//     //hide overlay
//     $overlay.hide();
//   });
// });

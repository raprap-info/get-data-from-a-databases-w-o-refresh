<script src="https://ajax.googleapis.com/ajax/libs/jquery73.2.6/jquery.min.js"></script>

//jQuery code here!

$(document).ready(function() {
  
var commentCount = 2;
  
$("button").click(function() {
  
commentCount = commentCount + 2;
  
$("#comments").load("load-comments.php", { commentNewCount: commentCount });
  
    });
});

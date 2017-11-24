// var viewToDo = $("#view-current-link");
// var viewFinished = $("#view-finished-link");
//
// var activeToDo = $("#todo-list-active");
// var finishedToDo = $("#todo-list-finished");

//Class Hidden/Shown Toggle

$("#view-current-link").on("click", function() {
    $("#todo-list-active").show();
    $("#todo-list-finished").hide();
    $(".create-new-form").show();
    $(".create-new-show").show();
});


$("#view-finished-link").click(function() {
  $("#todo-list-active").hide();
  $("#todo-list-finished").show();
  $(".create-new-form").hide();
  $(".create-new-show").hide();
});

$(".create-new-show").click(function() {
  $(".create-new-form").toggle();
  $(".create-new-toggle").toggle();
});

$(".create-new-hide").click(function() {
  $(".create-new-form").toggle();
  $(".create-new-toggle").toggle();
});

$(".create-new-button").on("click", function() {
  var newText = $(".create-new-field").val();
  $("#todo-list-active").append("<li> " + newText + " </li>");
});

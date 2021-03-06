//  Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//  Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(600, function() {
        $(this).remove();
    });
    // Stops from bubbling up to other elements
    event.stopPropagation();
}); 

$("input[type = 'text']").keypress(function(event) {
    if (event.which === 13) {
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
}); 

$(".fa-plus").on("click", function() {
    $("input[type = 'text']").fadeToggle();
});
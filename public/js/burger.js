$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
      
  
      var devourState = {
        devoured: true
      };


      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //Send POST request 
  $(".create-form").on('submit', function(event) {
    
    event.preventDefault();

    let newBurger;

    if ($('#burger-input').val()) {
      newBurger = {
        burger_name: $("#burger-input").val().trim(),
        devoured: 0
      };
    }

    console.log(newBurger);

    $.ajax('/api/burgers', {
      type: "POST",
      data: newBurger
    }).then(() => {
      //Reload page to get the updated list
      location.reload();
    });
  });
});

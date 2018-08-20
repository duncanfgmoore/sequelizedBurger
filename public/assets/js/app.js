
 $(document).ready(function(){

  

    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var objColVals = {
            devoured: true
        };
       
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: objColVals
        }).then(
            
            function() {
                alert("Munch Munch Munch. Burger was eaten!", id);
                location.reload();   
            }
        );
    });

    $(".eaten").on("click", function() {
        alert("You already ate that burger! Try another one.")
    });


    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerInput").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            
            function() {
                console.log("served up a new burger!", newBurger.burger_name);
                location.reload();
            }
        );
    })

 })
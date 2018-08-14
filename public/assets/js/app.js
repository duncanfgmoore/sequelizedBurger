
 $(document).ready(function(){

    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var objColVals = {
            devoured: true
        };
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: objColVals
        }).then(
            //getting to here but isnt hitting the function
            function() {
                alert("devoured burger!", id);
                location.reload();   
            }
        );
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
             //getting to here but isnt hitting the function
            function() {
                console.log("served up a new burger!", newBurger.burger_name);
                location.reload();
            }
        );
    })

 })
$(document).ready( function() {

    // topic array of sports
    var topics = ["golf", "baseball", "football", "basketball", "soccer"];

    // loop through topics array and generate buttons
    // remove previous buttons, if any, i.e first empty html element 
    function createButtons( getTopics ) {
       
        $("#topic-buttons").empty();

        for (var i = 0; i < getTopics.length; i++) {

            var myButton = $("<button>");

            myButton.addClass("my-topic");
            myButton.addClass("btn btn-primary");
            myButton.text(getTopics[i]);

           $("#topic-buttons").append(myButton);
        };
    };

    // call createButtons to generate initial topic array buttons
    createButtons( topics );
    
    // event listener for on click of topic button
    // retrieve 10 gifs from Giphy API and display in HTML
    $(document).on("click", ".my-topic", function() {

        // build query url based on topic of button clicked
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).text() + "&api_key=dc6zaTOxFJmzC&limit=20";
    
        // call the Giphy API & display 10 gifs based on rating
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            var results = response.data;
            var count = 0;

            // display first 10 'g' or 'pg rated gifs for this topic in main div row container
            for (var j = 0; j < results.length; j++) {

                if (count < 10) {

                    if (results[j].rating !== "r" && results[j].rating !== "pg-13") {

                        count++;

                        var gifDisplay = $("<div>");
                        gifDisplay.addClass("card");

                        var gifImage = $("<img>");
                        gifImage.addClass("card-img-top");
                        gifImage.addClass("gif");
                        gifImage.attr("data-state", "still");
                        gifImage.attr("data-still", results[j].images.fixed_height_still.url);
                        gifImage.attr("data-animate", results[j].images.fixed_height.url);
                        gifImage.attr("src", gifImage.attr("data-still"));

                        var gifRating = $("<div>");
                        gifRating.addClass("card-body");

                        var gifTitle = $("<h5>");
                        gifTitle.text("Rating: " + results[j].rating);

                        gifRating.append(gifTitle);
                        gifDisplay.prepend(gifImage);
                        gifDisplay.append(gifRating);

                        $(".topic-gifs").prepend(gifDisplay);

                    };
                };
            };            
        });
    });

    // document event listener
    // on click of .gif, animate if still or make still if animated
    $(document).on("click", ".gif", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");     
        }
    });

    $("#submit-topic").on("click", function() {
        
        var newTopic = $("#new-topic").val().trim();
        
        topics.push(newTopic);
        $("#new-topic :input").val("");
        createButtons(topics);

    });

});
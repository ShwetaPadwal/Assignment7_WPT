'use strict';

const URL = 'https://api.api-ninjas.com/v1/quotes?category=';
const key = "3nG4ESDW5FLv1KQnyC1dBA==hG4dFwaPBjW9cYdk";

$(document).ready(function() {
    $("button").click(function() {
        const category = $("#categoryInput").val();

        if (category) {
            const requestUrl = URL + encodeURIComponent(category) ; 
            $.ajax({
                type: "GET",
                url: requestUrl,  
                headers: { "X-Api-Key": key }, 
                success: function(data) {
                    if (data && data.length > 0) {
                        
                        $("#quoteWrite").text(data[0].quote);
                        console.log(data)
                    } else {
                        $("#quoteWrite").text("No quotes found for this category.");
                    }
                },
                error: function(xhr, status, error) {
                    console.error("Error:", status, error);  
                    $("#quoteWrite").text("An error occurred. Please try again.");
                }
            });
        } else {
            alert("Please select a category!");
        }
    });
});
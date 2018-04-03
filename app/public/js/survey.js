console.log("yo");
$("#submit").on("click", function(event){
  event.preventDefault();

      var newPerson = {
        name: $("#fname").val().trim(),
        image: $("#image").val().trim(),
        scores: [
          $("#question1").val(),
          $("#question2").val(),
          $("#question3").val(),
          $("#question4").val(),
          $("#question5").val(),
          $("#question6").val(),
          $("#question7").val(),
          $("#question8").val(),
          $("#question9").val(),
          $("#question10").val()
        ]
      };
      console.log(newPerson)
      $.ajax({
        method: "POST",
        url: '/api/friends',
        data: newPerson
      }).then(function(data){
        console.log(data, "this is our server response")
        $("#cor").text("Your good match is : " + data.goodFit);
        $("#match-img").attr("src" + data.goodFitImage);
        $("#wro").append(data.goodFit + ": " + "<a href='data.goodFitImage'></a>");



          // $("#userMatch").text(goodFit);
          // Pop open the modal dialog

          // Pop open the modal dialog
      })

    // }
    //
    // }


  });

  $("#restart").on("click", function(){
    window.location.reload();
  })

console.log("yo");
$("#submit").on("click", function(event){
  event.preventDefault();

  // function validate()
  // {
  //   if(document.form.clicked=="")
  //   {
  //   alert ( "Please select all the fields!");
  //   return false;
  //   }
  //   else
  //   {
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
      }).then(function(goodFit){
        console.log(goodFit, "this is our server response")
          $("#matchName").text(goodFit);
            
      })

    // }
    //
    // }


  });
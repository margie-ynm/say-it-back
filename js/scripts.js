$(document).ready(function() {

  $("form").submit(function(event) {
    var saysomethingInput = $("#saysomething").val().toUpperCase();

    $("#output").text(saysomethingInput);

    event.preventDefault();
  });

});

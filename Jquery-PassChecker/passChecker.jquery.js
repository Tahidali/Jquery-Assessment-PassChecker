function password_checker() {
  let number = /([0-9])/;
  let alphabets = /([a-zA-z])/;
  let special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  var password = $("#password").val().trim();
  if (password.length < 6) {
    $("#password-strenth").removeClass();
    $("#password-strenth").addClass("div1");
    $("#password-strenth").html("Weak (should be atleast 6 characters.)");
  } else{
    if (password.match(number) && password.match(alphabets) && password.match(special_characters)){
      $("#password-strenth").removeClass();
      $("#password-strenth").addClass("div3");
      $("#password-strenth").html(" Strong ");
    }
    else{
      $("#password-strenth").removeClass();
      $("#password-strenth").addClass("div2");
      $("#password-strenth").html("Medium (should include alphabets, numbers and special characters.)")
    }
  }
}

$('#loginBtn').click(function(){
    console.log("Hello World");
  if($('#username').val().toLowerCase() == "admin" && $('#password').val().toLowerCase() == "admin")
  {
    window.location.href = '../Learning.html';
  }
});
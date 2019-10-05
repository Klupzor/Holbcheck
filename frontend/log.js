$(function () {
   $("#submit").click(function () {
       username = $("#username").val();
       password = $("#password").val();
       myurl = 'http://holbcheck.fun:5500/login?user=' + username + '&' + 'pass=' + password;
       console.log(myurl);
       $.ajax({
           type: 'POST',
           url: myurl,
           async: false,
           success: function(data){
               alert('horray! 200 status code!');
           },
           error: function(data){
               alert('Error!');
           }
         });
   });
});

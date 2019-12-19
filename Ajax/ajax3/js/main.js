// $.ajax('http://api.github.com/users/bigbigy')
//   .done(function(data) {
//     console.log("data:",data)
//   })
var form = $('#search');
var input = $('input#username');
var result = $('#result');
var username;

form.on('submit',function(e) {
  e.preventDefault();
  // console.log("1:",1);
  username = input.val();
  $.ajax('https://api.github.com/users/' + username)
    .done(function(data) {
      // console.log("data:",data);
      var html=
        '<div>用户名: ' + data.login + '</div>' +
        '<div>介绍: ' + (data.bio||'无') + '</div>'
      result.html(html);
    })
})

$.ajax({
  url: 'https://api.github.com/users/bigbigy',
  method: 'get',
  data: {
    username: 'whh',
    password: '123',
  },
  success: function(data) {
    console.log("成功!")
  },
  error: function() {
    console.log("失败!")
  }
})

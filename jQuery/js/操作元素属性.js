console.dir(document.getElementById('a'))

// 隐性
$('#a')
  // .attr('href','http://a.com');
  .prop('href','http://a.com');

// 显性
$('#a')
  .attr('asdf','4321');

var t = $('#a')
  .removeAttr('asdf');

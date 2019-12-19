// document
//   .getElementById('a')
//   .style
//   .background = 'blue';
//
//
// jQuery('#b')
//   .css('background','red');

// ----选择器----

// 标签
$('div')
  .css('color','gray');

$('div:first')
  .css('border','2px solid black');

// ID
$('#a')
  .css('background','brown');
// ID 下的p标签
$('#a p')
  .css('background','green');

// 类
$('.bc')
  .css('background','pink');

$('input[type="number"]')
  .css('background','pink')

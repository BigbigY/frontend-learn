// var nn = $('#nickname').val('yo.');
// console.log('nn:',nn);


// 一开始就选择框内
$('#nickname').focus(function() {
  console.log('Yo.');
});

// 全选中
$('#nickname').select();

// 非选中
$('#nickname').blur();


// $('#login').submit();

$('#login-trigger')
  .click(function() {
    $('#login').submit();
})

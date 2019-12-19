// --- 过滤器 ---
$('div')
  .find('.child')
  .css('border','2px solid #999')

$('#child1')
  .parent()
  .css('border','2px solid #666')

$('.child')
  .filter('.not-gay')
  .css('background','red')

setInterval(toggle, 200);


var fruits = ['Apples', 'Oranges', 'Bananas'];
var fruitList = $('<ul>', { class: 'fruitList' }).appendTo($('body'));

$.each(fruits, function(fruitIndex) {
  $('<li>')
    .addClass('fruitItem')
    .text(fruits[fruitIndex])
    .appendTo(fruitList);
});



<div id="fruitList">
  <li v-for="fruit in fruits">
    {{ fruit }}
  </li>
</div>

var fruits = ['Apples', 'Oranges', 'Bananas'];
new Vue({
  el: '#fruitList',
  data: { fruits }
});


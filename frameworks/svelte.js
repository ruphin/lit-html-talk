
<ul>
  {{#each fruits as fruit}}
    <li>{{fruit}}</li>
  {{/each}}
</ul>

import FruitList from 'FruitList.html';
new FruitList({
  target: document.getElementById('fruitList'),
  data: {
    fruits: ['Apples', 'Oranges', 'Bananas']
  }
})


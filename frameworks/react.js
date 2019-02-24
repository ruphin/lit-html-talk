
const fruits = ['Apples', 'Oranges', 'Bananas'];

class FruitList extends React.Component {
  render() {
    return <ul>
      { fruits.map(fruit => <li>{fruit}</li>) }
    </ul>;
  }
}

React.render(<FruitList />, document.getElementById('fruitList'));


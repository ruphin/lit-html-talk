<fruit-list />;

const fruits = ['Apples', 'Oranges', 'Bananas'];
class FruitList extends Framework {
  get template() {
    return html`
      <ul>
        ${fruits.map(fruit => html`<li>${fruit}</li>`)}
      </ul>
    `;
  }
}

customElements.define('fruit-list', FruitList);

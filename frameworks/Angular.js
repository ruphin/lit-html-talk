
<ul ng-app="FruitListApp" ng-controller="FruitListController">
  <li ng-repeat="fruit in fruits">
    {{ fruit }}
  </li>
</ul>

const fruits = ['Apples', 'Oranges', 'Bananas'];

angular.module('FruitListApp', []).controller('FruitListController', [
  '$scope',
  function($scope) {
    $scope.fruits = fruits;
  }
]);


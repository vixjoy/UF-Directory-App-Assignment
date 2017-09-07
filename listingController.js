angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({'name': $scope.newName, 'code': $scope.newCode})
      $scope.newCode = '';
      $scope.newName = '';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
        };
    $scope.showDetails = function(index) {
      $scope.address = listings[index].address || 'N/A';
      $scope.coordinates = listing[index].coordinates || 'N/A';
    };
  }
]);

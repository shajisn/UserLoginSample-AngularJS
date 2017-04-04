
describe('Controller: MainCtrl', function () {

   // load the controller's module
  beforeEach(module('loginApp'));

  var $controller, $scope;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = {};
    controller = $controller('MainCtrl', { $scope: $scope });
    jasmine.clock().install();
  }));

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('login with correct credentials', function() {
     
      $scope.username = 'test';
      $scope.password = 'test';
      $scope.login();
      expect($scope.dataLoading).toBeTruthy();
      
  });

  it('login with incorrect credentials', function() {
    $scope.username = 'test';
    $scope.password = '123';
    $scope.login();
    jasmine.clock().tick(1001);
    expect($scope.dataLoading).toBeTruthy();
  });

});

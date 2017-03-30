'use strict';

describe('Controller: ForgotpswdCtrl', function () {

  // load the controller's module
  beforeEach(module('loginApp'));

  var ForgotpswdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotpswdCtrl = $controller('ForgotpswdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgotpswdCtrl.awesomeThings.length).toBe(3);
  });
});

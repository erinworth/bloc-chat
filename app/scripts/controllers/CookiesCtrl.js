(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
      //Modal config object properties
          templateUrl: '/templates/username.html',
          size: 'sm',
          controller: 'UserCtrl',
          controllerAs: 'userctrl'
      })
    }
      console.log(currentUser);
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

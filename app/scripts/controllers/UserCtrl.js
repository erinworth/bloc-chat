(function(){
    function UserCtrl($cookies, $uibModalInstance){
      var userCtrl = this;

      this.createUsername = function(){
          if(this.username){
            $cookies.put('blocChatCurrentUser', userCtrl.username);
            $uibModalInstance.close();
        } else{
            alert("You must create a username to send messages!");
        }
      };
  };

  angular
      .module('blocChat')
      .controller('UserCtrl', ['$cookies', '$uibModalInstance', UserCtrl]);
})();

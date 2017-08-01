
(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, $scope) {
      this.rooms=Room.all;
      this.currentRoom=null;
      this.currentUser=$cookies.get('blocChatCurrentUser');
      this.currentTime = new Date(new Date().getTime()).toLocaleTimeString();


        this.addRoom=function(){
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };

        this.setCurrentRoom=function(room){
          this.currentRoom=room;
          this.messages=Message.getByRoomId(this.currentRoom.$id);
          this.currentRoomId = room.$id
        };

        this.sendMessage=function(newMessage){
          console.log();
          Message.send(this.messages, this.currentRoomId, this.currentUser, this.currentTime);
          $scope.newMessage = "";
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal','$cookies','$scope', HomeCtrl]);
})();

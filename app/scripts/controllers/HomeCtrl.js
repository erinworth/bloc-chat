(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, $scope) {
      this.rooms=Room.all;
      this.currentRoom=null;
      this.currentUser=$cookies.get('blocChatCurrentUser');



        this.addRoom=function(){
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };

        this.setCurrentRoom=function(room){
          this.currentRoom=room;
          console.log(this.currentRoom.$id);
          this.messages = Message.getByRoomId(this.currentRoom.$id);
          console.log(this.messages)
          this.currentRoomId=room.$id
        };

        this.sendMessage=function(newMessage){
          this.currentTime=new Date(new Date().getTime()).toLocaleTimeString();
          Message.send(newMessage, this.currentRoomId, this.currentUser, this.currentTime);
          $scope.newMessage = "";
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal','$cookies','$scope', HomeCtrl]);
})();

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
        }

        this.setCurrentRoom=function(room){
          this.currentRoom=room;
          this.messages=Message.getByRoomId(this.currentRoom.$id);
        }

        this.sendMessage=function(){
          var currentTime="12:00pm";
          console.log();
          Message.send(this.message, this.currentRoomID, this.currentUser);
          this.message="";
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal','$cookies','$scope', HomeCtrl]);
})();

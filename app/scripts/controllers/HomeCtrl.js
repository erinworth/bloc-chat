(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, $scope) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');


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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal','$cookies','$scope', HomeCtrl]);
})();

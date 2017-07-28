(function() {
  function Message($firebaseArray) {
    var Message={};

    var ref=firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId=function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage, roomId, username) {
    // Send method logic
        message.$add({content: newMessage, roomId: roomId, username: username})
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

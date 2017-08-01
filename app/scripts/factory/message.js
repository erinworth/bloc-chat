
(function() {
  function Message($firebaseArray) {
    var Message={};

    var ref=firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId=function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage, currentTime, userName, roomId) {

        var messages = $firebaseArray(ref);
        messages.$add({
            content: newMessage,
            sentAt: currentTime,
            username: userName,
            roomID: roomId,
        });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

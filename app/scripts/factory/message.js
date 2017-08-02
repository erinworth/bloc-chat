(function() {
  function Message($firebaseArray) {
    var Message={};

    var ref=firebase.database().ref().child("Messages").orderByChild('roomID');
    console.log(ref);
    var messages2 =$firebaseArray(ref);
    console.log(messages2)

    Message.getByRoomId=function(roomId) {
        // Filter the messages by their room ID.
        ///console.log(roomId)
        var messagesInRoom = ref.equalTo(roomId);
        //console.log(messagesInRoom);
        return $firebaseArray(messagesInRoom);
    };

    Message.send=function(newMessage, roomId, userName, currentTime) {

        var messages=$firebaseArray(ref);
        //console.log(roomId);
        messages.$add({
            content: newMessage,
            roomID: roomId,
            username: userName,
            sentAt: currentTime,
        });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

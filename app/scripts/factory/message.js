
(function() {
  function Message($firebaseArray) {
    var Message={};

    var ref=firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    var displayCurrentTime = function() {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    time = hours + ":" + minutes + " " + am_pm;
    return time;
    };

    Message.getByRoomId=function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage, currentRoom,) {

        var messages = $firebaseArray(ref);
        messages.$add({
            content: newMessage,
            sentAt: displayCurrentTime(),
            username: $cookies.get('currentUser'),
            roomID: currentRoom
        });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

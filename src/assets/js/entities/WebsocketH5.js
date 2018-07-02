if (!window.WebSocket && window.MozWebSocket)
    window.WebSocket = window.MozWebSocket;
if (!window.WebSocket) {
    alert("WebSocket not supported by this browser");
}

var WebSocketH5 = function() {


    this.ws = null;
    this.init = function() {
        var ws = new WebSocket('ws://' + location.host + ':8080');
        ws.onopen = function() {
            console.log('Connection open ...');
        }
        ws.onclose = function() {
            console.log('Connection closed.');
        }
        this.ws = ws;

    }

    this.reconnect = function(event) {
        var ws = new WebSocket('ws://' + location.host + '/room/join.x?roomid=' + window.roomid + '&uid=' + uid);
        ws.onmessage = process_ws_msg;
        this.ws = ws;
    }

    this.process_ws_msg = function(event) {


    }

    this.init();
}


// $.ajax({
//     url: '/room/getuid.x',
//     dataType: 'json',
//     success: function(uid) {
//         window.uid = uid;
//         console.log('uid: ' + uid);
//         initws(uid);
//     },
//     error: function(xhr, t, e) {
//         console.log(t, e);
//     }
// });
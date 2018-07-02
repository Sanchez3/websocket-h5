if (!window.WebSocket && window.MozWebSocket)
    window.WebSocket = window.MozWebSocket;
if (!window.WebSocket) {
    alert("WebSocket not supported by this browser");
}

var WebSocketH5 = function() {

    this.ws = null;
    this.init = function() {
        // var _text = 'http://jindo.dev.naver.com/collie' ;
        // var qrcode = new QRCode(document.getElementById("qrcode"), {
        //     text: _text,
        //     width: 128,
        //     height: 128,
        //     colorDark: "#000000",
        //     colorLight: "#ffffff",
        //     correctLevel: QRCode.CorrectLevel.H
        // });

        var ws = new WebSocket('ws://' + location.host);
        ws.onopen = function() {
            console.log('Connection open ...');
        }
        ws.onclose = function() {
            console.log('Connection closed.');
        }
        ws.onmessage = function(event) {
            console.log('Received Message: ' + event.data);
        }

        ws.send('{type: 101, data: 1}');
        this.ws = ws;

    }

    this.reconnect = function(event) {
        var ws = new WebSocket('ws://' + location.host + '/room/join.x?roomid=' + window.roomid + '&uid=' + uid);
        ws.onmessage = process_ws_msg;
        this.ws = ws;
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
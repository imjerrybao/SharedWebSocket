# SharedWebSocket

![SharedWebSocket](http://oi62.tinypic.com/5vbrma.jpg)

Instead of creating new WebSocket for each tab, SharedWebSocket allows us to use one connection for multiple tabs.

##### Example

A simple demo on how to connect and receive message from server.
```html
<script src="SharedWebSocket.js"></script>
<script>
var connection = new Khmerload.SharedWebSocket({
    url: "ws://127.0.0.1:8888",
    message: function(message) {
       console.log(message);
    }
});
</script>
```

A simple demo on how to reconnect 3 times with 5 seconds, 10 seconds, and 20 seconds delay
```html
<script src="SharedWebSocket.js"></script>
<script>
var connection = new Khmerload.SharedWebSocket({
    url: "ws://127.0.0.1:8888",
    reconnect: [5000, 10000, 20000]
});
</script>
```

##### Documentation

|  | Description |
| --------- |------------|
| message | Trigger when message is received from server.  |
| open | Trigger when connection is ready. |
| close | Tirgger when connection is closed. |
| master | Trigger when the current tab has promoted to master. Master refers to tab that hold WebSocket connection. Its job is distributing the message to other tab. |

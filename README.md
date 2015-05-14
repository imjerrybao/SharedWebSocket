# SharedWebSocket

![SharedWebSocket](http://oi62.tinypic.com/5vbrma.jpg)

Instead of creating new WebSocket for each tab, SharedWebSocket allows us to use one connection for multiple tabs.

##### Example

```html
<script src="SharedWebSocket.js"></script>
<script>
var connection = new Khmerload.SharedWebSocket({
    url: "ws://127.0.0.1:8888",
    receive: function(message) {
       console.log(message);
    }
});
</script>
```

##### Documentation

|  | Description |
| --------- |------------|
| receive | Trigger when message is received from server.  |
| open | Trigger when connection is ready. |
| close | Tirgger when connection is closed. |
| master | Trigger when the current tab has promoted to master. Master refers to tab that hold WebSocket connection. Its job is distributing the message to other tab. |

##### Architecture
How does it work?
* When new tab is opened, SharedWebSocket creates an unique ID for it.
* If master tab (tab that holds WebSocket connection) is active
  * Become a master, create a WebSocket connection
  * Distribute message to children tab via localStorage
* Else
  * Listen for message from master via localStorage

##### Milestone
* Add more demo on how to use SharedWebSocket
* Test for browser support
* Fallbak to more WebSocket connection if browser does not support localStorage

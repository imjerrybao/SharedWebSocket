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

##### Architecture
*(Need to work more on description)*

##### Milestone
*(Need to work more on description)*

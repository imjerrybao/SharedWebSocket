Khmerload.NativeWebSocket = function(obj)
{
	var self = this;
	
	// By default, the reconnect option is off
	if (typeof obj.reconnect === "undefined") {
		obj.reconnect = false;
	}
	
	// Create a reconnect strategy from given option
	var reconnect = new Khmerload.ReconnectStrategy(obj.reconnect);
	
	// Connecting new connection
	function makeConnection() {
		var ws = new WebSocket(obj.url);
		
		ws.onerror = function() {
			if (typeof obj.error === "function") obj.error();
		};
		
		ws.onmessage = function(msg) {
			if (typeof obj.message === "function") obj.message(msg.data);
		};
		
		ws.onclose = function() {
			if (typeof obj.close === "function") obj.close();
			
			// Checking for reconnect strategy
			reconnect.next(makeConnection);
		};
		
		ws.onopen = function() {
			if (typeof obj.open === "function") obj.open();
			reconnect.reset();
		};
	}
	
	makeConnection();
}
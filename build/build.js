var shell = require('shelljs');

shell.mkdir('dist');

shell.cat([
	'src/SharedWebSocket.js',
	'src/ReconnectStrategy.js',
]).to('dist/websocket.js');
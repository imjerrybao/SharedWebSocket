var shell = require('shelljs');

function uglify(srcPath, distPath) {
	var _fs = require('fs');
    var jsp = require('uglify-js').parser;
    var pro = require('uglify-js').uglify;
    var ast = jsp.parse( _fs.readFileSync(srcPath).toString() );
 
    ast = pro.ast_mangle(ast);
    ast = pro.ast_squeeze(ast);
 
    _fs.writeFileSync(distPath, pro.gen_code(ast));
}

shell.mkdir('dist');
shell.cat([
	'src/SharedWebSocket.js',
	'src/NativeWebSocket.js',
	'src/ReconnectStrategy.js',
]).to('dist/websocket.js');

uglify('dist/websocket.js', 'dist/websocket.min.js');
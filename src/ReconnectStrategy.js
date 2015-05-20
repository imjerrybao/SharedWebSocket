function ReconnectStrategy(option)
{
	var pointer = 0;

	this.reset = function() {
		pointer = 0;
	},
	
	this.next = function(callback) {
		if (option.constructor === Array) {
			if (pointer < option.length) {
				setTimeout(callback, option[pointer]);
				pointer++;
			}
		} else if (typeof option === "number") {
			setTimeout(callback, option);
		}
	}
}
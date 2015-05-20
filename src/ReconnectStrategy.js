/**
 * Define a reconnecting strategy. There are three
 * possible strategies that user can choose:
 *
 * (1) infinite reconnecting with constant time delay
 *
 *     eg. new ReconnectStrategy(5000);
 *     It will reconnect every 5 seconds.
 *
 *
 * (2) finite reconnecting time with variable time delay
 *
 *      eg. new ReconnectStrategy(5000, 10000, 15000);
 *		It will reconnect three times with 5 seconds, 10 seconds
 *      and 15 seconds respectively.
 *
 * (3) does not reconnect
 *
 *      eg. new ReconnectStrategy(false);
 *      Never connect
 */
Khmerload.ReconnectStrategy = function(option)
{
	var pointer = 0;

	/**
	 * Reset the strategy to the fresh state.
	 */
	this.reset = function() {
		pointer = 0;
	},
	
	/**
	 * Call the provided callback with delay based on the provided
	 * strategy option.
	 * @param {boolean,array,number} callback Callback function that will be called according to our strategy
	 */
	this.next = function(callback) {
		// (finite reconnecting time with variable time delay
		if (option.constructor === Array) {
			if (pointer < option.length) {
				setTimeout(callback, option[pointer]);
				pointer++;
			}
		// infinite reconnecting with constant time delay
		} else if (typeof option === "number") {
			setTimeout(callback, option);
		}
	}
}
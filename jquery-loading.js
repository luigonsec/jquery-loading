/**
 * @desc it generates a black fixed div which fits the whole screen
 * @param object $options - An object which could contains the message associated to a key named message.
 *
*/

$.fn.startLoading = function(options){


	options = options || {};

	// a text node is created with the given message or default.
	var text = options.text || 'Loading...'; 
	var text_node = document.createTextNode(text);

	// the wrapper in which the message will be printed 
	var load_wrapper = document.createElement('div');
	load_wrapper.setAttribute('class', 'load-wrapper');

	// the container for the text
	var message = document.createElement('div');
	message.setAttribute('class', 'text');
	message.appendChild(text_node);

	// the div is appended to the wrapper
	load_wrapper.appendChild(message);

	// The wrapper is appended to the body
	$('body').append(load_wrapper);
};




/**
 * @desc it stops showing the message
 * @param object $options - An object which could contains the delay in seconds for stoping the message.
 * @param function $callaback - A function to be called after the delay time.  
 *
*/
$.fn.stopLoading = function(options, callback){

	options = options || {};

	var delay = options.delay || 0;

	// After the delay, the wrapper is removed and the callback is called.
	setTimeout(function(){
		$('body .load-wrapper').remove();
		callback();
	}, delay)
}



	$.fn.startLoading = function(options){

		options = options || {};

		var text = options.text || 'Loading...'; 
		var text_node = document.createTextNode(text);

		var spin = options.spin === true ? ' fa-spin' : '';

		var icon = 'fa fa-' + (options.icon || 'refresh') + spin;
		var icon_node = document.createElement('i');
		icon_node.setAttribute('class', icon)


		var load_wrapper = document.createElement('div');
		load_wrapper.setAttribute('class', 'load-wrapper');

		var message = document.createElement('div');
		message.setAttribute('class', 'text');
		message.appendChild(text_node);
		message.appendChild(icono_node);

		load_wrapper.appendChild(message);

		$('body').append(load_wrapper);
	};

	$.fn.stopLoading = function(options, callback){

		options = options || {};

		var delay = options.delay || 0;

		setTimeout(function(){
			$('body .load-wrapper').remove();
			callback();
		}, delay)
	}
	

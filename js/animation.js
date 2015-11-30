;
(function($){
	'use strict';

	$.fn.animateBox = function(options,button){

		var defaultOption = {
          animation :'shake'
        },
		_this = this;
		var count = 0;
        options = $.extend(defaultOption, options);

		if($.browser.chrome || $.browser.mozilla) {
		   css3Animation();
		} 

		else if ($.browser.msie) {

		   if($.browser.version > 9){
	   			css3Animation();
		   }

		   else{
		   		shakeAnimation();
			   	
   			}
		}

		function shakeAnimation(){
			var animationType = typeof options !== 'undefined' ? options.animation : 'shake';
			var animationPeriod = typeof options.animationPeriod !== 'undefined' ? options.animationPeriod : '500';
			var shakeAnimation = setInterval(function(){
		   		if( count%2 === 0 ){
					$( _this ).animate({
			   			'margin-left' : '-10px',
			   		}, 70);
					
				   	count++;
				}

				else{
					$( _this ).animate({
			   			'margin-left' : '10px',
			   		}, 70);
				   	count++;
				}
		   	},90);

		   	setTimeout(function(){
		   		clearInterval(shakeAnimation);
				$( _this ).animate({
		   			'margin-left' : '0',
		   		},70);

		   	}, animationPeriod);
		}

		function css3Animation(){
			$(_this).addClass('animated ' + options.animation);

			$(button).mouseup(function(){
				var animationType = typeof options !== 'undefined' ? options.animation : 'shake',
				animationClass = 'animated '+ animationType;

				$(_this).removeClass(animationClass);
			});
		}

		function customAnimation(){
			$(_this).effect('shake');
		}
	};

})(jQuery);
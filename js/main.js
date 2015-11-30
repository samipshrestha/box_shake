;
(function(){
	'use strict';

	var options = {
		animation: 'shake',
		animationPeriod: 500
	} 

	$(document).ready(function(){

		$('.pay').click(function(e){
			e.preventDefault();
			$('.input-box').animateBox(options,e.target);
		});	
	
	});

})();
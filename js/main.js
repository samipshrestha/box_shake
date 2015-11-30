;
(function(){
	'use strict';

	var options = {
		animation: 'shake'
	} 

	$(document).ready(function(){

		$('.pay').click(function(e){
			e.preventDefault();
			$('.input-box').animateBox(options,e.target);
		});	
	
	});

})();
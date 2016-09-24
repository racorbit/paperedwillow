$(document).ready(function() {
	"use strict";
// --------------Newsletter-----------------------

	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://paperedwillow.us14.list-manage.com/subscribe/post?u=4eab77964deae1a034e60381f&amp;id=c9b2d9c470" // Replace your mailchimp post url inside double quote "".  
	});

	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {

			$('.alert-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

		} else if(resp.result === 'error') {
			$('.alert-warning').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}
	};
 });

(function($) {

	$('#mc-form').ajaxChimp({
	    url: 'http://goodbase.us12.list-manage.com/subscribe/post?u=bdab701926ed905ad9d76db5b&id=03a71bf733',
	    callback: function(resp) {
		    if (resp.result === 'success') {
		    	$('.spam').html('<p class="msg-ok"><b>Thanks!</b><br/> '+ resp.msg + '</p>');		        
		    } else {
		    	$('.spam').html('<p class="msg-ok">Please enter a valid email address.</p>');	
		    }
		}
	});		
	
// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

		
})(jQuery);
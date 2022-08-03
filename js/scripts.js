(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		$('input#name').keyup(function (){
			var limitName = $(this).val().length
			if (limitName < 2 || limitName > 15) {
				$(this).next('span#naOne').show();
			} else {
				$(this).next('span#naOne').hide();
			}
		})

		$('input#top').keyup(function (e) {
			if (/\D/g.test(this.value) || $(this).val().length > 6) {
				$('#num-one').show();
			} else {
				$('#num-one').hide();
			}
		});

		$('input#pop').keyup(function (e) {
			if (/\D/g.test(this.value) || $(this).val().length > 2) {
				$('#num-two').show();
			} else {
				$('#num-two').hide();
			}
		});

		var validateEmail = function(elementValue) {
			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return emailPattern.test(elementValue);
	  }
	  
	  
	  
	  $('#mail').keyup(function () {
		var value = $(this).val();
		var valid = validateEmail(value);

		if (!valid) {
			$('#email').show();

		}		
		else {
			$('#email').hide();
		}
	  });


	  $('#mails').keyup(function () {
		var value = $(this).val();
		var valid = validateEmail(value);

		if (!valid) {
			$('#emails').show();

		}
		
		else {
			$('#emails').hide();
		}
	  });



		
		


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);

   
/* scroll \/ */
jQuery(function($)
	{
		$.scrollTo(0);			
//		$('#home').click(function() { $.scrollTo($('body'), 500); });
		$('#nav-1').click(function() { $.scrollTo($('body'), 300); });
		$('#nav-2').click(function() { $.scrollTo($('#section-one'), 500); });
		$('#nav-3').click(function() { $.scrollTo($('#section-two'), 500); });
		$('#nav-4').click(function() { $.scrollTo($('#section-four'), 500); });
		$('#nav-5').click(function() { $.scrollTo($('#section-five'), 500); });
		$('#nav-6').click(function() { $.scrollTo($('#section-six'), 500); });
		$('#nav-7').click(function() { $.scrollTo($('#section-seven'), 500); });


	}
);

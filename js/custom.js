(function ($) {
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
        
        var hash = this.hash;
        if( hash ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
       
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    
})(jQuery);

function insert_patient(){
	var age=document.getElementById("age").innerHTML;
	var name=document.getElementById("name").innerHTML;
	var address=document.getElementById("address").innerHTML;
	var username=document.getElementById("username").innerHTML;
	alert("gaensh");
	$.ajax
	 ({
		  type:'post',
		  url:'PHP/signup.php',
		  data:{
		   insert_row:'insert_patient',
		   misid_val:misid,
		   name_val:name,
		   yoa_val:yoa,
		   fees_val:fees,
		   cgpa_val:cgpa				
	  	},
	  success:function(response) {
		   if(response!="")
		   {
			    
		   }
	  }
	 });
}
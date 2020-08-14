/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#002e3d" });
 });
 
$(document).ready(function(){
	$("#sidenav_toggle").click(function(){
		$("body ").toggleClass("menu-open"); return false;
	});
	
});
$(document).ready(function(){
	$("#download_link--mobile").click(function(){
		$("body ").toggleClass("request-open"); return false;
	});
	
});

$(document).ready(function(){
	$("#view-more-documents-id").click(function(){
		$("body ").toggleClass("more-documents"); return false;
	});
	
});

(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);


jQuery(document).ready(function($) {
	// Sign up JS
	/*________________________________________________
						Sign up
	________________________________________________*/
	$("#sign_up_modal_form").submit(function(event) {
		$('#sign_up_modal').modal('toggle');
		$('.pre-waitting').show();
		setTimeout(function(){
			$('.pre-waitting').fadeOut(500);
		}, 500);
		return false;
	});

	// Sign in JS
	/*________________________________________________
						Sign in
	________________________________________________*/
	$("#sign_in_modal_form").submit(function(event) {
		$('#sign_in_modal').modal('toggle');
		$('.pre-waitting').show();
		setTimeout(function(){
			$('.pre-waitting').fadeOut(500);
		}, 500);
		setTimeout(function(){
			$('#device_modal').modal('toggle');
		}, 1000);
		return false;
	});

	// Device control
	/*________________________________________________
						Devide control
	________________________________________________*/
	$("#device_modal").on("shown.bs.modal", function () { 
		$("#device_modal #device_list tbody tr td.button-cg button").click(function(event) {
			var button = $(this);
			var thisLine = button.parents("tr.line-device");
			var statusText = thisLine.find('td.status_text');
			if (statusText.attr("data-status") == "off") {
				statusText.html("On");
				statusText.attr("data-status", "on");
				button.html("Off");
				button.attr("data-status", "action-off");
				button.removeClass('btn-success');
				button.addClass('btn-danger')
			} else {
				statusText.html("Off");
				statusText.attr("data-status", "off");
				button.html("On");
				button.attr("data-status", "action-on");
				button.addClass('btn-success');
				button.removeClass('btn-danger')
			}
		});
	});
});
$(document).ready(function(){
	$("#rsvp-form").submit(function(event){
		event.preventDefault();
		$('body').modalmanager('loading');

		$.post('/', $(this).serialize(), function(response){
			$('#myModal').html(response);
			$('#myModal').modal();
		});
	});
});

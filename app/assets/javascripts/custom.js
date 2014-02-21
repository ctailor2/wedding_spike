$(document).ready(function(){
	$("#rsvp-form").submit(function(event){
		event.preventDefault();
		$('body').modalmanager('loading');

		$.post('/', $(this).serialize(), function(response){
			$('#myModal').html(response);
			$('#myModal').modal();
		});
	});

	$("#myModal").on("submit","#add-members-form",function(event){
		event.preventDefault();

		$.post('/new/member', $(this).serialize(), function(response){
			$("#group-member-list").append(response)
		});
	});
})

$(document).ready(function(){
	$("#rsvp-form").submit(function(event){
		event.preventDefault();
		$('body').modalmanager('loading');

		$.post('/groups/find', $(this).serialize(), function(response){
			$('#myModal').html(response);
			$('#myModal').modal();
			$("#age-group-dropdown").prop("selectedIndex", -1);
		});
	});

	// Add group members.
	$("#myModal").on("submit","#add-members-form",function(event){
		event.preventDefault();
		var url = $(this).prop("action");

		$.post(url, $(this).serialize(), function(response){
			$("#group-member-list").append(response)
		});
	});

	// Delete group members.
	$("#myModal").on("submit","#delete-member-form",function(event){
		event.preventDefault();
		var url = $(this).prop("action");
		var $tr = $(this).closest("tr")

		$.ajax({ url: url, type: "delete", success: function(response){
			$tr.remove();
		}});
	});

	// To properly display the currently active button.
	$("#myModal").on("show.bs.tab", '#response-btn[data-toggle="tab"]', function(event){
		$(event.target.previousElementSibling).removeClass("active");
		$(event.target).addClass("active");
	});

	// To properly display the currently active button.
	$("#myModal").on("show.bs.tab", '#members-btn[data-toggle="tab"]', function(event){
		$(event.target.nextElementSibling).removeClass("active");
		$(event.target).addClass("active");
	});
})

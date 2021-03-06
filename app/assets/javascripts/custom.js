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
		var url = $("#response").data("url");
		$.get(url, function(response){
			$("#response").html(response);
		});
		$(event.target.previousElementSibling).removeClass("active");
		$(event.target).addClass("active");
	});

	// To properly display the currently active button.
	$("#myModal").on("show.bs.tab", '#members-btn[data-toggle="tab"]', function(event){
		$(event.target.nextElementSibling).removeClass("active");
		$(event.target).addClass("active");
	});

	// Playing with scripts for limiting # of checkboxes user can select
	$("#myModal").on("change", "input:checkbox", function(event){
		var inviteId = $(this).closest(".panel-body").data("inviteid");
		var max = parseInt($(this).closest(".panel-body").data("numinvited"));
		var checkboxes = $("input:checkbox[data-inviteid=" + inviteId + "]")
		var current = checkboxes.filter(":checked").length;
		checkboxes.filter(':not(:checked)').prop('disabled', current >= max);
	});
})

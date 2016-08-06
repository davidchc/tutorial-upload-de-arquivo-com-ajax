$(document).ready(function(){	
	$("#form").submit(function(e){
		e.preventDefault();
		var formData = new FormData();
			formData.append('file', $("#filename")[0].files[0]);
		var message = $("#message");
		$.ajax({
			url: 'upload.php',
		    type: "POST", 			
			dataType  : "JSON",
			data: formData,
			beforeSend : function(){
				message.addClass('alert alert-info').html('Enviando...');
			},
			contentType: false,
			processData: false,		
			success :  function(data){
				if(data.success){
					message.removeClass('alert-info').addClass('alert-success').html(data.success);
				}				
				if(data.error){
					message.removeClass('alert-info').addClass('alert-danger').html(data.error);
				}				
			}
		})
	});	
	
});
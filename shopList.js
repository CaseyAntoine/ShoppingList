(function() {

//Global variables
	var check = '<input class=" checkBox" type="checkbox">';
	var remove = '<span class="removeItem">Remove</span>';

//Function to add list items
	function addItem(){
		var item = $('#itemEntry').val();
		var list = '<p>' + check + item + remove + '</p>';
		$('#shopList').prepend(list);
	};
	
	
	/* function checkOff(){
		check.on('click', function(){ 
			.toggleClass('checked');
	}
	}); */
	
	// 

	$(document).ready(function () {
	
// Accepts Enter key for input
		$('#itemEntry').keyup(function(enter){
			if(enter.keyCode == 13){
				addItem();
			}
			})
	
//Resets List 
		$('#reset').click(function(){
			$('#shopList').empty();
		});
//Removes Item
		$(document).on('click', '.removeItem', function(){
			$(this).closest('p').fadeOut(500);
		})

//Checks list item
		$(document).on('click', '.checkBox', function(){
			$(this).closest('p').toggleClass('checked');
		})

	});

} ());


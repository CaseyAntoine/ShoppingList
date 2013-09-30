(function() {

//Global variables
	var check = '<input class=" checkBox" type="checkbox">';
	var remove = '<button class="remove">Remove</button>';

//Function to add list items
	function addItem(){
		var item = $('#itemEntry').val();
		var list = '<p>' + check + item + remove +'</p>';
		
		if(item == 0){
			alert('Enter text to add items to the list');

		} else{

		$('#shopList').prepend(list);}
	};
	
	
	/* function checkOff(){
		check.on('click', function(){ 
			.toggleClass('checked');
	}
	}); */
	
	// 

	//Resets List 
		$('#reset').click(function(){
			$('#shopList').reload();
		});
//Removes Item
		$(document).on('click', '.remove', function(){
			$(this).closest('p').fadeOut(500);
		})

//Checks list item
		$(document).on('click', '.checkBox', function(){
			$(this).closest('p').toggleClass('checked');
			
		})

	$(document).ready(function () {
	
// Accepts Enter key for input
		$('#itemEntry').keyup(function(ev){
			if(ev.keyCode == 13){
				addItem();
				$('#itemEntry').val('');
			}
			})
	


	});

} ());


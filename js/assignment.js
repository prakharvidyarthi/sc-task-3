$(document).ready(function(){
	$('#generate').click(function(){
		//function runs when button is clicked
	$('.main').find('a').each(function(){
		$(this).text("Prakhar Vidyarthi"); //change links' text to name
	});
	$('h1').each(function(){
		$(this).contents().filter(function() {			//find contents of each h1
    return this.nodeType === 3; 						//Node.TEXT_NODE		//target the second node
  })[1].nodeValue=create_word();		//call random_word_generator created in task 2 and update the nodeValue with the returned word
  	});
	});
});
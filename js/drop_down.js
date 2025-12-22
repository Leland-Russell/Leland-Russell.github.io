var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) { 		   // Iterate through all collapsibles
    coll[i].addEventListener("click", function() { // Add a function to the click event
	this.classList.toggle("active");           // toggle whether or not it's active
	var content = this.nextElementSibling;     // and grab the next element
	if (content.style.display === "block") {   // And then if it's displaying text, make it not
	    content.style.display = "none"; 
	} else { 				   // else make it display text
	    content.style.display = "block";
	}
    });
    coll[i].click()
}

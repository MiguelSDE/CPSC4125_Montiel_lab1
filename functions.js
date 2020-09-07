(function(){
	// Vars
    
	var list = document.getElementById("list"),
		todosInput = document.getElementById("todosInput"),
		btnNewTodos = document.getElementById("btn-add");


	// Functions
	var addTodos = function(){
		var tarea = todosInput.value;
        newTodos = document.createElement("li");
        link = document.createElement("a");
        link.className = "list-group-item list-group-item-light";
        content = document.createTextNode(tarea); 

		if (tarea === "") {
			todosInput.setAttribute("placeholder", "Add valid workout");
			todosInput.className = "error";
			return false;
		}

		// Add content to the link
        link.appendChild(content);
        
		link.setAttribute("href", "#");
		// Add the link (a) to the new Todo (li)
		newTodos.appendChild(link);
		// Add new Todo to list
		list.appendChild(newTodos);

		todosInput.value = "";

        // Deletes prepopulated elements on click
		for (var i = 0; i <= list.children.length -1; i++) {
			list.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var checkInput = function(){
		todosInput.className = "";
		todosInput.setAttribute("placeholder", "Add your workout");
	};

	var deleteTodos = function(){
		this.parentNode.removeChild(this);
	};

	// Events

	// Add todos
	btnNewTodos.addEventListener("click", addTodos);

	// Check Input
	todosInput.addEventListener("click", checkInput);

	// Delete list elements
	for (var i = 0; i <= list.children.length -1; i++) {
		list.children[i].addEventListener("click", deleteTodos);
	}
    
}());

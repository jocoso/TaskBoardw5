
const task_form = $("#add-task-form");
const todo_sect = $("#todo-sect");

// Show hidden form if pressed
function addTask(e) {

    const is_visible = task_form.is("visible");

    if(!is_visible) {
        task_form.css("visibility", "visible");
    }
 
}

/* 
    [   
        {"name": "task-title", "value": ""},   
        {"name": "task-due", "value": ""},   
        {"name": "task-desc", "value": ""} ]
*/

function createOnSubmit(e) {
    e.preventDefault();

    const form_data = task_form.serializeArray();
    const title = form_data[0], due = form_data[1], desc = form_data[2];


    const isValid = checkValidity(title.value, due.value, desc.value);

    console.log(isValid);
    
    if(isValid.val) {
        //todo_sect.empty();
        todo_sect.append("<div>").text(title.value);
    } else {
        if(isValid.obj == "")
            alert("Form input cannot be empty");

        console.log(isValid);
    }
    
    task_form.css("visibility", "hidden");

   
}

const task_form = $("#add-task-form");
const todo_sect = $("#todo-sect");

/**
 * Show hidden form if pressed
 */
function addTask() {

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
/**
 * This function handles submissions in the task form
 * @param {event} e 
 */
function createOnSubmit(e) {
    e.preventDefault();

    const form_data = task_form.serializeArray();
    const title = form_data[0], due = form_data[1], desc = form_data[2];


    const isValid = checkValidity(title.value, due.value, desc.value);

    console.log(isValid);
    
    if(isValid.val) {
        // TODO: Add it to localstorage
        let $valDiv = $('<div>').text(title.value);
        let $dueDiv = $('<div>').text(due.value);
        let $desDiv = $('<div>').text(desc.value);

        todo_sect.append($valDiv);
        todo_sect.append($dueDiv);
        todo_sect.append($desDiv);
    } else {
        if(isValid.obj == "")
            alert("Form input cannot be empty");

        console.log(isValid);
    }
    
    task_form.css("visibility", "hidden");

   
}

const task_form = $("#add-task-form");
const todo_list = $("#todo-list > ul");
const done_list = $("#done-list");
const inprogress_list = $("#inprogress-list");

/**
 * Show hidden form if pressed
 */
function addTask() {

    const is_visible = task_form.is("visible");

    if(!is_visible) {
        task_form.css("visibility", "visible");
    }
 
}

function injectSubmissions() {
    const submitArray = JSON.parse(localStorage.getItem("tasks"));

    if(submitArray && typeof submitArray === "object") {
        submitArray.forEach((item) => {

            const $task = $('<li>').text(item.title + "\n" + item.due + "\n" + item.desc);
            $task.addClass('draggable-item');
            todo_list.append($task);
            
        
        });
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
    
    if(isValid.val) {
        // TODO: Add it to localstorage
        addToStorage("tasks", {'title': title.value, 'due': due.value, 'desc': desc.value});
    } else {
        if(isValid.obj == "")
            alert("Form input cannot be empty");
    }
    
    task_form.css("visibility", "hidden");
    window.location.reload();
}

$(document).ready(() => {
    injectSubmissions();
});
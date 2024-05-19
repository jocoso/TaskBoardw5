// Show hidden form if pressed
function addTask(e) {

    const task_form = $("#add-task-form");
    const is_visible = task_form.is("visible");

    if(!is_visible) {
        task_form.css("visibility", "visible");
    }
 
}


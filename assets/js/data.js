function deleteTask($item) {
    $item.fadeOut(() => {
        
    })
}


$(
    () => {

        $("#todo-list > ul").sortable(
            {
                connectWith: "#inprogress-list > ul, #done-list > ul",
                receive: function (event, ui) {
                    
                    const data = getLocalData("tasks");
                    const itemId = ui.item[0].id;

                    ui.item.css('background-color', 'lightblue');

                    data[itemId].id = event.target.id;
                    updateLocalData("tasks", data);

                    // ui.sender[0].parentNode;

                }
            }
        );
        $("#inprogress-list > ul").sortable(
            {
                connectWith: "#todo-list > ul, #done-list > ul",
                receive: function (event, ui) {
                    
                    const data = getLocalData("tasks");
                    const itemId = ui.item[0].id;

                    ui.item.css('background-color', 'lightblue');

                    data[itemId].id = event.target.id;
                    updateLocalData("tasks", data);

                    // ui.sender[0].parentNode;

                }
            }
        );
        $("#done-list > ul").sortable(
            {
                connectWith: "#todo-list > ul, #inprogress-list > ul",
                receive: function (event, ui) {
                    
                    const data = getLocalData("tasks");
                    const itemId = ui.item[0].id;
                    ui.item.css('background-color', 'white');

                    data[itemId].id = event.target.id;
                    updateLocalData("tasks", data);

                    //console.log(data[itemId]);
                    // ui.sender[0].parentNode;

                }
            }
        );
        
    }

)
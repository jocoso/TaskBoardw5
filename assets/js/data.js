
$(
    () => {
        $(".magnetic-container").droppable({
            accept: ".draggable-item",
            classes: {
                "ui-droppable-hover": "ui-state-hover",
            },
            greedy: true,
        });

        $(".draggable-item").draggable();
    }
)
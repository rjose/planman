function StateMachine(canvas) {
    var self = this;

    this.canvas = canvas;
    this.state = {name: "START", activeTask: null, activeControl: null};
    this.isMouseDown = false;


    // TODO: Use time units for task
    // TODO: Find a way to store tasks
    // TODO: Add assignee
    this.task1 = new Task("Task1", "Rino Jose", 2.0);
    this.tasks = [this.task1];


    // Functions that find elements
    function findAnyElement(x, y) {
        var result = null;
        // TODO: Iterate over all tasks
        var task = self.task1;

        if (task.isInTask(x, y)) {
            result = task;
        }
        return result;
    }

    // TODO: Move this to a util file
    function copy(object) {
        return $.extend(true, {}, object);
    }

    // State transition functions
    function transitionFrom_START(event) {
        console.log("Transition from start");
        var result = copy(self.state);
        var element = findAnyElement(event.x, event.y);
        console.dir(element);

        if (element && element.type === "Task") {
            result.name = "TASK_SELECTED";
            result.activeTask = element;

            var taskSelectedEvent = document.createEvent("CustomEvent");
            taskSelectedEvent.initCustomEvent("taskSelected", true, false, {task: result.activeTask});
            self.canvas.dispatchEvent(taskSelectedEvent);
        }

        return result;
    }

    function transitionFrom_TASK_SELECTED(event) {
        var result = copy(self.state);
        // TODO: Create a task class that has these functions
        // var inTask = isInTask(event.x, event.y);
    }


    // TODO: Refine transition to be at the level of mousedown and mouseup
    this.transition = function (event) {
        var newState = null;

        switch(event.type) {
            case "mousedown":
                self.isMouseDown = true;
                break;

            case "mouseup":
                self.isMouseDown = false;
                break;

            default:
                break;
        }

        switch (self.state.name) {
            case "START":
                self.state = transitionFrom_START(event);
                break;

            case "TASK_SELECTED":
                self.state = transitionFrom_TASK_SELECTED(event);
                break;

            default:
                break;
        }
    }

    function nextState(curState, event) {

        switch (curState.name) {
            case "START":
                element = findElement(event);
                if (element && element.type === "Task") {
                    result.name = "TASK_SELECTED";
                    result.activeTask = element;
                }
                break;

            default:
                break;
        }
        return result;
    }


    return true;
}
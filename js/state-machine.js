function StateMachine(canvas) {

    this.canvas = canvas;
    this.state = {name: "START", activeTask: null, activeControl: null};
    this.isMouseDown = false;


    // TODO: Use time units for task
    // TODO: Find a way to store tasks
    // TODO: Add assignee
    this.task1 = {type:"Task", name:"Task1", x:0, y:0, width:150, height:75};
    this.tasks = [this.task1];
    var self = this;


    // Functions that find elements
    function findAnyElement(x, y) {
        var result = null;
        // TODO: Iterate over all tasks
        var task = self.task1;

        // TODO: Create a task class that can compute this for me
        if (y > task.y && y < task.y + task.height) {
            if (x > task.x && x < task.x + task.width) {
                result = task;
            }
            else {
                result = "Not task, but Assignee1";
            }
        }
        return result;
    }

    // State transition functions
    function transitionFrom_START(event) {
        var result = $.extend(true, {}, self.state);
        var element = findAnyElement(event.x, event.y);

        if (element && element.type === "Task") {
            result.name = "TASK_SELECTED";
            result.activeTask = element;

            var taskSelectedEvent = document.createEvent("CustomEvent");
            taskSelectedEvent.initCustomEvent("taskSelected", true, false, {task: result.activeTask});
            self.canvas.dispatchEvent(taskSelectedEvent);
        }

        return result;
    }


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
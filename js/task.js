function Task(name, assignee, effort) {
    var self = this;
    self.name = name;
    self.assignee = assignee;
    self.effort = effort;
    self.type = "Task";

    // TODO: Compute these
    self.x = 0;
    self.y = 0;
    self.width = 150;
    self.height = 75;

    this.left = function() {
        return self.x;
    }

    this.right = function() {
        return self.x + self.width;
    }

    this.top = function() {
        return self.y;
    }

    this.bottom = function() {
        return self.y + self.height;
    }

    this.isInTask = function(x, y) {
        if (x > self.left () && x < self.right() && y > self.top() && y < self.bottom() ) {
            return true;
        }
        else {
            return false;
        }
    }

    this.render = function(context) {
        context.save();

        context.fillStyle = "#FF0000";
        context.fillRect(self.x, self.y, self.width, self.height);

        context.restore();
    }

    this.showControls = function(context) {
        context.save();

        context.strokeStyle = "#666666";
        context.lineWidth = 3;

        var leftEdge = self.left() + 2;
        var rightEdge = self.right() - 2;

        context.moveTo(rightEdge, self.top());
        context.lineTo(rightEdge, self.bottom());
        context.moveTo(leftEdge, self.top());
        context.lineTo(leftEdge, self.bottom());
        context.stroke();

        context.restore();        
    }



    return true;
}
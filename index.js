"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(description, completed) {
        if (completed === void 0) { completed = false; }
        this.description = description;
        this.completed = completed;
    }
    return Task;
}());
//import Task from './task';
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (description) {
        this.tasks.push(new Task(description));
    };
    TaskList.prototype.completeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    };
    TaskList.prototype.removeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    };
    TaskList.prototype.getTasks = function () {
        return this.tasks;
    };
    return TaskList;
}());
exports.default = TaskList;

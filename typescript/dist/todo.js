"use strict";
let tasks = [];
function addTask(newTask) {
    tasks.push(newTask);
}
function removeTask(id) {
    tasks = tasks.filter((task) => {
        return task.id != id;
    });
}
function displayTask(tasks) {
    tasks.forEach((task) => {
        console.log("title ", `${task.title} `, "description ", `${task.description} `, "and the due date is ", `${task.dueDate}`);
    });
}
let task1 = {
    id: 1,
    title: "ts",
    description: "finish learning typescript",
    dueDate: "sunday"
};
let task2 = {
    id: 2,
    title: "react",
    description: "start and finish learning react",
    dueDate: "monday"
};
let task3 = {
    id: 3,
    title: "redux",
    description: "satrt and finish learning redux and state management",
    dueDate: "tuesday"
};
addTask(task1);
addTask(task2);
addTask(task3);
displayTask(tasks);
removeTask(2);
displayTask(tasks);

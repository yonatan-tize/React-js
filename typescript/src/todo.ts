interface ToDoItem{
    id: number
    title: string
    description: string
    dueDate: string
}
let tasks: ToDoItem[] = []
function addTask(newTask: ToDoItem): void {
    tasks.push(newTask)
}

function removeTask(id: number): void{
    tasks = tasks.filter((task)=>{
        return task.id != id
    })
}

function displayTask(tasks: ToDoItem[]): void{
    tasks.forEach((task)=>{
        console.log("title ",`${task.title} `, "description ", `${task.description} `, "and the due date is ", `${task.dueDate}`)
    })
}


let task1: ToDoItem = {
    id: 1,
    title: "ts",
    description: "finish learning typescript",
    dueDate: "sunday"
}

let task2: ToDoItem = {
    id: 2,
    title: "react",
    description: "start and finish learning react",
    dueDate: "monday"
}

let task3: ToDoItem = {
    id: 3,
    title: "redux",
    description: "satrt and finish learning redux and state management",
    dueDate: "tuesday"
}


addTask(task1)
addTask(task2)
addTask(task3)

displayTask(tasks)

removeTask(2)
displayTask(tasks)
let tasks = []
class Task
{
    constructor(name) {
        this.name = name
        this.status = false
        this.id = parseInt(Math.random().toString().slice(2, 8)).toString()
    }
    getID()
    {
        return this.id.toString()
    }
    getName()
    {
        return this.name
    }
    getStatus()
    {
        return this.status
    }
    toggleStatus()
    {
        this.status = !this.status
    }
}

const inputToggle = function (btnID)
{
    tasks.forEach(function (task, index)
    {
        if (task.getID() === btnID.toString())
        {
            task.toggleStatus()
        }
    })
}

const render = function (arr)
{
    const element = document.getElementById("list")
    element.innerHTML = ""
    arr.forEach(function (task, index) {
        element.innerHTML+=
            `<li class=\"item\" id = \"li${task.getID().toString()}\"> 
            <label type=\"string\"> 
            <input type=\"checkbox\" 
            id = \"cb${task.getID().toString()}\" 
            onchange=\"inputToggle(${task.getID().toString()})\"
            ${task.getStatus() ? 'checked' : ''}
            >${task.getName()} 
            </label>
            <button type=\"button\" id = \"${task.getID().toString()}\" onclick=\"btnRemoveOnClick(${task.getID().toString()})\">X</button>
            </li>`
    })
}

const btnAddOnClick = function ()
{
    const name = document.getElementById("input").value
    const element = document.getElementById("list")
    let task = new Task(name)
    tasks.push(task)
    render(tasks)
}

const btnFilter = function (state)
{
    if (state === "ALL")
    {
        render(tasks)
    }
    else if (state === "CHECKED")
    {
        render(tasks.filter(task => task.getStatus() === true))
    }
    else
    {
        render(tasks.filter(task => task.getStatus() === false))
    }
}

const btnRemoveOnClick = function (buttonID)
{
    tasks = tasks.filter(task => task.getID() !== buttonID.toString())
    render(tasks)
}
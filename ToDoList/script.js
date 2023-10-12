function addTask() {
    const inputBox = document.getElementById("task-input");
    
    if (inputBox.value === '') {
        alert("Add a task please.");
    } 
    else {
        const newButton=document.createElement('button')
        newButton.classList.add('done')
        newButton.textContent="DONE"
        newButton.addEventListener("click",function(){
            newDiv.remove()
        })
        
        const taskAll= document.getElementsByClassName('taskall')[0]
        var numberOfChildren=taskAll.getElementsByTagName('*').length

        const newSpan=document.createElement('span')
        newSpan.classList.add('task-list')
        newSpan.textContent=inputBox.value
       
        const newDiv=document.createElement('div')
        newDiv.classList.add("tasks")

        
        taskAll.style.opacity="1"
        
        

        taskAll.appendChild(newDiv)
        newDiv.appendChild(newSpan)
        newDiv.appendChild(newButton)
    }
}
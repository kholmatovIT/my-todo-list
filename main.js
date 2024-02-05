const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const del = document.getElementById("del-all");
const tasks = document.getElementById("tasks");
        
const data = [];

function render() {
    tasks.innerHTML = "";
    data.map((item, index) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = `                                        
        <p id="yozuv">${item.task}</p>
        <button id="del" onclick="deleteTask(${index})">delete</button>
        `;
        newElement.classList.add("jack");
        tasks.appendChild(newElement);
    }) 
}


btn.addEventListener("click", function () {
    if(inp.value){
        data.push({
            id: 1,
            task: inp.value,
            isDone: false
        });
        inp.value = "";
        render();
    }
});

function deleteTask(ind) {
   data.splice(ind, 1)
   render();   
}
function deleteAll() {
    data.length = 0;
    render();   
}
function show() {
    inp.value = ""
    render()
};


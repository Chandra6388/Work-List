const addtaskinput = document.getElementById("addtaskinput");
const addtaskbtn = document.getElementById("addtaskbtn");
const addedtasklist = document.getElementById("addedtasklist");
const saveindex = document.getElementById("saveindex");
const savetaskbtn = document.getElementById("savetaskbtn");
let deleteallbtn = document.getElementById("deleteallbtn");
let searchtextbox = document.getElementById("searchtextbox");

showtask();


addtaskbtn.addEventListener("click", () => {
   var addtaskinputval = addtaskinput.value;
    if (addtaskinputval.trim() != 0) {
        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval);
    }
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = "";
    showtask();
})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    taskObj.forEach((item, index) => {
        html += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item}</td>
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`
    })
    addedtasklist.innerHTML = html;
}
// edit btn
function edittask(index){
    let webtask = localStorage.getItem("localtask");
    saveindex.value = index;
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}
// save task
savetaskbtn.addEventListener("click",()=>{

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex]= addtaskinput.value;
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
    addtaskbtn.style.display = "block";
    savetaskbtn.style.display = "none";
    addtaskinput.value = '';
})
// delete btn
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

deleteallbtn.addEventListener("click",()=>{
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = [];
    }
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    addtaskinput.value = '';
})
 











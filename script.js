function addItem(){
    var ul = document.getElementById("todos");
    var task = document.getElementById("task");
    if (document.getElementById("task").value == "") {
        swal("Enter your task!!");
    } else {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task.value));
    ul.appendChild(listItem);
    document.getElementById("task").value = '';
    incompleteItem();
}}
window.onkeyup = function (event){
    if (13 === event.keyCode){
        var ul = document.getElementById("todos");
        var task = document.getElementById("task");
        if (document.getElementById("task").value == "") {
            swal("Enter your task!!");
        } else {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(task.value));
        ul.appendChild(listItem);
        document.getElementById("task").value = '';
        incompleteItem();
}}}
document.getElementById("todos").addEventListener("click", function(e){
    if (e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
     var removedItem = e.target.parentElement.removeChild(e.target);
     var completeul = document.getElementById("completed");
     completeul.appendChild(removedItem);
     swal({
        title: "Good job!",
        text: "Completed your task!!",
        icon: "success",
      });
});
document.getElementById("completed").addEventListener("click", function(e){
    if (e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
    var ul = document.getElementById("todos");
     var removedItem = e.target.parentElement.removeChild(e.target);
     ul.appendChild(removedItem);
});
function incompleteItem(){
    document.getElementById('todos').style.display = 'block';
    document.getElementById('completed').style.display = 'none';
}
function completedItem(){
    document.getElementById('todos').style.display = 'none';
    document.getElementById('completed').style.display = 'block';
}
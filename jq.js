todoListData = [
    { "_id": 1, "task": "HTML I", "done": true },
    { "_id": 2, "task": "CSS", "done": true },
    { "_id": 3, "task": "Responsive design", "done": true },
    { "_id": 4, "task": "Git", "done": true },
    { "_id": 5, "task": "JavaScript I", "done": true },
    { "_id": 6, "task": "JavaScript II", "done": false }
];

function render() {
    html = ''
    todoListData.forEach(element => {
        let liClass = element.done ? "done" : "pending";
        if (liClass == "done") btn = `<i id="finish" class="far fa-times-circle"  onclick="btntoggle(${element._id})"></i>`;
        else btn = `<i  class="fas fa-check-circle" onclick="btntoggle(${element._id})"></i>`;
        html += `<div class="item ${liClass}">
            <div class="absolue">
                ${btn}
                <i  class="fas fa-trash" onclick="deleteItem(${element._id})"></i>
            </div>
            <h3>${element.task}</h3>
            <p>${liClass} </p>
        </div>`
    });
    $('.items').html(html)
}
render();

function btntoggle(id) {
    var index = todoListData.map(function(e) {
        return e._id;
    });
    index = index.indexOf(id);
    todoListData[index].done = !todoListData[index].done;
    render();
}

function deleteItem(id) {
    var index = todoListData.map(function(e) {
        return e._id;
    });
    index = index.indexOf(id);
    todoListData.splice(index, 1);
    render()
}

$('#addtolist').click(function() {
    task = $('#task').val();

    item = {
        "_id": todoListData.length + 1,
        "task": task,
        "done": false
    }
    todoListData.push(item);
    $('#task').val('');
    $('#task').focus();
    render()
})
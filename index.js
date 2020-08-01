// for getting value from field and updating
function getAndUpdatelist() {
    console.log('getandupdating');
    tit = document.getElementById('title_id').value;
    des = document.getElementById('description_id').value;
    if (localStorage.getItem('items') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, des])
        localStorage.setItem('items', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('items');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, des]);
        localStorage.setItem('items', JSON.stringify(itemJsonArray))
    }
    updatelist()
}
//for just refresh the lists
function updatelist() {
    if (localStorage.getItem('items') == null) {
        itemJsonArray = [];
        localStorage.setItem('items', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('items');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
    tablebody = document.getElementById('tablebody')
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr >
        <th scope="row">${index + 1}</th>
        <td id="t">${element[0]}</td>
        <td id="d">${element[1]}</td>
        <td><button class="btn btn-sm btn-danger" onclick="deleting(${index})" >Delete</button></td>
        </tr>` ;
    });
    tablebody.innerHTML = str

}
add = document.getElementById('add')
add.addEventListener('click', getAndUpdatelist);

updatelist()

function deleting(itemindex) {
    console.log(itemindex);
    itemJsonArraystr = localStorage.getItem('items');
    itemJsonArray = JSON.parse(itemJsonArraystr);

    // deleting items from locatstroge
    itemJsonArray.splice(itemindex, 1)

    localStorage.setItem('items', JSON.stringify(itemJsonArray))
    updatelist()
}

function press(n){

    var checklist = document.getElementById("checklist");
    var lis = checklist.children;
    if (!checked[n-1]) {
        lis[n-1].classList.add("checked");
        checked[n-1] = true;
    }
    else{
        lis[n-1].classList.remove("checked");
        checked[n-1] = false;

    }


}

var checked = [false, false, false];
var item_amount = 3;
var ch_butts = document.getElementById("ch-buttons");


function add(){
    
    item_amount++;
    var newItem = prompt("Enter new item name");
    while (newItem === "" && newItem !== null) {
        var newItem = prompt("Enter new item name (non empty please)");
    }
    if (newItem === null) { return; }

    var newButt = document.createElement("button");
    newButt.appendChild(document.createTextNode(newItem));
    newButt.classList.add("buttons");
    newButt.setAttribute("id", "button" + item_amount);
    newButt.setAttribute("onclick", "press(" + item_amount + ")");
    
    var newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.appendChild(newButt);

    if ((item_amount - 1) % 3 == 0){
        var newRow = document.createElement("div");
        newRow.classList.add("row");          
        newRow.appendChild(newCol);
        ch_butts.appendChild(newRow);
    }
    else {
        var rows = ch_butts.children;
        last_row = rows[rows.length - 1];
        last_row.appendChild(newCol);
    }

    var chlst = document.getElementById("checklist");
    
    var newLI = document.createElement("li");
    newLI.appendChild(document.createTextNode(newItem));
    chlst.appendChild(newLI);

    checked.add(false);
}   

let bgConatinerEl = document.createElement("div");
bgConatinerEl.classList.add("bg-container");
document.body.appendChild(bgConatinerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocey List";
bgConatinerEl.appendChild(headingEl);

let unOrderList = document.createElement("ul");
unOrderList.classList.add("list-container");
bgConatinerEl.appendChild(unOrderList);


let myArray = ["Mlik", "penutButter", "cookies", "chips"];

for (let i of myArray) {
    let listI = document.createElement("li");
    listI.textContent = i;
    unOrderList.appendChild(listI);

}

let check_box = document.createElement("input");
check_box.id = "deliverymode";
check_box.type = "checkbox";
bgConatinerEl.appendChild(check_box);


let lab_el = document.createElement("label");
lab_el.setAttribute("for", "deliverymode");
lab_el.classList.add("lab_el");
lab_el.textContent = "Need Home Delivary";
bgConatinerEl.appendChild(lab_el);

let break_up_line = document.createElement("br");
bgConatinerEl.appendChild(break_up_line);

let button = document.createElement("button");
button.classList.add("btn","btn-primary");
button.textContent = "proceed to pay";
bgConatinerEl.appendChild(button);
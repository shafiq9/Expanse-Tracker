
const addExpanseBtn = document.querySelector(".add-expanse-btn");
const expanseList = document.querySelector(".expanse-list");
const totalExpanses = document.querySelector(".total-expanses h3");

let expanses = [];
let total = 0;

function renderExpanses(){
    let html = "";

    expanses.forEach(expanse => {
        html += `
        <div class="expanse-item">
         <div class="expanse-item-description">${expanse.description}</div>
         <div class="expanse-item-amount">${expanse.amount}</div>
            <button class="delete-expanse-btn">&times;</button>
        </div>
        `;
    });

    expanseList.innerHTML = html;
    totalExpanses.innerText = `Total Expanses: $${total}`;
}

function addExpanse(){
    const description = prompt("Enter Expanse Description");
    const amount = parseFloat(prompt("Enter Expanse Amount"));

    if(description && amount){
        const expanse = {
            desrciption:description,
            amount:amount
        };

        expanses.push(expanse);
        total += amount;
        renderExpanses();
    }
}

addExpanseBtn.addEventListener("click", addExpanse);

function deleteExpanse(index){
    total -= expanses[index].amount;
    expanses.splice(index, 1)
    renderExpanses();
}

expanseList.addEventListener("click", function(event){
    if(event.target.classList.contains("delete-expanse-btn")){
        const index = Array.from(event.target.parentNode.parentNode.childern)
        .indexOf(event.target.parentNode);
        
        deleteExpanse(index);
    }
});

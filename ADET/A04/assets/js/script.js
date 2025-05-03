const salesList = document.getElementById("sales-list");

function displayCategoryList() {
    const categoryList = document.getElementById('category-list');

    menuList.forEach((menu, i) => {
        categoryList.innerHTML +=
            `<button class="btn btn-outline-secondary" onclick="displayMenuItems(${i});">${menu.category.toUpperCase()}</button>`;
    })
}

function displayMenuItems(i) {
    const menuItemContainer = document.getElementById('menu-item-container');
    menuItemContainer.innerHTML = "";

    menuList[i].items.forEach((item, itemIndex) => {
        menuItemContainer.innerHTML +=
            `<div class="card item-card d-flex align-items-center">
            <img src="assets/img/${item.itemPicture}.webp" alt="${item.itemName}" class="img-fluid item-pic m-3">
            <h6 class="heading text-center">${item.itemName.toUpperCase()}</h6>
            <div class="d-flex gap-3 align-items-end my-4">
                <button style="background-color: transparent; height: 20px;" id="${item.itemCode}-subtract"
                    onclick="removeItem(${i}, ${itemIndex});" ${item.quantityOrdered === 0 ? "disabled" : ""}>-</button>
                <h6 id="${item.itemCode}-quantity">${item.quantityOrdered}</h6>
                <button style="background-color: transparent; height: 20px;" id="${item.itemCode}-add"
                    onclick="addItem(${i}, ${itemIndex});">+</button>
            </div>
        </div>`;
    })
    console.log(menuList[0].items[0].quantityOrdered);
}

function addItem(i, itemIndex) {
    const itemArray = menuList[i].items[itemIndex];
    const itemQuantity = document.getElementById(`${itemArray.itemCode}-quantity`);
    const itemBtnSubtract = document.getElementById(`${itemArray.itemCode}-subtract`);

    itemArray.quantityOrdered += 1;
    itemQuantity.innerHTML = itemArray.quantityOrdered;
    itemBtnSubtract.disabled = false;

    const itemExist = document.getElementById(`${itemArray.itemCode}-receipt`);

    if(itemExist){
        const salesQuantity = document.getElementById(`${itemArray.itemCode}-qty`);
        const salesSubTotal = document.getElementById(`${itemArray.itemCode}-subtotal`);
        const subTotal = itemArray.itemPrice * itemArray.quantityOrdered;

        salesQuantity.textContent = `${itemArray.quantityOrdered} × ${itemArray.itemPrice}.00`;
        salesSubTotal.textContent = `₱${subTotal}.00`;
    }else{
        salesList.innerHTML += 
        `<div class="mb-3" id="${itemArray.itemCode}-receipt">
            <div class="d-flex justify-content-between">
                    <h6>${itemArray.itemName}</h6><span class="text-end" id="${itemArray.itemCode}-subtotal">₱${itemArray.itemPrice}.00</span>
            </div>
            <div class="d-flex justify-content-between">
                <h6 class="body">${itemArray.itemCode}</h6><span class="text-end body" id="${itemArray.itemCode}-qty">${itemArray.quantityOrdered} × ${itemArray.itemPrice}.00</span>
            </div>
        </div>`;
    }
}

function removeItem(i, itemIndex) {
    const itemArray = menuList[i].items[itemIndex];
    const itemQuantity = document.getElementById(`${itemArray.itemCode}-quantity`);
    const itemBtnSubtract = document.getElementById(`${itemArray.itemCode}-subtract`);

    if (itemArray.quantityOrdered > 0) {
        const salesQuantity = document.getElementById(`${itemArray.itemCode}-qty`);
        const salesSubTotal = document.getElementById(`${itemArray.itemCode}-subtotal`);

        itemArray.quantityOrdered -= 1;
        itemQuantity.innerHTML = itemArray.quantityOrdered;
        const subTotal = (itemArray.itemPrice * itemArray.quantityOrdered);
        if(salesQuantity){
            salesQuantity.textContent = `${itemArray.quantityOrdered} × ${itemArray.itemPrice}.00`;
            salesSubTotal.textContent = `₱${subTotal}.00`;
        }
        
        if (itemArray.quantityOrdered === 0) {
            const itemExist = document.getElementById(`${itemArray.itemCode}-receipt`);

            itemBtnSubtract.disabled = true;
            if (itemExist) {
                salesList.removeChild(itemExist);
            }
        }
    } else {
        itemBtnSubtract.disabled = true;
    }
}

displayCategoryList();
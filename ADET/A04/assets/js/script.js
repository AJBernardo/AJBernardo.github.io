const salesList = document.getElementById("sales-list");
const categoryList = document.getElementById('category-list');
const menuItemContainer = document.getElementById('menu-item-container');
const totalAmount = document.getElementById("total-amount");
const btnCancel = document.getElementById('button-cancel');
const btnPay = document.getElementById('button-pay');
let total = 0;

btnCancel.disabled = true;
btnPay.disabled = true;

function displayCategoryList() {
    menuList.forEach((menu, i) => {
        categoryList.innerHTML +=
            `<button class="btn btn-categories btn-outline-light" onclick="displayMenuItems(${i});">${menu.category.toUpperCase()}</button>`;
    })

    displayMenuItems(0);
}

function displayMenuItems(i) {
    menuItemContainer.innerHTML = "";

    menuList[i].items.forEach((item, itemIndex) => {
        menuItemContainer.innerHTML +=
            `<div class="card item-card d-flex align-items-center">
            <img src="assets/img/${item.itemPicture}.webp" alt="${item.itemName}" class="img-fluid item-pic m-3">
            <h6 class="heading text-center">${item.itemName.toUpperCase()}</h6>
            <div class="d-flex gap-3 align-items-end my-4">
                <button class="btn btn-light d-flex align-items-center" style="height: 30px; border: 2px solid #212529" id="${item.itemCode}-subtract"
                    onclick="removeItem(${i}, ${itemIndex});" ${item.quantityOrdered === 0 ? "disabled" : ""}>-</button>
                <h6 id="${item.itemCode}-quantity">${item.quantityOrdered}</h6>
                <button class="btn btn-light d-flex align-items-center" style="height: 30px; border: 2px solid #212529" id="${item.itemCode}-add"
                    onclick="addItem(${i}, ${itemIndex});">+</button>
            </div>
        </div>`;
    })

}

function addItem(i, itemIndex) {
    const itemArray = menuList[i].items[itemIndex];
    const itemQuantity = document.getElementById(`${itemArray.itemCode}-quantity`);
    const itemBtnSubtract = document.getElementById(`${itemArray.itemCode}-subtract`);

    itemArray.quantityOrdered += 1;
    itemQuantity.innerHTML = itemArray.quantityOrdered;
    itemBtnSubtract.disabled = false;

    const itemExist = document.getElementById(`${itemArray.itemCode}-receipt`);
    const subTotal = itemArray.itemPrice * itemArray.quantityOrdered;
    total += itemArray.itemPrice;
    isReceiptEmpty();

    if (itemExist) {
        const salesQuantity = document.getElementById(`${itemArray.itemCode}-qty`);
        const salesSubTotal = document.getElementById(`${itemArray.itemCode}-subtotal`);

        salesQuantity.textContent = `${itemArray.quantityOrdered} × ${itemArray.itemPrice}.00`;
        salesSubTotal.textContent = `₱${subTotal}.00`;
    } else {
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

    totalAmount.textContent = `₱${total}.00`
    const addedItem = document.getElementById(`${itemArray.itemCode}-receipt`);
    // FOR FUTURE REFERNCE: .scrollIntoView() was used to show the current element to display
    if (addedItem) {
        addedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        total -= itemArray.itemPrice
        isReceiptEmpty();
        if (salesQuantity) {
            salesQuantity.textContent = `${itemArray.quantityOrdered} × ${itemArray.itemPrice}.00`;
            salesSubTotal.textContent = `₱${subTotal}.00`;
            totalAmount.textContent = `₱${total}.00`
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

    isReceiptEmpty();
}

function isReceiptEmpty() {
    if (total > 0) {
        btnCancel.disabled = false;
        btnPay.disabled = false;
    } else {
        btnCancel.disabled = true;
        btnPay.disabled = true;
    }
}

function reset() {
    total = 0;
    totalAmount.innerHTML = '';
    salesList.innerHTML = `<div class="mb-3">
                            <div class="d-flex justify-content-between">
                                <h6>ITEMS</h6><span class="text-end">PRICE</span>
                            </div>
                        </div>`;

    menuList.forEach(menu => {
        menu.items.forEach(item => {
            item.quantityOrdered = 0;

            const itemQuantity = document.getElementById(`${item.itemCode}-quantity`);
            const itemBtnSubtract = document.getElementById(`${item.itemCode}-subtract`);
            if (itemQuantity) {
                itemQuantity.innerHTML = 0;
                itemBtnSubtract.disabled = true;
            }
        })
    })

    isReceiptEmpty();
}

function changeMode() {
    const toggleColor = document.getElementById('toggle-color');
    const logo = document.getElementById('logo');
    const body = document.body;

    toggleColor.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-bs-theme');

        if (currentTheme === 'dark') {
            body.setAttribute('data-bs-theme', 'light');
            toggleColor.innerHTML = 'DARK MODE';
            logo.src = 'assets/img/nami_light.png';
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            toggleColor.innerHTML = 'LIGHT MODE';
            logo.src = 'assets/img/nami_dark.png';
        }

        const buttons = document.getElementsByClassName('btn');
        //FOR FUTURE REFERENCE. Array.from() was used to convert buttons(elements) to an array
        Array.from(buttons).forEach(btn => {
            if (btn.classList.contains('btn-outline-light')) {
                btn.classList.remove('btn-outline-light');
                btn.classList.add('btn-dark');
            } else if (btn.classList.contains('btn-dark')) {
                btn.classList.remove('btn-dark');
                btn.classList.add('btn-outline-light');
            }
        });
    });
}

changeMode();
displayCategoryList();
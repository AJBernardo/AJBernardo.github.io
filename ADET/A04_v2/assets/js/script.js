const salesList = document.getElementById("sales-list");
const categoryList = document.getElementById('category-list');
const menuItemContainer = document.getElementById('menu-item-container');
const totalAmount = document.getElementById("total-amount");
const btnCancel = document.getElementById('button-cancel');
const btnPay = document.getElementById('button-pay');
let total = 0;

btnCancel.disabled = true;
btnPay.disabled = true;

let menuList = [];
let products = [];
let cart = {};

const getAllCategories = async () => {

    const url = 'http://localhost/Academics/COMP%20019/AJBernardo.github.io/ADET/A06/categories.php';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            menuList = data;
            displayCategoryList();
            getProducts(1);
        });
}

getAllCategories();

const getProducts = async (categoryID) => {

    const url = 'http://localhost/Academics/COMP%20019/AJBernardo.github.io/ADET/A06/products.php';

    const categoryData = {
        categoryID: categoryID
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let productID = data[i].productID;
                if (cart[productID]) {
                    data[i].quantityOrdered = cart[productID];
                } else {
                    data[i].quantityOrdered = 0;
                }
            }

            products = data;
            displayMenuItems();
        });
}

function displayCategoryList() {
    menuList.forEach(menu => {
        categoryList.innerHTML +=
            `<button class="btn btn-categories btn-outline-light" onclick="getProducts(${menu.categoryID});">${menu.name.toUpperCase()}</button>`;
    })
}

function displayMenuItems() {
    menuItemContainer.innerHTML = "";

    products.forEach(item => {
        menuItemContainer.innerHTML +=
            `<div class="card item-card d-flex align-items-center">
            <img src="assets/img/${item.itemPicture}.webp" alt="${item.itemName}" class="img-fluid item-pic m-3">
            <h6 class="heading text-center">${item.itemName}</h6>
            <div class="d-flex gap-3 align-items-end my-4">
                <button class="btn btn-light d-flex align-items-center" style="height: 30px; border: 2px solid #212529" id="${item.itemCode}-subtract"
                    onclick="removeItem(${item.productID});" ${item.quantityOrdered === 0 ? "disabled" : ""}>-</button>
                <h6 id="${item.itemCode}-quantity">${item.quantityOrdered}</h6>
                <button class="btn btn-light d-flex align-items-center" style="height: 30px; border: 2px solid #212529" id="${item.itemCode}-add"
                    onclick="addItem(${item.productID});">+</button>
            </div>
        </div>`;
    })
}

function addItem(productID) {

    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].productID == productID) {
            product = products[i];
            break;
        }
    }

    if (cart[productID]) {
        cart[productID]++;
    } else {
        cart[productID] = 1;
    }

    product.quantityOrdered = cart[productID];

    const itemQuantity = document.getElementById(`${product.itemCode}-quantity`);
    const itemBtnSubtract = document.getElementById(`${product.itemCode}-subtract`);

    let quantity = parseInt(product.quantityOrdered);
    let price = parseFloat(product.itemPrice);

    product.quantityOrdered = quantity;
    itemQuantity.innerHTML = quantity;
    itemBtnSubtract.disabled = false;

    const itemExist = document.getElementById(`${product.itemCode}-receipt`);
    const subTotal = price * quantity;
    total += price;
    isReceiptEmpty();

    if (itemExist) {
        const salesQuantity = document.getElementById(`${product.itemCode}-qty`);
        const salesSubTotal = document.getElementById(`${product.itemCode}-subtotal`);

        salesQuantity.textContent = `${quantity} × ${price}.00`;
        salesSubTotal.textContent = `₱${subTotal.toFixed(2)}`;
    } else {
        salesList.innerHTML +=
            `<div class="mb-3" id="${product.itemCode}-receipt">
            <div class="d-flex justify-content-between">
                    <h6>${product.itemName}</h6><span class="text-end" id="${product.itemCode}-subtotal">₱${price}.00</span>
            </div>
            <div class="d-flex justify-content-between">
                <h6 class="body">${product.itemCode}</h6><span class="text-end body" id="${product.itemCode}-qty">${quantity} × ${price}.00</span>
            </div>
        </div>`;
    }

    totalAmount.textContent = `₱${total}.00`
    const addedItem = document.getElementById(`${product.itemCode}-receipt`);
    // FOR FUTURE REFERNCE: .scrollIntoView() was used to show the current element to display
    if (addedItem) {
        addedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function removeItem(productID) {
    let product = products.find(p => p.productID == productID);
    if (!product) return;

    if (cart[productID]) {
        cart[productID]--;
        if (cart[productID] < 0) cart[productID] = 0;
    } else {
        cart[productID] = 0;
    }

    product.quantityOrdered = cart[productID];

    const itemQuantity = document.getElementById(`${product.itemCode}-quantity`);
    const itemBtnSubtract = document.getElementById(`${product.itemCode}-subtract`);
    const itemExist = document.getElementById(`${product.itemCode}-receipt`);
    const salesQuantity = document.getElementById(`${product.itemCode}-qty`);
    const salesSubTotal = document.getElementById(`${product.itemCode}-subtotal`);

    let quantity = product.quantityOrdered;
    let price = parseFloat(product.itemPrice);

    if (itemQuantity) itemQuantity.textContent = quantity;

    if (quantity > 0) {
        if (salesQuantity) salesQuantity.textContent = `${quantity} × ${price.toFixed(2)}`;
        if (salesSubTotal) salesSubTotal.textContent = `₱${(quantity * price).toFixed(2)}`;
        total -= price;
    } else {
        if (itemBtnSubtract) itemBtnSubtract.disabled = true;
        if (itemExist) itemExist.remove();
        total -= price;
    }

    if (total < 0) total = 0;

    totalAmount.textContent = `₱${total.toFixed(2)}`;
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

    for (let key in cart) {
        cart[key] = 0;
    }

    products.forEach(item => {
        item.quantityOrdered = 0;

        const itemQuantity = document.getElementById(`${item.itemCode}-quantity`);
        const itemBtnSubtract = document.getElementById(`${item.itemCode}-subtract`);
        if (itemQuantity) {
            itemQuantity.innerHTML = 0;
            itemBtnSubtract.disabled = true;
        }
    });

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
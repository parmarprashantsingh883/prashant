
// milk
function add_to_cart() {
    let qty = parseInt(document.getElementsByClassName("quantity-input")[0].value) || 0;
    qty++;
    document.getElementsByClassName("quantity-input")[0].value = qty;
     let price=qty*50;
     document.getElementsByClassName("item-total")[0].innerText = "₹" + price;
     let item=+qty;
     document.getElementsByClassName("total-items")[0].innerText = item +" " +"item selected"
     let total=+price;
     document.getElementsByClassName("grand-total")[0].innerText ="Grand Total:"+ "₹"+total

}

function remove_to_cart() {
    let qty = parseInt(document.getElementsByClassName("quantity-input")[0].value) || 0;
    if (qty > 0) {
        qty--;
        document.getElementsByClassName("quantity-input")[0].value = qty;
     let price=qty*50;
     document.getElementsByClassName("item-total")[0].innerText = "₹" + price;
     let item=+qty;
     document.getElementsByClassName("total-items")[0].innerText = item +" " +"item selected"
     let total=+price;
     document.getElementsByClassName("grand-total")[0].innerText ="Grand Total:"+ "₹"+total
    }
    document.getElementsByClassName("quantity-input")[0].value = qty;
}

// rice

function add_to_cart() {
    let qty = parseInt(document.getElementsByClassName("quantity-input")[0].value) || 0;
    qty++;
    document.getElementsByClassName("quantity-input")[0].value = qty;
     let price=qty*50;
     document.getElementsByClassName("item-total")[0].innerText = "₹" + price;
     let item=+qty;
     document.getElementsByClassName("total-items")[0].innerText = item +" " +"item selected"
     let total=+price;
     document.getElementsByClassName("grand-total")[0].innerText ="Grand Total:"+ "₹"+total

}

function remove_to_cart() {
    let qty = parseInt(document.getElementsByClassName("quantity-input")[0].value) || 0;
    if (qty > 0) {
        qty--;
        document.getElementsByClassName("quantity-input")[0].value = qty;
     let price=qty*50;
     document.getElementsByClassName("item-total")[0].innerText = "₹" + price;
     let item=+qty;
     document.getElementsByClassName("total-items")[0].innerText = item +" " +"<h1>item selected</h1>"
     let total=+price;
     document.getElementsByClassName("grand-total")[0].innerText ="Grand Total:"+ "₹"+total
    }
    document.getElementsByClassName("quantity-input")[0].value = qty;
}

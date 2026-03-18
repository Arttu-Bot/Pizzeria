function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let div = document.getElementById('cart');
    let total = 0;

    div.innerHTML = '';

    cart.forEach((item, index) => {
        total += item.price;

        div.innerHTML += `
        <p>
            ${item.name} - ${item.price}€
            <button onclick="removeItem(${index})" class="cart-button">Poista</button>
        </p>
        `;
    });

    document.getElementById('total').textContent = 'Yhteensä: ' + total + '€';
    }

    function removeItem(i) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    }

    loadCart();
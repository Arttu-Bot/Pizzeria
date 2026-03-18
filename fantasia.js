function createPizza() {
    const selected = document.querySelectorAll('input:checked');
    if (selected.length === 0) return alert('Valitse täytteet');

    let name = 'Fantasia (';
    let price = 0;

    selected.forEach((el, i) => {
        name += el.value;
        price += parseInt(el.dataset.price);
        if (i < selected.length - 1) name += ', ';
    });

    name += ')';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Pizza lisätty koriin!');
    }
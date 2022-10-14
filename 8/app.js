'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

const basket = {}

let basketEl = document.querySelector('.cartIconWrap');
let saleCountEl = basketEl.querySelector('span'); // Спан-счетчик количества товаров в корзине
let productEl = document.querySelectorAll('.featuredItem'); // Элементы на которых находятся сами товары
let basketTotalEl = document.querySelector('.basketTotal');

basketEl.addEventListener('click', function (event) {
    let basketTableEl = document.querySelector('.basket');
    basketTableEl.classList.toggle('hidden');
});

productEl.forEach(element => {
    let btnEl = element.querySelector('button');
    element.addEventListener('click', function (event) {
        if (event.target == btnEl) {
            saleCountEl.textContent ++;
            let id = element.id;
            let name = element.getAttribute('name');
            let price = element.getAttribute('price');
            basketTotalEl.querySelector('.basketTotalValue').textContent = Number(basketTotalEl.querySelector('.basketTotalValue').textContent) + Number(price);
            if (!(id in basket)) {
                basket[id] = {"id": id, "name": name, "price": price, "count": "1"};
            } else {
                ++basket[id].count;
                console.log(basket);
            }
        }
        function addHTMLElement(id) {
        const productRow = `
            <div class="basketRow" id="${basket[id].id}">
            <div>${basket[id].name}</div>
            <div>
                <span class="productCount">${basket[id].count}</span> шт.
            </div>
            <div>$${basket[id].price}</div>
            <div>
                $<span class="productTotalRow">${basket[id].price * basket[id].count}</span>
            </div>
            </div>
            `;
        basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
        }
    })
});



const products = [
    {
        id: 1,
        category: 'Рушники',
        imgMain: 'img/rushniki/1/rushnik.jpg',
        img: [
            'img/rushniki/1/rushnik_2.jpg',
            'img/rushniki/1/rushnik_3.jpg',
            'img/rushniki/1/rushnik_4.jpg',
            'img/rushniki/1/rushnik_5.jpg',
        ],
        title: 'Махрові рушники. Натуралка, люкс котон 100%.',
        pack: true,
        size: {
            size1: {
                s: '70X140',
                inPack: 6,
                salePack: 3,
                price: 330,
                salePrice: 310
            },
            size2: {
                s: '50X90',
                inPack: 6,
                salePack: 3,
                price: 170,
                salePrice: 160
            },
        }
    },
    {
        id: 2,
        category: 'Пледи',
        imgMain: 'img/pledy/1/pled_haski.webp',
        img: [
        ],
        title: 'Іграшка з пледиком всередині "Хаскі"',
        pack: true,
        size: {
            size1: {
                s: '110X150',
                inPack: 1,
                salePack: 4,
                price: 450,
                salePrice: 370
            }
        }
    },
    {
        id: 3,
        category: 'Постільна білизна',
        imgMain: 'img/postil/1/postil.jpg',
        img: [
            'img/postil/1/postil_1.jpg',
            'img/postil/1/postil_2.jpg',
            'img/postil/1/postil_3.jpg',
            'img/postil/1/postil_4.jpg',
            'img/postil/1/postil_5.jpg',
        ],
        title: 'Покривала +2 наволочки. 2 слоя тканини, хб',
        pack: true,
        size: {
            size1: {
                s: 'Покривало 200 на 230. Наволочки 50 на 70 (2шт).',
                inPack: 1,
                salePack: 6,
                price: 690,
                salePrice: 550
            }
        }
    },
    {
        id: 4,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/1/pokrivalo.jpg',
        img: [
            'img/pokrivalo/1/pokrivalo_1.jpg',
            'img/pokrivalo/1/pokrivalo_2.jpg',
            'img/pokrivalo/1/pokrivalo_3.jpg',
            'img/pokrivalo/1/pokrivalo_4.jpg',
            'img/pokrivalo/1/pokrivalo_5.jpg',
        ],
        title: 'Покривала фібра "іній". М\'якенькі,пухкенькі,приємні на дотик.',
        pack: true,
        size: {
            size1: {
                s: '180X200',
                inPack: 6,
                salePack: 10,
                price: 245,
                salePrice: 235
            }
        }
    },

]

function groupByCategory(products) {
    return products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = []
        acc[product.category].push(product)
        return acc
    }, {})
}

function renderProductCard(product, index) {
    const firstSizeKey = Object.keys(product.size)[0],
        sizeOptions = Object.entries(product.size).map(([key, size], i) => `
        <label class="size-label">
            <input 
                type="radio" 
                name="size-${index}" 
                value="${key}" 
                ${i === 0 ? 'checked' : ''}
            >
            ${size.s}
        </label>
    `).join('')

    const defaultSize = product.size[firstSizeKey]

    return `
        <figure class="product-card" data-id="${product.id}" data-size="${firstSizeKey}">
            <figcaption>
                <img src="${product.imgMain}" alt="${product.title}" class="main-img">
                <div class="img_container">
                    ${product.img.map((img, i) => `
                        <picture class="img-wrapper">
                            <img src="${img}" class="small_img" alt="${product.title}">
                            <span class="img-index">${i + 1}</span>
                        </picture>
                    `).join('')}
                </div>
                <h3>${product.title}</h3>
                <div class="sizes">${sizeOptions}</div>
                <p class="price">
                    <span class="price-value">${defaultSize.price}</span> грн <span>(за 1шт)</span>
                </p>
                <div class="quantity-controls">
                    <button class="decrease">-</button>
                    <span class="quantity">${defaultSize.inPack}</span>
                    <button class="increase">+</button>
                </div>
                <p>Мінімальна кількість: <span class="pack-count">${defaultSize.inPack}</span> шт</p>
                <button class="add-to-cart">В кошик</button>
            </figcaption>
        </figure>
    `
}

function initProductCards(productsToRender) {
    document.querySelectorAll('.product-card').forEach(card => {
    const id = parseInt(card.dataset.id),
          product = productsToRender.find(p => p.id === id),
          addToCartBtn = card.querySelector('.add-to-cart')

    addToCartBtn.addEventListener('click', () => {
        const selectedKey = card.querySelector('input[type="radio"]:checked').value,
            size = product.size[selectedKey],
            qty = parseInt(card.querySelector('.quantity').textContent),
            packsCount = qty / size.inPack,
            pricePerItem = packsCount >= size.salePack ? size.salePrice : size.price

        const cartItem = {
            id: product.id,
            title: product.title,
            size: size.s,
            quantity: qty,
            pricePerItem: pricePerItem,
            total: qty * pricePerItem,
            img: product.imgMain
        }

        let existingCart = JSON.parse(localStorage.getItem('cart')) || []

        const existingIndex = existingCart.findIndex(item => item.id === cartItem.id && item.size === cartItem.size)

        if (existingIndex !== -1) {
            existingCart[existingIndex].quantity += cartItem.quantity
            existingCart[existingIndex].total += cartItem.total
        } else {
            existingCart.push(cartItem)
        }

        localStorage.setItem('cart', JSON.stringify(existingCart))

        // alert('Товар додано в кошик!')
    })

    function getSelectedSize() {
        const selectedKey = card.querySelector('input[type="radio"]:checked').value
        return product.size[selectedKey]
    }

    function updateView() {
        const size = getSelectedSize(),
              qty = parseInt(card.querySelector('.quantity').textContent),
              packsCount = qty / size.inPack,
              priceToShow = packsCount >= size.salePack ? size.salePrice : size.price

        card.querySelector('.price-value').textContent = priceToShow
        card.querySelector('.pack-count').textContent = size.inPack
    }

    card.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const size = getSelectedSize()
            card.querySelector('.quantity').textContent = size.inPack
            updateView()
        })
    })

    const minusBtn = card.querySelector('.decrease'),
          plusBtn = card.querySelector('.increase'),
          quantity = card.querySelector('.quantity')

    minusBtn.addEventListener('click', () => {
        const size = getSelectedSize()
        let qty = parseInt(quantity.textContent)

        if (qty > size.inPack) {
            qty -= size.inPack
            quantity.textContent = qty
            updateView()
        }
    })

    plusBtn.addEventListener('click', () => {
        const size = getSelectedSize()
        let qty = parseInt(quantity.textContent)

        qty += size.inPack
        quantity.textContent = qty
        updateView()
    })
})

}

let productsPerPage = 12

function renderPage() {
    const start = 0,
        productsToShow = products.slice(start, productsPerPage)

    displayProducts(productsToShow)

    const btn = document.querySelector('#show-more-btn-prod')
    if (products.length > productsPerPage) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

function displayProducts(productsArray) {
    const container = document.querySelector('.product-container')
    container.innerHTML = productsArray.map(renderProductCard).join('')
    initProductCards(productsArray)
}

function renderCategoryFilters(products) {
    const filtersContainer = document.getElementById('category-filters'),
        categories = ['Пледи', 'Покривала', 'Рушники', 'Постільна білизна']

    filtersContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category === 'Пледи' ? 'active' : ''}" data-category="${category}">
            ${category}
        </button>
    `).join('')

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category

            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')

            currentPage = 1

            const filtered = products.filter(p => p.category === category)
            displayProducts(filtered.slice(0, productsPerPage))

            const btnMore = document.querySelector('#show-more-btn-prod')
            if (filtered.length > productsPerPage) {
                btnMore.style.display = 'block'
                btnMore.onclick = () => {
                    currentPage++
                    displayProducts(filtered.slice(0, productsPerPage * currentPage))
                    if (filtered.length <= productsPerPage * currentPage) {
                        btnMore.style.display = 'none'
                    }
                }
            } else {
                btnMore.style.display = 'none'
            }
        })
    })

    const initialCategory = 'Пледи',
        filtered = products.filter(p => p.category === initialCategory)
    displayProducts(filtered.slice(0, productsPerPage))

    const btnMore = document.querySelector('#show-more-btn-prod')
    if (filtered.length > productsPerPage) {
        btnMore.style.display = 'block'
        btnMore.onclick = () => {
            currentPage++
            displayProducts(filtered.slice(0, productsPerPage * currentPage))
            if (filtered.length <= productsPerPage * currentPage) {
                btnMore.style.display = 'none'
            }
        }
    } else {
        btnMore.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryFilters(products)

    const showMoreBtn = document.querySelector('#show-more-btn-prod')
    showMoreBtn.addEventListener('click', () => {
        currentPage++
        renderPage()
    })
})

//cart
const cartPopup = document.querySelector(".cart_popup"),
    darkBg = document.querySelector(".dark-bgc"),
    cartContainer = document.querySelector(".order_container"),
    errorCart = document.querySelector(".error_cart"),
    cartBtn = document.querySelector(".cart"),
    deleteCta = document.querySelector(".delete_cta"),
    cancelCart = document.querySelector(".cancel_cart")

cartBtn.addEventListener("click", function (e) {
    e.preventDefault()
    openCart()
    
})

cancelCart.addEventListener("click", function (e) {
    e.preventDefault()
    cartPopup.style.display = "none"
    darkBg.style.display = "none"
})

darkBg.addEventListener("click", function (e) {
    e.preventDefault()
    cartPopup.style.display = "none"
    darkBg.style.display = "none"
})

deleteCta?.addEventListener("click", function (e) {
    e.preventDefault()
    localStorage.removeItem("cart")
    errorCart.style.display = "flex"
    cartContainer.style.display = "none"
})


function renderCartItems() {
    const cartContainer = document.querySelector(".order_container")
    cartContainer.innerHTML = ""

    const cartItems = JSON.parse(localStorage.getItem("cart")) || []

    if (cartItems.length === 0) {
        cartContainer.style.display = "none"
        errorCart.style.display = "flex"
        return
    }

    errorCart.style.display = "none"
    cartContainer.style.display = "grid"

    cartItems.forEach(item => {
        const cartItemHTML = `
            <div class="cart-container grid col-4" data-id="${item.id}" data-size="${item.size}">
                <img src="${item.img}" alt="${item.title}" />
                <div class="cart-details">
                    <h4>${item.title}</h4>
                    <p>Розмір: ${item.size}</p>
                    <div class="quantity-controls">
                        <a class="decrease-qty">-</a>
                        <span class="cart-quantity">${item.quantity}</span>
                        <a class="increase-qty">+</a>
                    </div>
                    <p class="cart-price">${item.total.toFixed(2)} грн</p>
                    <a class="delete_cta" href="#"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M21.875 6.22967C18.4062 5.88592 14.9167 5.70883 11.4375 5.70883C9.375 5.70883 7.3125 5.813 5.25 6.02133L3.125 6.22967" stroke="#CABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.854 5.17709L9.08317 3.81251C9.24984 2.82293 9.37484 2.08334 11.1353 2.08334H13.8644C15.6248 2.08334 15.7603 2.86459 15.9165 3.82293L16.1457 5.17709" stroke="#CABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.6361 9.52048L18.959 20.0101C18.8444 21.6455 18.7506 22.9163 15.8444 22.9163H9.1569C6.25065 22.9163 6.1569 21.6455 6.04232 20.0101L5.36523 9.52048" stroke="#CABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.7607 17.1875H14.2295" stroke="#CABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.896 13.0208H15.1043" stroke="#CABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        `
        cartContainer.insertAdjacentHTML("beforeend", cartItemHTML)
    })
    
    const totalSum = cartItems.reduce((sum, item) => sum + item.total, 0),
        totalHTML = `
            <div class="cart-total">
                <h3>Загальна сума: ${totalSum.toFixed(2)} грн</h3>
            </div>
        `
    cartContainer.insertAdjacentHTML("beforeend", totalHTML)
    addCartItemListeners()
}
function addCartItemListeners() {
    document.querySelectorAll('.increase-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemEl = btn.closest('.cart-container');
            updateCartItemQty(itemEl, 1);
        });
    });

    document.querySelectorAll('.decrease-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemEl = btn.closest('.cart-container');
            updateCartItemQty(itemEl, -1);
        });
    });

    document.querySelectorAll('.delete_cta').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemEl = btn.closest('.cart-container');
            const id = parseInt(itemEl.dataset.id);
            const size = itemEl.dataset.size;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(i => !(i.id === id && i.size === size));
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        });
    });
}

function updateCartItemQty(itemEl, delta) {
    const id = parseInt(itemEl.dataset.id);
    const sizeLabel = itemEl.dataset.size;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(i => i.id === id && i.size === sizeLabel);

    if (index === -1) return;

    // Знаходимо продукт і розмір, щоб знати параметри упаковки і ціни
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Знайти розмір по label size (size.s)
    let sizeKey = Object.keys(product.size).find(key => product.size[key].s === sizeLabel);
    if (!sizeKey) return;

    const sizeObj = product.size[sizeKey];
    const step = sizeObj.inPack;

    let newQty = cart[index].quantity + delta * step;
    if (newQty < step) newQty = step; // мінімальна кількість — розмір упаковки

    // Перерахунок ціни з урахуванням знижки
    const packsCount = newQty / step;
    const pricePerItem = packsCount >= sizeObj.salePack ? sizeObj.salePrice : sizeObj.price;

    cart[index].quantity = newQty;
    cart[index].pricePerItem = pricePerItem;
    cart[index].total = newQty * pricePerItem;

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

function openCart() {
    cartPopup.style.display = "block"
    darkBg.style.display = "block"

    renderCartItems()
    document.querySelector("#cartData").value = localStorage.getItem("cart")
}

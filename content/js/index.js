import products from "../API/products.js";


function moreColors() {
    const e = Object.values(document.querySelectorAll(".checkbox.hide"));
    document.querySelector(".more-colors").addEventListener("click", () => {
        e.map(e => {
            e.classList.toggle("invisible")
        })
    })
}

function buttonLoadMore() {
    productSection.innerHTML = "", renderProducts(9)
}

document.querySelector(".load-more").addEventListener("click", buttonLoadMore);

function filterOfColorsAndSize(e) {
    const t = e.target;
    "INPUT" == t.tagName && (filter(t), verifyIfSomeChecked() && renderProducts(6))
}

function filterpreco(e) {
    const t = e.target;
    "INPUT" == t.tagName && (filterPrice(t), verifyIfSomeChecked() && renderProducts(6))
}

function filterAction() {
    Object.values(
            document.querySelectorAll(".filterColor"))
        .map(e => {
            e.addEventListener("click", filterOfColorsAndSize)
        });
    Object.values(document.querySelectorAll("input.filterPrice"))
        .map(e => {
            e.addEventListener("click", filterpreco)
        })
}

function verifyIfSomeChecked() {
    return Object.values(
        document.querySelectorAll("input")).every(e => !e.classList.contains("checked"))
}

function filter(e) {
    const t = makePricesList(e);
    Object.values(
        productSection.querySelectorAll(".products .products-model"));
    verifyIfSomeChecked() && (productSection.innerHTML = ""),
        e.checked ? (e.classList.add("checked"),
            products.map(r => {
                const c = products.indexOf(r),
                    o = r.color == e.classList[0],
                    i = r.size == e.classList[0],
                    n = void 0 !== t && (t[e.classList[0]].rangeOne < r.price && r.price < t[e.classList[0]].rangeTwo),
                    l = Object.values(document.querySelectorAll(".products > .products-model"));
                if (o || i || n) {
                    l.some(e => e.querySelector(".name").innerText == r.name) || productSection.appendChild(makeProduct(c))
                }
            })) : (e.classList.remove("checked"), products.map(r => {
            products.indexOf(r);
            const c = r.color == e.classList[0],
                o = r.size == e.classList[0],
                i = void 0 !== t && (t[e.classList[0]].rangeOne < r.price && r.price < t[e.classList[0]].rangeTwo);
            if (c || o || i) {
                Object.values(productSection.querySelectorAll(".products-model")).map(e => {
                    e.querySelector(".name").innerText == r.name && productSection.removeChild(e)
                })
            }
        }))
}

function filterPrice(e) {
    const t = makePricesList(e);
    Object.values(document.querySelectorAll(".products > .products-model"));
    e.checked ? (e.classList.add("checked"),
        products.map(r => {
            products.indexOf(r);
            const c = void 0 !== t && (t[e.classList[0]].rangeOne < r.price && r.price < t[e.classList[0]].rangeTwo),
                o = Object.values(document.querySelectorAll(".products > .products-model"));
            c || o.map(e => {
                const t = e.querySelector(".name").innerText;
                console.log(), r.name == t && productSection.removeChild(e)
            })
        })) : (e.classList.remove("checked"), products.map(r => {
        products.indexOf(r);
        const c = r.color == e.classList[0],
            o = r.size == e.classList[0],
            i = void 0 !== t && (t[e.classList[0]].rangeOne < r.price && r.price < t[e.classList[0]].rangeTwo);
        if (c || o || i) {
            Object.values(productSection.querySelectorAll(".products-model")).map(e => {
                e.querySelector(".name").innerText == r.name && productSection.removeChild(e)
            })
        }
    }))
}

function makePricesList(e) {
    if (e.classList.contains("price")) {
        return {
            "first-price": {
                rangeOne: 0,
                rangeTwo: 50
            },
            "second-price": {
                rangeOne: 51,
                rangeTwo: 150
            },
            "third-price": {
                rangeOne: 151,
                rangeTwo: 300
            },
            "fourth-price": {
                rangeOne: 301,
                rangeTwo: 500
            },
            "fifth-price": {
                rangeOne: 0,
                rangeTwo: 1 / 0
            }
        }
    }
}

function toggleFilters(e) {
    const t = e.target;
    screen.width <= 640 && (document.querySelector(".products-container .mobile-buttons")
            .classList.remove("invisible"),
            document.querySelector(".open-modal-filter").addEventListener("click", toggleFilters)),
        t.classList.contains("filter-btn-mobile") ? (document.querySelector(".filter-mobile")
            .classList.toggle("invisible"),
            document.querySelector(".container")
            .classList.toggle("invisible"),
            document.querySelector("footer")
            .classList.toggle("invisible")) : t.classList.contains("order-btn-mobile") && (
            document.querySelector(".order-mobile").classList.toggle("invisible")
        )
}

function resetFilter() {
    productSection.innerHTML = "", renderProducts(6), Object.values(document.querySelectorAll("input")).map(e => {
        e.checked = !1
    })
}

function orderRecent() {
    const e = Object.values(document.querySelectorAll(".products > .products-model"));
    let t = [];
    productSection.innerHTML = "",
        products.map(r => {
            e.map(e => {
                const c = e.querySelector(".name").innerText;
                r.name == c && t.push(r.time)
            })
        }),
        t = t.sort((e, t) => t - e),
        t.map(e => {
            products.map(t => {
                const r = products.indexOf(t);
                e == t.time && productSection.appendChild(makeProduct(r))
            })
        })
}

function orderMinorPrice() {
    orderArray(Object.values(document.querySelectorAll(".products > .products-model")).map(e => {
        const t = e.querySelector(".name").innerText,
            r = e.querySelector(".price").innerHTML;
        return {
            name: t,
            price: Number(r.split("$")[1].replace(",", "."))
        }
    }).sort((e, t) => e.price - t.price))
}

function maiorpreco() {
    orderArray(Object.values(document.querySelectorAll(".products > .products-model")).map(e => {
        const t = e.querySelector(".name").innerText,
            r = e.querySelector(".price").innerHTML;
        return {
            name: t,
            price: Number(r.split("$")[1].replace(",", "."))
        }
    }).sort((e, t) => t.price - e.price))
}

function orderArray(e) {
    productSection.innerHTML = "",
        e.map(e => {
            products.map(t => {
                const r = products.indexOf(t),
                    c = t.price == e.price,
                    o = t.name == e.name;
                c && o && productSection.appendChild(makeProduct(r))
            })
        })
}
filterAction(),
    moreColors(),
    document.querySelector(".filter-btn-mobile").addEventListener("click", toggleFilters),
    document.querySelector(".order-btn-mobile").addEventListener("click", toggleFilters),
    document.querySelector(".reset").addEventListener("click", resetFilter),
    Object.values(document.querySelectorAll(".order-recent"))
    .map(e => {
        e.addEventListener("click", orderRecent)
    }),
    Object.values(document.querySelectorAll(".menorpreco"))
    .map(e => {
        e.addEventListener("click", orderMinorPrice)
    }), Object.values(document.querySelectorAll(".maiorpreco"))
    .map(e => {
        e.addEventListener("click", maiorpreco)
    });

const productSection = document.querySelector(".products");

function makeProduct(e) {
    const t = document.querySelector(".products-model").cloneNode(!0),
        r = products[e],
        c = r.imgUri,
        o = r.name,
        i = r.price;
    return t.querySelector(".imgUri").setAttribute("src", c),
        t.querySelector(".name").innerText = o,
        t.querySelector(".price").innerHTML = ("R$" + i.toFixed(2)).replace(".", ","),
        t.querySelector(".installment").innerHTML = ("até 3x de R$" + (i / 3)
            .toFixed(2))
        .replace(".", ","),
        t
}

function renderProducts(e) {
    for (
        let t = 0; t < products.length; t++) {
        Object.values(
            document.querySelectorAll(".products .products-model"));
        t < e && productSection.appendChild(makeProduct(t))
    }
}
renderProducts(6);


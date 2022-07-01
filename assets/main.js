jQuery(".owl-carousel").owlCarousel({
    // Here goes default configs
    responsive: {
        // breakpoint from 0 up
        0: {
            stagePadding: 0,
            loop: false,
            responsiveClass: true,
            dots: false,
            nav: true,
            autoHeight: true,
            items: 1,
        },
        // breakpoint from 768 up
        768: {
            items: 3,
        },
    },
});
document.addEventListener("DOMContentLoaded", () => {
    readItems();
});


const lists = JSON.parse(localStorage.getItem("items"));

function readItems() {
    let contents = document.querySelector(".itemsdiv");
    contents.innerHTML = "";
    lists.forEach((item) => {
        contents.innerHTML += `
                <div class="col-lg-4 mb-3" id="${item.id}">
                    <div class="hover hover-3 text-white rounded"><img src="${item.img}" alt="">
                        <div class="hover-overlay"></div>
                        <div class="hover-3-content px-5 py-4">
                            <h3 class="hover-3-title text-uppercase font-weight-bold mb-1"><span class="font-weight-light">${item.title}</span></h3>
                            <p class="hover-3-description small text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p>
                        </div>
                    </div>
                </div>
        `;
    });
}

// Sorts by property type
function sortType(type) {
    if (type.target.value === 'all') {
        return loadData(arr)
    }

    let typeArr = arr.filter((x) => {
        return x.type == type.target.value;
    });
    loadData(typeArr);
}
document.getElementById("property").addEventListener("change", sortType);

// sorts by Location
function sortLocation(location) {
    if (location.target.value === 'all') {
        return loadData(arr)
    }
    let locArr = arr.filter((x) => {
        return x.location == location.target.value;
    });
    loadData(locArr);
}
document.getElementById("location").addEventListener("change", sortLocation);

// sorts by bedrooms
function sortBedroom(size) {
    if (size.target.value === 'all') {
        return loadData(arr)
    }

    let bedArr = arr.filter((x) => {
        return x.bedrooms <= size.target.value;
    });
    console.table(bedArr)
    loadData(bedArr);
}
document.getElementById("size").addEventListener("change", sortBedroom);

// sorts by budget
function sortBudget(price) {
    if (price.target.value === 'all') {
        return loadData(arr)
    }

    let sortPrice = arr.filter((p) => {
        return p.price <= price.target.value;
    });
    loadData(sortPrice);
}
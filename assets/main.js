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
let lists = JSON.parse(localStorage.getItem("items")) ?
    JSON.parse(localStorage.getItem("items")) : [{
            id: 1,
            title: "Kurama",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: "./media/9tails.jpg",
            price: 9000,
        },
        {
            id: 2,
            title: "Gyūki",
            classification: "Tailed Beast",
            species: "Ushi-oni",
            affiliation: "Allied Shinobi Forces",
            img: "./media/8tails.jpg",
            price: 8000,
        },
        {
            id: 3,
            title: "Chōmei",
            classification: "Tailed Beast",
            species: "Kabutomushi",
            affiliation: "Takigakure",
            img: "./media/seventails.jpg",
            price: 7000,
        },
        {
            id: 4,
            title: "Saiken",
            classification: "Tailed Beast",
            species: "Slug",
            affiliation: "Kirigakure",
            img: "./media/slug.jpg",
            price: 6000,
        },
        {
            id: 5,
            title: "Kokuō",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: "./media/",
            price: 7000,
        },
        {
            id: 6,
            title: "Son Gokū",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: "./media/ape.jpg",
            price: 5000,
        },
        {
            id: 7,
            title: "Isobu",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Kirigakure",
            img: "./media/ape.jpg",
            price: 6000,
        },
        {
            id: 8,
            title: "Matatabi",
            classification: "Tailed Beast",
            species: "Bakeneko",
            affiliation: "Kumogakure",
            img: "./media/ape.jpg",
            price: 6000,
        },
        {
            id: 9,
            title: "10 tails",
            classification: "Tailed Jinjuriki",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: "./media/ape.jpg",
            price: 10000,
        },
        {
            id: 10,
            title: "Desolate",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: "./media/ape.jpg",
            price: 10000,
        },
    ];
//
document.addEventListener("DOMContentLoaded", () => {
    readItems();
});


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
                            <p class="hover-3-description small text-uppercase mb-0">
                            Species: ${item.species}
                            Price:R${item.price}
                            </p>
                        </div>
                    </div>
                </div>
        `;
    });
}



// Sorts by property type
function sortType(type) {
    if (type.target.value === 'all') {
        return readItems()
    }

    let typeArr = lists.filter((x) => {
        return x.type == type.target.value;
    });
    readItems(typeArr);
}
document.getElementById("property").addEventListener("change", sortType);

// sorts by Location
function sortLocation(location) {
    if (location.target.value === 'all') {
        return readItems()
    }
    let locArr = lists.filter((x) => {
        return x.location == location.target.value;
    });
    readItems(locArr);
}
document.getElementById("location").addEventListener("change", sortLocation);

// sorts by bedrooms
function sortBedroom(size) {
    if (size.target.value === 'all') {
        return readItems(arr)
    }

    let bedArr = lists.filter((x) => {
        return x.bedrooms <= size.target.value;
    });
    console.table(bedArr)
    readItems(bedArr);
}
document.getElementById("size").addEventListener("change", sortBedroom);

// sorts by budget
function sortBudget(price) {
    if (price.target.value === 'all') {
        return readItems(arr)
    }

    let sortPrice = lists.filter((p) => {
        return p.price <= price.target.value;
    });
    readItems(sortPrice);
}
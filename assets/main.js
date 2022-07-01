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
        },
        {
            id: 2,
            title: "Gyūki",
            classification: "Tailed Beast",
            species: "Ushi-oni",
            affiliation: "Allied Shinobi Forces",
            img: "./media/8tails.jpg",
        },
        {
            id: 3,
            title: "Chōmei",
            classification: "Tailed Beast",
            species: "Kabutomushi",
            affiliation: "Takigakure",
            img: "./media/seventails.jpg",
        },
        {
            id: 4,
            title: "Saiken",
            classification: "Tailed Beast",
            species: "Slug",
            affiliation: "Kirigakure",
            img: "./media/slug.jpg",
        },
        {
            id: 5,
            title: "Kokuō",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: "./media/",
        },
        {
            id: 6,
            title: "Son Gokū",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: "./media/ape.jpg",
        },
        {
            id: 7,
            title: "Isobu",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Kirigakure",
            img: "./media/ape.jpg",
        },
        {
            id: 8,
            title: "Matatabi",
            classification: "Tailed Beast",
            species: "Bakeneko",
            affiliation: "Kumogakure",
            img: "./media/ape.jpg",
        },
        {
            id: 9,
            title: "10 tails",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: "./media/ape.jpg",
        },
        {
            id: 10,
            title: "Design Apartment",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: "./media/ape.jpg",
        },
    ];
//
document.addEventListener("DOMContentLoaded", () => {
    // readItems();
    createTable();
});

function createTable() {
    let containerAdmin = document.querySelector("tbody");
    containerAdmin.innerHTML = "";
    lists.forEach((e) => {
        containerAdmin.innerHTML += `
                <tr>
                    <th scope="row">${e.id}</th>
                    <td>${e.title}</td>
                    <td>${e.classification}</td>
                    <td>${e.species}</td>
                    <td>${e.affiliation}</td>
                    <td>${e.img}</td>
                    <td>    
                        <div class="d-flex justify-content-between align-items-center">
                            <i class="fas fa-trash" onclick="removeItem(${e.id})"></i>
                            <i class="fas fa-edit" onclick="editItem(${e.id})"></i>
                        </div>
                    </td>
                </tr>`;
    });
}

function editItem(id) {

}


function readItems() {
    let contents = document.querySelector(".row");
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

function removeItem(id) {
    if (id > -1) {
        lists.splice(id, 1);
        // Apply the change
        localStorage.setItem("items", JSON.stringify(lists));
    }
    createTable();
}
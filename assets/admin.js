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
    createTable();
});

// function myFunction() {
//     // Declare variables
//     input = document.getElementById("myInput");
//     filter = input.value.toLowerCase();
//     content = lists.
//     tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query



function createTable() {
    let containerAdmin = document.querySelector("tbody");
    containerAdmin.innerHTML = "";
    lists.forEach((e) => {
        containerAdmin.innerHTML += `
                <tr>
                    <th scope="row">${e.id}</th>
                    <td><input type="text" value="${e.title}" disabled></td>
                    <td><input type="text" value="${e.classification}" disabled></td>
                    <td><input type="text" value="${e.species}" disabled></td>
                    <td><input type="text" value="${e.title}" disabled></td>
                    <td><input type="text" value="${e.affiliation}" disabled></td>
                    <td>${e.img}</td>
                    <td>
                        <div class="d-flex justify-content-between gap-2 align-items-center">
                            <i class="fas fa-trash" onclick="removeItem(${e.id})"> </i>
                            <i class="fas fa-edit" onclick="editItem(${e.id})"> </i>
                        </div>
                    </td>
                </tr>`;
    });
}

// function editItem(id) {}

function removeItem(id) {
    if (id > -1) {
        lists.splice(id, 1);
        // Apply the change
        localStorage.setItem("items", JSON.stringify(lists));
    }
    createTable();
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
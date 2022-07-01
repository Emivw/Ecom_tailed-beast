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
            classification: "Tailed Jinjuriki",
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
// CREATE
function addItem() {
    // e.preventDefault();
    // Push to Array
    lists.push({
        id: lists.length + 1,
        title: document.getElementById('addTitle').value,
        classification: document.getElementById('addClass').value,
        species: document.getElementById('addSpecies').value,
        affiliation: document.getElementById('addaffiliation').value,
        img: parseInt(document.getElementById('addImg').value),
    });
    localStorage.setItem("items", JSON.stringify(lists));
    createTable();
}


function createTable() {
    let containerAdmin = document.querySelector("tbody");
    containerAdmin.innerHTML = "";
    lists.forEach((e, index) => {
        containerAdmin.innerHTML += `
                <tr>
                    <th scope="row">${e.id}</th>
                    <td><input type="text" value="${e.title}" disabled></td>
                    <td><input type="text" value="${e.classification}" disabled></td>
                    <td><input type="text" value="${e.species}" disabled></td>
                    <td><input type="text" value="${e.affiliation}" disabled></td>
                    <td>${e.img}</td>
                    <td>
                        <div class="d-flex justify-content-between gap-2 align-items-center">
                            <i class="fas fa-trash" onclick="removeItem(${e.id})"> </i>
                            <i class="fas fa-edit" onclick="editItem(${e.id})"> </i>
                        </div>
                    </td>
    </tr>
    <!-- Modal -->
    <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${e.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
        <div class="row">
        <div class="col-6">
            <!-- title -->
                <div class="mb-3">
                    <label for="editTitle${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editTitle${index}"
                    id="editTitle${index}"
                    value="${e.title}"/>
                </div>
    
            <!-- classification -->
                <div class="mb-3">
                    <label for="editType${index}" class="form-label">Type</label>
                    <input class="form-control" type="text"
                    name="editType${index}"
                    id="editType${index}"
                    value="${e.classification}"/>
                </div>
    
            <!-- species -->
                <div class="mb-3">
                    <label for="editLocation${index}" class="form-label">Location</label>
                    <input class="form-control" type="text"
                    name="editLocation${index}"
                    id="editLocation${index}"
                    value="${e.species}"/>
                </div>
    
            <!-- picture -->
                <div class="mb-3">
                    <label for="editPic${index}" class="form-label">Picture</label>
                    <input class="form-control" type="text"
                    name="editPic${index}"
                    id="editPic${index}"
                    value="${e.affiliation}"/>
                </div>
            </div>
            
            <div class="col-6">
            <!-- picture -->
                <div class="mb-3">
                    <label for="editRooms${index}" class="form-label">Lenght</label>
                    <input class="form-control" type="text"
                    name="editRooms${index}"
                    id="editRooms${index}"
                    value="${e.img}"/>
                </div>
            </div>
         </div> 
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onclick="updateProperty(${index})" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;
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
        return createTable()
    }

    let typeArr = lists.filter((x) => {
        return x.type == type.target.value;
    });
    createTable(typeArr);
}
document.getElementById("property").addEventListener("change", sortType);

// sorts by Location
function sortLocation(location) {
    if (location.target.value === 'all') {
        return createTable(lists)
    }
    let locArr = lists.filter((x) => {
        return x.location == location.target.value;
    });
    createTable(locArr);
}
document.getElementById("location").addEventListener("change", sortLocation);

// sorts by bedrooms
function sortBedroom(size) {
    if (size.target.value === 'all') {
        return createTable(arr)
    }

    let bedArr = lists.filter((x) => {
        return x.bedrooms <= size.target.value;
    });
    console.table(bedArr)
    createTable(bedArr);
}
document.getElementById("size").addEventListener("change", sortBedroom);

// sorts by budget
function sortBudget(price) {
    if (price.target.value === 'all') {
        return createTable(arr)
    }

    let sortPrice = lists.filter((p) => {
        return p.price <= price.target.value;
    });
    createTable(sortPrice);
}
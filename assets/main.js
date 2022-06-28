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

// Array
const projects = [{
        title: "Home 1",
        imgURL: "https://picsum.photos/200/300?random=1",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
    {
        title: "Project 2",
        imgURL: "https://picsum.photos/200/300?random=2",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
    {
        title: "Project 3",
        imgURL: "https://picsum.photos/200/300?random=3",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
    {
        title: "Project 4",
        imgURL: "https://picsum.photos/200/300?random=4",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
    {
        title: "Project 5",
        imgURL: "https://picsum.photos/200/300?random=5",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
    {
        title: "Project 6",
        imgURL: "https://picsum.photos/200/300?random=6",
        description: "Lorem ipsum",
        technologies: "HTML/CSS/JS",
        links: {
            github: "Link",
            live: "Link",
        },
    },
];
// const projectContainer = document.querySelector(".owl-carousel");
// projects.forEach((project) => {
//     projectContainer.innerHTML += ` 
//     <div class="item">
//         <h3>${project.title}</h3>
//         <img class="img-fluid" src=${project.imgURL}>
//     </div>`;
// });

// $("#addCarous").click(function(e) {
//     debugger;
//     var number = document.getElementsByClassName("item").length + 1;
//     e.preventDefault(); //-- prevent form submit
//     $("#owl-demo")
//         .trigger("add.owl.carousel", [
//             '<div class="item"> ' + number + " slide </div>",
//         ])
//         .trigger("refresh.owl.carousel");
// });
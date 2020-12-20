let allData = "";
let pagetoShow = "";

window.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    fetch("http://umarkx.com/WP/wp-json/wp/v2/chainge?_embed")
        .then(initial => initial.json())
        .then(handleData);
}

function handleData(data) {
    buildNav(data);
    allData = data;
    getURLparams();
}


function getURLparams() {
    const params = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    pagetoShow = params.get("chainge");
    document.querySelector("body").id = pagetoShow;
    console.log(pagetoShow);
}

function buildNav(data) {
    data.forEach(showPages => {

        const template = document.querySelector("#navTemplate").content;
        const clone = template.cloneNode(true);

        clone.querySelector("li a").textContent = showPages._embedded["wp:term"][0][0].name;


        const a = clone.querySelector("a");
        a.href = "index.html?chainge=" + showPages._embedded["wp:term"][1][0].name;
        a.addEventListener("click", addContent);
        document.querySelector("nav ul").appendChild(clone);

    })
}

function addContent(e) {
    console.log(e);

    e.preventDefault();


    let newurl = e.target.href;
    window.history.pushState({
        path: newurl
    }, "", newurl);

    getURLparams();


    const dataToDisplay = allData.filter(elem => {
        return elem._embedded["wp:term"][1][0].name == pagetoShow;
    });


    document.querySelector(".title").innerHTML = dataToDisplay[0].title.rendered;

    document.querySelector("#hero-image").setAttribute("src", dataToDisplay[0].heroimg.guid);

    document.querySelector("#text p").innerHTML = dataToDisplay[0].paragraph;



}

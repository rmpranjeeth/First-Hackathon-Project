//navbar code starts here
var navbar = document.createElement('div');
var navDivClass = ["navbar", "navbar-expand-lg", "navbar-light", "bg-light", "header", "m-0", "p-0"];
navbar.classList.add(...navDivClass);
navbar.setAttribute("style","position:sticky;top:0;");
document.body.append(navbar);

var navContainer = document.createElement('div');
var navConClass = ["container-fluid", "m-0", "p-0"];
navContainer.classList.add(...navConClass);
navbar.appendChild(navContainer);

var brand = document.createElement('div');
var brandClass = ["brandname", "m-0", "p-0", "d-flex", "justify-content-start", "align-content-center"];
navContainer.classList.add(...brandClass);
navContainer.appendChild(brand);

var imgTag = document.createElement("img");
const imgClass = ["card-img-top", "mb-2"];
imgTag.classList.add(imgClass);
imgTag.setAttribute("src","../Icon/icons8-beer-90.png");
imgTag.setAttribute("alt"," ");
imgTag.setAttribute("width","40");
imgTag.setAttribute("height","40");
brand.appendChild(imgTag);

var brandName = document.createElement('a');
brandName.setAttribute("href","#");
let brandName1 = "BeerInfo"
var brandName2 = document.createTextNode(brandName1);
brandName.appendChild(brandName2);
var brandNameClass = ["navbar-brand", "fw-bold"];
brandName.classList.add(...brandNameClass);
brand.appendChild(brandName);

var navButton = document.createElement('button');
navButton.setAttribute("type","button");
navButton.setAttribute("data-bs-toggle","collapse");
navButton.setAttribute("data-bs-target","#navbarNavAltMarkup");
navButton.setAttribute("aria-controls","navbarNavAltMarkup");
navButton.setAttribute("aria-expanded","false");
navButton.setAttribute("aria-label","Toggle navigation");
const navButtonClass = ["navbar-toggler"];
navButton.classList.add(navButtonClass);
navContainer.appendChild(navButton);

var navButtonSpan = document.createElement('span');
const navButtonSpanClass = ["navbar-toggler-icon"];
navButtonSpan.classList.add(navButtonSpanClass);
navButton.appendChild(navButtonSpan);

//navbar collapse items starts here

var navCollapse = document.createElement('div');
const navCollapseClass = ["collapse","navbar-collapse"];
navCollapse.classList.add(...navCollapseClass);
navCollapse.setAttribute("id","navbarNavAltMarkup");
navContainer.appendChild(navCollapse);

var navItem1 = document.createElement('div');
const navItem1Class = ["navbar-nav", "text-center", "ms-auto"];
navItem1.classList.add(...navItem1Class);
navCollapse.appendChild(navItem1);

var navItem1div1 = document.createElement('a');
navItem1div1.setAttribute("href","../index.html");
navItem1div1.setAttribute("style","text-decoration: none;color:black;");
let navItem1div1Name1 = "HOME"
var navItem1div1Name2 = document.createTextNode(navItem1div1Name1);
navItem1div1.appendChild(navItem1div1Name2);
var navItem1div1Class = ["anchor", "px-3","fw-bold"];
navItem1div1.classList.add(...navItem1div1Class);
navItem1.appendChild(navItem1div1);

var navItem1div2 = document.createElement('a');
navItem1div2.setAttribute("href","../Html/aboutindex.html");
navItem1div2.setAttribute("style","text-decoration: none;color:black;");
let navItem1div2Name1 = "ABOUT"
var navItem1div2Name2 = document.createTextNode(navItem1div2Name1);
navItem1div2.appendChild(navItem1div2Name2);
var navItem1div2Class = ["anchor", "px-3","fw-bold"];
navItem1div2.classList.add(...navItem1div2Class);
navItem1.appendChild(navItem1div2);

var navItem1div3 = document.createElement('a');
navItem1div3.setAttribute("href","../Html/breweryindex.html");
navItem1div3.setAttribute("style","text-decoration: none;color:black;");
let navItem1div3Name1 = "BREWERIES"
var navItem1div3Name2 = document.createTextNode(navItem1div3Name1);
navItem1div3.appendChild(navItem1div3Name2);
var navItem1div3Class = ["anchor", "px-3","fw-bold"];
navItem1div3.classList.add(...navItem1div3Class);
navItem1.appendChild(navItem1div3);

var navItem1div4 = document.createElement('a');
navItem1div4.setAttribute("href","../Html/contactindex.html");
navItem1div4.setAttribute("style","text-decoration: none;color:black;");
let navItem1div4Name1 = "CONTACT US"
var navItem1div4Name2 = document.createTextNode(navItem1div4Name1);
navItem1div4.appendChild(navItem1div4Name2);
var navItem1div4Class = ["anchor", "px-3","fw-bold"];
navItem1div4.classList.add(...navItem1div4Class);
navItem1.appendChild(navItem1div4);
//


var navItem2 = document.createElement('div');
const navItem2Class = ["login", "text-center"];
navItem2.classList.add(...navItem2Class);
navCollapse.appendChild(navItem2);

var navItem2div1 = document.createElement('a');
navItem2div1.setAttribute("href","#");
navItem2div1.setAttribute("style","text-decoration: none;color:black;");
var navItem2div1Class = ["px-3","fw-bold"];
navItem2div1.classList.add(...navItem2div1Class);
navItem2div1.setAttribute("href","#");
var navItem2icon = document.createElement('i');
var navItem2iconClass = ["bi", "bi-person-circle", "pe-2"];
navItem2icon.classList.add(...navItem2iconClass);
let navItem2div1Name1 = "Log In"
var navItem2div1Name2 = document.createTextNode(navItem2div1Name1);
navItem2div1.appendChild(navItem2div1Name2);
navItem2div1.appendChild(navItem2icon);
navItem2.appendChild(navItem2div1);
//


var navItem3 = document.createElement('div');
const navItem3Class = ["navbar-nav", "text-center", "ms-auto"];
navItem3.classList.add(...navItem3Class);
navCollapse.appendChild(navItem3);

var navItem3div1 = document.createElement('a');
navItem3div1.setAttribute("href","#");
navItem3div1.setAttribute("style","text-decoration: none;color:black;");
var navItem3div1Class = ["joinnow", "fw-bold", "px-2", "py-3"];
navItem3div1.classList.add(...navItem3div1Class);
let navItem3div1Name1 = "JOIN NOW"
var navItem3div1Name2 = document.createTextNode(navItem3div1Name1);
navItem3div1.appendChild(navItem3div1Name2);
navItem3.appendChild(navItem3div1);

//navbar code stops here

var overAllContainer = document.createElement('div');
overAllContainer.classList.add("container");

var overAllContainerHeading = document.createElement('h1');
let oachName1 = "About";
var oachName2 = document.createTextNode(oachName1);
overAllContainerHeading.appendChild(oachName2);
overAllContainer.appendChild(overAllContainerHeading);

var overAllContainerpara = document.createElement('h5');
let oacpName1 = "All the details at one place. We have done so many researches and gathered many data about Brewery companies and here is the website for it. ";
var oacpName2 = document.createTextNode(oacpName1);
overAllContainerpara.appendChild(oacpName2);
var overAllContainerparaClass = ["my-4"];
overAllContainerpara.classList.add(...overAllContainerparaClass);
overAllContainer.appendChild(overAllContainerpara);

document.body.appendChild(overAllContainer);
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

//section code starts here
var section = document.createElement('div');
var sectionDivClass = ["section", "img","img-fluid"];
section.classList.add(...sectionDivClass);
section.setAttribute("style","background-image:url(../Images/joel-barwick-nmHpOPGW8Ew-unsplash.jpg);background-position:center center;background-size:cover;width:100%;height:100vh;overflow-x:hidden;");
document.body.append(section);

var sectionItem1 = document.createElement('div');
var sectionItem1Class = ["caption" ,"d-block", "text-center" ,"lh-lg"];
sectionItem1.classList.add(...sectionItem1Class);
sectionItem1.setAttribute("style","position:absolute;top: 45%;width: 100%;color:white;");
section.appendChild(sectionItem1);

var sectionItem1Div1 = document.createElement('p');
let sectionItem1Div1Name1 = "Welcome to BeerInfo"
var sectionItem1Div1Name2 = document.createTextNode(sectionItem1Div1Name1);
sectionItem1Div1.appendChild(sectionItem1Div1Name2);
var sectionItem1Div1Class = ["display-1", "fw-bolder"];
sectionItem1Div1.classList.add(...sectionItem1Div1Class);
sectionItem1.appendChild(sectionItem1Div1);

var sectionItem1Div2 = document.createElement('p');
let sectionItem1Div2Name1 = "All information at One place"
var sectionItem1Div2Name2 = document.createTextNode(sectionItem1Div2Name1);
sectionItem1Div2.appendChild(sectionItem1Div2Name2);
var sectionItem1Div2Class = ["display-1", "fw-bolder"];
sectionItem1Div2.classList.add(...sectionItem1Div2Class);
sectionItem1.appendChild(sectionItem1Div2);
//section code stops here

// //Footer code starts here
// var footer = document.createElement('div');
// var footerDivClass = ["container"];
// footer.classList.add(...footerDivClass);
// document.body.append(footer);

// var footerItem1 = document.createElement('footer');
// var footerItem1Class = ["d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-3", "my-4", "border-top"];
// footerItem1.classList.add(...footerItem1Class);
// footer.appendChild(footerItem1);

// var footerItem1Div1 = document.createElement('div');
// var footerItem1Div1Class = ["col-md-4", "d-flex", "align-items-center"];
// footerItem1Div1.classList.add(...footerItem1Div1Class);
// footerItem1.appendChild(footerItem1Div1);

// var footerItem1Div1C = document.createElement('a');
// footerItem1Div1C.setAttribute("href","#");
// var footerItem1Div1CClass = ["mb-3", "me-2", "mb-md-0", "text-muted", "text-decoration-none", "lh-1"];
// footerItem1Div1C.classList.add(...footerItem1Div1CClass);
// footerItem1Div1.appendChild(footerItem1Div1C);

// // footerItem1Div1.appendChild(imgTag);

// var footerdiv1Span = document.createElement('span');
// const footerdiv1SpanClass = ["text-muted"];
// footerdiv1Span.classList.add(...footerdiv1SpanClass);
// let footerItem1div1SpanName1 = "© 2021 Company, Inc"
// var footerItem1div1SpanName2 = document.createTextNode(footerItem1div1SpanName1);
// footerItem1Div1C.appendChild(footerdiv1Span);

// var footerItem2 = document.createElement('ul');
// const footerItem2Class = ["nav", "col-md-4", "justify-content-end", "list-unstyled", "d-flex"];
// footerItem2.classList.add(...footerItem2Class);
// footer.appendChild(footerItem2);

// var footerItem2div1 = document.createElement('li');
// const footerItem2div1Class = ["ms-3"];
// footerItem2div1.classList.add(...footerItem2div1Class);
// // footerItem2div1.appendChild(imgTag);
// footerItem2.appendChild(footerItem2div1);

// var footerItem2div2 = document.createElement('li');
// const footerItem2div2Class = ["ms-3"];
// footerItem2div2.classList.add(...footerItem2div2Class);
// // footerItem2div2.appendChild(imgTag);
// footerItem2.appendChild(footerItem2div2);

// var footerItem2div3 = document.createElement('li');
// const footerItem2div3Class = ["ms-3"];
// // footerItem2div3.classList.add(...footerItem2div3Class);
// // footerItem2div3.appendChild(imgTag);
// footerItem2.appendChild(footerItem2div3);
// //Footer code Ends here

// var footer = document.createElement('div');
// overAllContainer.classList.add("container");
// document.body.append(footer);

var footer = document.createElement('div');
var footerDivClass = ["container","m-2"];
footer.classList.add(...footerDivClass);
document.body.append(footer)

var footerdiv = document.createElement('p');
let footerdivName1 = "© 2021 Company, Inc";
var footerdivName2 = document.createTextNode(footerdivName1);
footerdiv.appendChild(footerdivName2);
footerdiv.setAttribute("style","font-weight:bold;");
footer.appendChild(footerdiv);
document.body.append(footer);
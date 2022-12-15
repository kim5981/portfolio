

const header = document.createElement("header")


const headerBackground = document.createElement("div")
headerBackground.getElementById().id = "header-background"

const hamMenu = document.createElement("div")

const hamNav = document.createElement("nav")
hamNav.getElementById().id = "site-nav"

const toggleHamDiv = document.createElement("div")
toggleHamDiv.classList.add("toggle")

const navListWrap = document.createElement("ul")
navListWrap.classList.add("toggle-menu")

const navHomeLi = document.createElement("li")

const home = document.createElement("a")
home.href = "#"
home.textContent = "Home"

const about = document.createElement("a")
about.href = "#"
about.textContent = "About"

const projects = document.createElement("a")
projects.href = "#"
projects.textContent = "Projects"

const contact = document.createElement("a")
contact.href = "#"
contact.textContent = "Contact"

const logoWrap = document.createElement("div")
logoWrap.classList.add("banner")

const logo = document.createElement("img")
logo.src = "./media/"
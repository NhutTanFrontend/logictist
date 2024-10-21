const showServices = document.getElementById("show-services")
const showServices2 = document.getElementById("show-services-2")
const servicesBlock = document.getElementById("services-block")
const servicesBlock2 = document.getElementById("services-block-2")
const showServicesResponsive = document.getElementById("show-services-responsive")
const servicesBlockResponsive = document.getElementById("services-block-responsive")
const showNavResponsive = document.getElementById("show-nav-responsive")
const showNavResponsive2 = document.getElementById("show-nav-responsive-2")
const wrapNavResponsive = document.getElementById("wrap-nav-responsive")
const bgNavResponsive = document.getElementById("bg-nav-responsive")
const closeNavResponsive = document.getElementById("close-nav-responsive")
let isShowNavResponsive = false
let isShowServiceResponsive = false
let isShowService = false
let isShowService2 = false

const checkShowServices = () => {
    if(isShowService){
        servicesBlock.classList.add("block")
        servicesBlock.classList.remove("hidden")
    } else {
        servicesBlock.classList.remove("block")
        servicesBlock.classList.add("hidden")
    }
}
const checkShowServices2 = () => {
    if(isShowService2){
        servicesBlock2.classList.add("block")
        servicesBlock2.classList.remove("hidden")
    } else {
        servicesBlock2.classList.remove("block")
        servicesBlock2.classList.add("hidden")
    }
}

const checkShowServicesRespon = () => {
    if(isShowServiceResponsive){
        servicesBlockResponsive.style.height = `${servicesBlockResponsive.scrollHeight}px`
    } else {
        servicesBlockResponsive.style.height = '0px'
    }
}

const checkShowNavRespon = () => {
    if(isShowNavResponsive){
        wrapNavResponsive.classList.add('translate-x-0')
        wrapNavResponsive.classList.remove('translate-x-80')
        bgNavResponsive.classList.remove('hidden')
        bgNavResponsive.classList.add('block')
    } else {
        wrapNavResponsive.classList.remove('translate-x-0')
        wrapNavResponsive.classList.add('translate-x-80')
        bgNavResponsive.classList.add('hidden')
        bgNavResponsive.classList.remove('block')
    }
}

showServices.addEventListener("mouseenter", () => {
    isShowService = true
    checkShowServices()
})

showServices.addEventListener("mouseleave", () => {
    isShowService = false
    checkShowServices()
})
showServices2.addEventListener("mouseenter", () => {
    isShowService2 = true
    checkShowServices2()
})

showServices2.addEventListener("mouseleave", () => {
    isShowService2 = false
    checkShowServices2()
})

showServicesResponsive.addEventListener('click', () => {
    isShowServiceResponsive = !isShowServiceResponsive
    checkShowServicesRespon()
})

showNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = true
    checkShowNavRespon()
})
showNavResponsive2.addEventListener("click", () => {
    isShowNavResponsive = true
    checkShowNavRespon()
})
closeNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = false
    checkShowNavRespon()
})
bgNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = false
    checkShowNavRespon()
})

//function toggleMode() {

// const body = document.body
 





//body.classList.add('light')



//podemos trocar toda a nossa condição if pela função (toggle)

function toggleMode() {
    
    const html = document.documentElement
    html.classList.toggle("light")


const img = document.querySelector("#avatar img")


    if(html.classList.contains('light')) {

        img.setAttribute('src', './assets/light-profile.png')

    }   else {

        img.setAttribute('src', './assets/dark-profile.png')

    }
 
}

const links = document.querySelectorAll('.link')
const buttons = document.querySelectorAll('button')

const urls = {
    github: "https://github.com/nabinamallik",
    linkedin: "https://www.linkedin.com/in/nabinamallik/",
    instagram: "https://www.instagram.com/nabina_mallik/",
    twitter: "https://twitter.com/nabina_mallik",
    facebook: ''
}

links[0].addEventListener('click',()=>{
    window.open(urls.github)
})
links[1].addEventListener('click',()=>{
    window.open(urls.linkedin)
})
links[2].addEventListener('click',()=>{
    window.open(urls.instagram)
})
links[3].addEventListener('click',()=>{
    window.open(urls.twitter)
})
links[4].addEventListener('click',()=>{
    window.open(urls.facebook)
})

buttons[0].addEventListener('click',()=>{
    window = window.open('mailto:nabinamallik2003@gmail.com', 'emailWindow')
          if (window && window.open && !window.closed)         
              window.close()
})
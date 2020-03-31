const projects = [
    {
        name: 'four-card-feature-section',
        github: 'https://github.com/revengemiroz/FrontEnd-Mentor/tree/master/four-card-feature-section'

    },
    {
        name: 'pricing-component-with-toggle',
        github: 'https://github.com/revengemiroz/FrontEnd-Mentor/tree/master/pricing-component-with-toggle'

    }
]

const containerEl = document.querySelector('.container')


const display = () => {
    projects.forEach((project, index) => {
        const boxEl = document.createElement('li')
        boxEl.classList.add('box')

        const CardHtml = `
         <div class='card'>

            <div class='imageScale'>

            <a href="/${project.name}/index.html">
            <img src='/${project.name}/design/desktop-preview.jpg'></img>            </a>
               
            </div>
            <p class='title'>${index + 1}.  ${formatNames(project.name)}<p>
         
            <div class='socials'>
            <a href='https://www.instagram.com/mirozuzamaki/?hl=en'> 
            <i class='fab fa-instagram fa-3x'></i>
            
            </a>

            <a href=${project.github}> 
            <i class='fab fa-github fa-3x'></i>
            
            </a>
            
            </div>
          </div>`

        boxEl.innerHTML = CardHtml
        containerEl.appendChild(boxEl)
    })
}

const formatNames = (n) => {
    return n.split('-').map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')

}



display()












//output https://epic-sinoussi-268bd1.netlify.com/

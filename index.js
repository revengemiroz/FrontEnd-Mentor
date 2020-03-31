const projects = [
    {
        name: 'four-card-feature-section',
        github: 'https://github.com/revengemiroz/FrontEnd-Mentor/tree/master/four-card-feature-section',
        instagram: ''
    },
    {
        name: 'pricing-component-with-toggle',
        github: 'https://github.com/revengemiroz/FrontEnd-Mentor/tree/master/pricing-component-with-toggle',
        instagram: ''
    }
]

const containerEl = document.querySelector('.container')
let i = 0

const display = (id) => {
    projects.forEach(project => {
        const CardHtml = `
         <div class='card'>
            <a href="/${project.name}/index.html">
            <img src='/${project.name}/design/desktop-preview.jpg'></img>
            <p class='title'>${id + 1}.  ${project.name}<p>
            </a>
            
            <div class='socials'>
            <a href='https://www.instagram.com/mirozuzamaki/?hl=en'> 
            <i class='fab fa-instagram fa-3x'></i>
            </a>
           
            
            </div>
          </div>`

        containerEl.innerHTML = CardHtml
    })
}

display(i)












//output https://epic-sinoussi-268bd1.netlify.com/

const projects = [
    {
        name: 'four-card-feature-section',
        github: '',
        instagram: ''
    }
]

const containerEl = document.querySelector('.container')

const display = () => {
    projects.forEach(project => {
        const CardHtml = `
         <div class='card'>
            <a href="/${project.name}/index.html">
            <img src='/${project.name}/design/desktop-preview.jpg'></img>
            ${project.name}
            </a>
            <div class='socials'>
            <i class='fab fa-instagram'></i>
            
            </div>
          </div>`

        containerEl.innerHTML = CardHtml
    })
}

display()












//output https://epic-sinoussi-268bd1.netlify.com/

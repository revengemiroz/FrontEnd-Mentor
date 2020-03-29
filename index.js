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
          </div>`

        containerEl.innerHTML = CardHtml
    })
}

display()
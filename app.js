// retrieve the portfolio JSON data from an API or file
fetch('/projects.json')
    .then(response => response.json())
    .then(data => {
        const portfolioSection = document.getElementById('portfolio-section');

        // create a div element for each project
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            // create an image element for the project thumbnail
            const projectImg = document.createElement('img');
            projectImg.src = project.image;
            projectImg.alt = project.title;
            projectDiv.appendChild(projectImg);

            // create a h3 element for the project title
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.title;
            projectDiv.appendChild(projectTitle);

            // create a p element for the project description
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            projectDiv.appendChild(projectDescription);

            // create a link element for the project
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.textContent = 'View Project';
            projectDiv.appendChild(projectLink);

            // append the project div to the portfolio section
            portfolioSection.appendChild(projectDiv);
        });
    })
    .catch(error => console.error(error));

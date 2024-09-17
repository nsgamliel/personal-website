const content = {
	'edu': {
		full: 'education',
		generator: false,
		chunk: `
			<p>Northwestern University | Evanston, IL</p>
			<p>Bachelor of Science in <a href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bachelors/#bs-in-cs" class="intro-edu" target="_blank" rel="noopener noreferrer">Computer Science</a>, McCormick School of Engineering<br>Certificate Program for Undergraduates in <a href="https://www.kellogg.northwestern.edu/programs/certificate/academics/managerial-analytics-certificate.aspx" class="intro-edu" target="_blank" rel="noopener noreferrer">Managerial Analytics</a></p>
		`,
	},
	'exp': {
		full: 'experience',
		generator: true,
		data: [
			{
				title: 'Project Coordinator',
				firm: 'Massachusetts Bay Transportation Authority',
				start: 'April 2024',
				end: 'Present',
				tags: ['Project_management', 'Asana', 'Excel']
			},
			{
				title: 'Research Assistant',
				firm: 'District 65 Research Group',
				start: 'March 2021',
				end: 'June 2023',
				tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'GitHub', 'Mapbox_GL', 'Data_visualization']
			},
			{
				title: 'Chief Technology Officer',
				firm: 'Student Holdings',
				start: 'November 2021',
				end: 'February 2023',
				tags: ['React', 'Firebase', 'GitHub', 'Project_management', 'Squarespace', 'Zapier', 'Google_Admin', 'Student_startup']
			},
			{
				title: 'Intern',
				firm: 'Publicis Sapient',
				start: 'June 2022',
				end: 'August 2022',
				tags: ['Spring_Boot', 'Java', 'REST API', 'Microsoft_Azure', 'React', 'Jira', 'Agile_methodology', 'GitHub']
			},
			{
				title: 'Intern',
				firm: 'Robotic Perception',
				start: 'June 2021',
				end: 'August 2021',
				tags: ['Computer_Vision', 'Machine_Learning', 'Jupyter_Notebook', 'Startup']
			},
			{
				title: 'Software Engineer',
				firm: 'Scope',
				start: 'November 2019',
				end: 'September 2020',
				tags: ['Google_Maps_Platform', 'Firebase', 'HTML', 'JavaScript', 'CSS', 'Project_management', 'Student_startup']
			},
		],
		generatorFcn: (data) => {
			var htmlStr = `
				<div style="margin-bottom: 1em;">
					<a class="intro-exp" href="pdfs/GamlielNatanResume_2024.8.pdf" target="_blank">View my full resume</a>
				</div>
			`;
			
			data.forEach((elem) => {
				var container = '<div class="exp-item">';
				container += `
					<p><strong>${elem.title}</strong> @ ${elem.firm}<br>${elem.start} - ${elem.end}</p>
					<p class="exp-tags">
				`;
				elem.tags.forEach((tag) => {
					container += `<span class="intro-exp">!</span>${tag} `;
				});
				container += '</p></div>';
				htmlStr += container;
			});
			return htmlStr;
		}
	},
	'proj': {
		full: 'projects',
		generator: true,
		data: [
			{
				title: 'Personal Website',
				id: 'project-website',
				img: 'personal-website.png',
				link: 'https://natangamliel.com',
				code: 'https://github.com/nsgamliel/personal-website',
				descr: 'Personal website to showcase my education, experience and projects',
				tags: ['HTML', 'JavaScript', 'CSS', 'Firebase', 'Cloudflare']
			},
		],
		generatorFcn: (data) => {
			var htmlStr = `
				<p>View all project code on my <a class="intro-cont" href="https://github.com/nsgamliel" target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
				<div class="proj-list">
			`;
			
			data.forEach((elem) => {
				var container = `
					<div class="project">
						<img class="proj-img" id="${elem.id}" src="images/${elem.img}" alt="A screenshot of ${elem.title}">
						<div class="proj-details">
							<p class="proj-title"><strong>${elem.title}</strong></p>
							<p class="proj-links"><a class="proj-link" href="${elem.link}" target="_blank" rel="noopener noreferrer">[link]</a> <a class="proj-link" href="${elem.code}" target="_blank" rel="noopener noreferrer">[code]</a></p>
							<p class="proj-descr">${elem.descr}</p>
							<p class="proj-tags">
				`;
				elem.tags.forEach((tag) => {
					container += `<span class="intro-exp">!</span>${tag} `;
				});
				container += '</p></div></div></div>';
				htmlStr += container;
			});
			return htmlStr;
		}
	},
	'cont': {
		full: 'contact',
		generator: false,
		chunk: `
			<p>Feel free to reach out over email (<span class="intro-cont">nsgamliel [at] gmail [dot] com</span>) or <a class="intro-cont" href="https://www.linkedin.com/in/natan-gamliel/" target="_blank" rel="noopener noreferrer">connect with me via linkedin</a>.</p>
		`,
	}
};

export { content };
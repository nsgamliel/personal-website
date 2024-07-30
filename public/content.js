const content = {
	'edu': {
		full: 'education',
		generator: false,
		chunk: `
			<p>Northwestern University | Evanston, IL</p>
			<p>Bachelor of Science in <a href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bachelors/#bs-in-cs" class="intro-edu" target="_blank">Computer Science</a>, McCormick School of Engineering<br>Certificate Program for Undergraduates in <a href="https://www.kellogg.northwestern.edu/programs/certificate/academics/managerial-analytics-certificate.aspx" class="intro-edu" target="_blank">Managerial Analytics</a></p>
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
				tags: ['Spring_Boot', 'Java', 'Microsoft_Azure', 'React', 'Jira', 'Agile_methodology', 'GitHub']
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
					<a class="intro-exp" href="pdfs/GamlielNatanResume_2024.7.pdf" target="_blank">View my full resume</a>
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
	'cont': {
		full: 'contact',
		generator: false,
		chunk: `
			<p>Feel free to reach out over email (<span class="intro-cont">nsgamliel [at] gmail [dot] com</span>) or <a class="intro-cont" href="https://www.linkedin.com/in/natan-gamliel/" target="_blank">connect with me via linkedin</a>.</p>
		`,
	}
};

export { content };
const content = {
	'edu': {
		full: 'education',
		generator: false,
		chunk: `
			<h3>Northwestern University | Evanston, IL</h3>
			<p>Bachelor of Science in <a href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bachelors/#bs-in-cs" class="intro-edu" target="_blank" rel="noopener noreferrer">Computer Science</a>, McCormick School of Engineering</p><p>Certificate Program for Undergraduates in <a href="https://www.kellogg.northwestern.edu/programs/certificate/academics/managerial-analytics-certificate.aspx" class="intro-edu" target="_blank" rel="noopener noreferrer">Managerial Analytics</a></p>
		`,
	},
	'exp': {
		full: 'experience',
		generator: true,
		data: [
			{
				title: 'Software Developer, Project Coordinator',
				firm: 'Massachusetts Bay Transportation Authority',
				start: 'April 2024',
				end: 'Present',
				tags: ['Node.js', 'Next.js', 'TypeScript', 'Python', 'Project_management', 'Asana', 'Excel', 'Networking']
			},
			{
				title: 'Research Assistant',
				firm: 'District 65 Research Group',
				start: 'March 2021',
				end: 'June 2023',
				tags: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'Mapbox_GL', 'Data_visualization']
			},
			{
				title: 'Chief Technology Officer',
				firm: 'Student Holdings',
				start: 'November 2021',
				end: 'February 2023',
				tags: ['React', 'Firebase', 'GitHub', 'Project_management', 'Squarespace', 'Zapier', 'Google_Admin', 'Student_startup']
			},
			{
				title: 'Software Engineering Intern',
				firm: 'Publicis Sapient',
				start: 'June 2022',
				end: 'August 2022',
				tags: ['Spring_Boot', 'Java', 'REST API', 'Microsoft_Azure', 'React', 'Jira', 'Agile_methodology', 'GitHub']
			},
			{
				title: 'Software Engineering Intern',
				firm: 'Robotic Perception',
				start: 'June 2021',
				end: 'August 2021',
				tags: ['Computer_Vision', 'Machine_Learning', 'Jupyter_Notebook', 'Startup']
			},
			{
				title: 'Software Developer',
				firm: 'Scope',
				start: 'November 2019',
				end: 'September 2020',
				tags: ['Google_Maps_Platform', 'Firebase', 'HTML', 'JavaScript', 'CSS', 'Project_management', 'Student_startup']
			},
		],
		generatorFcn: (data) => {
			var htmlStr = `
				<div style="margin-bottom: 1em;">
					<a class="intro-exp" href="pdfs/GamlielNatanResume.pdf" target="_blank">View my full resume</a>
				</div>
			`;
			
			data.forEach((elem) => {
				var container = '<div class="exp-item">';
				container += `
					<p><strong>${elem.title}</strong> @ ${elem.firm}<br>${elem.start} - ${elem.end}</p>
					<p class="exp-tags">
				`;
				elem.tags.forEach((tag) => {
					container += `<span class="intro-exp"><strong>!</strong></span>${tag} `;
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
		data: {
			prog: [
				{
					img: "amm.png",
					alt: "Screenshot of March Madness App",
					title: "March Madness App",
					descr: "Full stack app that tracks live score updates from the NCAA March Madness tournament and tracks bracket scores based on custom rules.",
					links: [
						{
							url: "https://www.albaniancontestofchampions.us/",
							text: "[Website]"
						},
						{
							url: "https://github.com/nsgamliel/amm-client",
							text: "[Client Code]"
						},
						{
							url: "https://github.com/nsgamliel/mm-scores",
							text: "[Server Code]"
						}
					],
					tags: ["Next.js", "TypeScript", "Node.js", "REST API", "POSTGRESQL", "Tailwind"]
				},
				{
					img: "chess.png",
					alt: "Screenshot of Chess App",
					title: "Chess",
					descr: "Chess app that enables real-time games of chess over the Internet.",
					links: [
						{
							url: "https://chess.natangamliel.com/",
							text: "[Website]"
						},
						{
							url: "https://github.com/nsgamliel/chess-io-client",
							text: "[Client Code]"
						},
						{
							url: "https://github.com/nsgamliel/chess-io-server",
							text: "[Server Code]"
						}
					],
					tags: ["Websockets", "JavaScript"]
				}
			],
			prev: [
				{
					img: "keyboard-keyboard.png",
					alt: "Screenshot of Keyboard Keyboard Website",
					title: "[Demo] Keyboard-Keyboard",
					descr: "Mini piano keyboard that can be played from a computer keyboard.",
					links: [
						{
							url: "https://keyboard.natangamliel.com/",
							text: "[Website]"
						},
						{
							url: "https://github.com/nsgamliel/keyboard-keyboard",
							text: "[Code]"
						}
					],
					tags: ["JavaScript", "HTML Canvas", "Audio"]
				},
				{
					img: "compiler.png",
					alt: "Northwestern University Computer Science Logo",
					title: "[Coursework] C Compiler",
					descr: 'Compiler that transforms a C-like language to assembly, developed as part of the <a class="proj-link" href="https://users.cs.northwestern.edu/~simonec/CC.html" target="_blank" rel="noopener noreferrer">CS 322: Compiler Construction</a> course at Northwestern University.',
					links: [
						{
							url: "https://github.com/nsgamliel/compiler-construction",
							text: "[Code]"
						}
					],
					tags: ["C++", "Design_Patterns"]
				}
			]
		},
		generatorFcn: (data) => {
			var htmlStr = `
				<p>View all project code on my <a class="intro-cont" href="https://github.com/nsgamliel" target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
				<p>Note: Availability of hosted projects is dependent on server resources which spin down after periods of inactivity.</p>
				<h2>In Progress</h2>
			`;
			
			data.prog.forEach((elem) => {
				var container = `
					<div class="proj-item">
						<div class="proj-img-container">
							<img class="proj-img" src="images/${elem.img}" alt="${elem.alt}">
						</div>
						<div class="proj-spacer"></div>
						<div class="proj-details">
							<h3 class="proj-title">${elem.title}</h3>
							<p class="proj-descr">${elem.descr}</p>
							<p class="proj-links">
				`;

				elem.links.forEach((link) => {
					container += `<a class="proj-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a> `;
				});

				container += '</p><p class="proj-tags">';

				elem.tags.forEach((tag) => {
					container += `<span class="proj-tag">!</span>${tag} `;
				});
				container += '</p></div></div>';
				htmlStr += container;
			});

			htmlStr += '<h2>Previous</h2>';

			data.prev.forEach((elem) => {
				var container = `
					<div class="proj-item">
						<div class="proj-img-container">
							<img class="proj-img" src="images/${elem.img}" alt="${elem.alt}">
						</div>
						<div class="proj-spacer"></div>
						<div class="proj-details">
							<h3 class="proj-title">${elem.title}</h3>
							<p class="proj-descr">${elem.descr}</p>
							<p class="proj-links">
				`;

				elem.links.forEach((link) => {
					container += `<a class="proj-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a> `;
				});

				container += '</p><p class="proj-tags">';

				elem.tags.forEach((tag) => {
					container += `<span class="proj-tag">!</span>${tag} `;
				});
				container += '</p></div></div>';
				htmlStr += container;
			});

			return htmlStr;
		}
	},
	'cont': {
		full: 'contact',
		generator: false,
		chunk: `
			<p>Feel free to reach out over email (<span class="intro-cont">nsgamliel [at] gmail [dot] com</span>) or <a class="intro-cont" href="https://www.linkedin.com/in/natan-gamliel/" target="_blank" rel="noopener noreferrer">connect with me on LinkedIn</a>.</p>
		`,
	}
};

export { content };
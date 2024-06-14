// const today = new Date();
// const heroDate = document.querySelector('.intro').querySelector('.timeline-date');
// heroDate.innerHTML = today.toDateString();

const blink = async () => {
	await new Promise(resolve => setInterval(resolve, 400));

	const intro = document.getElementById('intro-phrase');

	while (true) {//for (let i=0; i<4; i++) {
		const introText = intro.innerHTML;
		if (introText.charAt(introText.length-1) == '_') {
			intro.innerHTML = introText.slice(0,-1);
		} else {
			intro.innerHTML += '_';
		}
		await new Promise(resolve => setInterval(resolve, 500));
	}
};

const typeIntro = async () => {
	const text = `Hi, I'm Natan`;
	
	for (let i=1; i<=text.length; i++) {
		const intro = document.getElementById('intro-phrase');
		intro.innerHTML = `>${text.substring(0,i)}_`;
		if (i == 3) await new Promise(resolve => setInterval(resolve, 300));
		await new Promise(resolve => setInterval(resolve, 100));
	}

	blink();
	// await new Promise(resolve => setInterval(resolve, 200));

	const elem = document.querySelector('.o-chunk');
	elem.classList.add('fade-in');
};

const typeMessageById = async (id, text) => {
	const elems = document.querySelectorAll(id);
	const elem = elems[elems.length-1];

	for (let i=0; i<=text.length; i++) {
		elem.innerHTML = `> ${text.substring(0,i)}_`;
		await new Promise(resolve => setInterval(resolve, 50));
	}
	elem.innerHTML = elem.innerHTML.slice(0,-1);
};

const handleOptMouseEnter = (event) => {
	const text = event.target.innerHTML;
	event.target.innerHTML = `[*]${text.substring(3,text.length)}`;
};

const handleOptMouseLeave = (event) => {
	const elemClasses = event.target.classList;
	if (elemClasses.contains('edu')) {
		event.target.innerHTML = '[ ]&nbsp; education';
	} else if (elemClasses.contains('exp')) {
		event.target.innerHTML = '[ ]&nbsp; experience';
	} else if (elemClasses.contains('cont')) {
		event.target.innerHTML = '[ ]&nbsp; contact';
	}
};

const addIntroOptListeners = () => {
	const currentOptions = document.querySelector('.more-options.current');
	const introOptions = currentOptions.querySelectorAll('.intro-option');

	introOptions.forEach((elem) => {
		elem.addEventListener(
			'mouseenter',
			handleOptMouseEnter
		);
		elem.addEventListener(
			'mouseleave',
			handleOptMouseLeave
		);
	});
};

const addEducation = async () => {
	const feed = document.querySelector('.feed');
	const prompt = document.createElement('p');
	const chunk = document.createElement('div');

	// mute previous options
	const prev = document.querySelector('.more-options.current');
	prev.classList.remove('current');
	const clicked = prev.querySelector('.intro-option.edu');
	clicked.removeEventListener('mouseenter', handleOptMouseEnter);
	clicked.removeEventListener('mouseleave', handleOptMouseLeave);
	const text = clicked.innerHTML;
	clicked.innerHTML = `[*]${text.substring(3,text.length)}`;
	clicked.classList.remove('intro-option');
	clicked.classList.add('option-clicked');
	clicked.removeAttribute('onclick');
	const sibs = prev.querySelectorAll('.intro-option');
	for (const sib of sibs) {
		sib.removeEventListener('mouseenter', handleOptMouseEnter);
		sib.removeEventListener('mouseleave', handleOptMouseLeave);
		sib.classList.remove('intro-option');
		sib.classList.add('clicked-sibling');
		sib.removeAttribute('onclick');
	}

	prompt.classList.add('edu');
	chunk.classList.add('o-chunk');
	chunk.classList.add('fade-in');

	prompt.innerHTML = '>';
	feed.appendChild(prompt);
	const offset = prompt.getBoundingClientRect().top - 68 + window.scrollY;
	await typeMessageById('.edu', ' education');

	chunk.innerHTML = `
		<p>Northwestern University | Evanston, IL</p>
		<p>- Bachelor of Science in <span class="intro-edu">Computer Science</span>, McCormick School of Engineering<br>- Certificate Program for Undergraduates in <span class="intro-edu">Managerial Analytics</span></p>
		
		<div class="more-options current">
			<div class="intro-option edu" onclick="addEducation()">[ ]&nbsp; education</div>
			<div class="intro-option exp" onclick="addExperience()">[ ]&nbsp; experience</div>
			<div class="intro-option cont" onclick="addContact()">[ ]&nbsp; get_in_touch</div>
		</div>
	`;
	feed.appendChild(chunk);
	scrollTo({
		top: offset,
		left: 0,
		behavior: 'smooth'
	});
	addIntroOptListeners();
};

const addExperience = async () => {
	const exps = [
		{
			'role': 'Research Assistant',
			'firm': 'District 65 Research Group',
			'date': 'March 2021 - June 2023',
			'tags': [
				'Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'GitHub', 'Mapbox_GL', 'Data_visualization'
			]
		},
		{
			'role': 'Chief Technical Officer',
			'firm': 'Student Holdings',
			'date': 'November 2021 - February 2023',
			'tags': [
				'React', 'Firebase', 'GitHub', 'Project_management', 'Squarespace', 'Zapier', 'Google_Admin', 'Student_startup'
			]
		},
		{
			'role': 'Intern',
			'firm': 'Publicis Sapient',
			'date': 'June 2022 - August 2022',
			'tags': [
				'Spring_Boot', 'Java', 'Microsoft_Asure', 'React', 'Jira', 'Agile_methodology', 'GitHub'
			]
		},
		{
			'role': 'Intern',
			'firm': 'Robotic Perception',
			'date': 'June 2021 - August 2021',
			'tags': [
				'Computer_Vision', 'Machine_Learning', 'Jupyter_Notebook', 'Startup'
			]
		},
		{
			'role': 'Software Engineer',
			'firm': 'Scope',
			'date': 'November 2019 - September 2020',
			'tags': [
				'Google_Maps_Platform', 'Firebase', 'HTML', 'JavaScript', 'CSS', 'Project_management', 'Student_startup'
			]
		}
	];

	const feed = document.querySelector('.feed');
	const prompt = document.createElement('p');
	const chunk = document.createElement('div');

	// mute previous options
	const prev = document.querySelector('.more-options.current');
	prev.classList.remove('current');
	const clicked = prev.querySelector('.intro-option.exp');
	clicked.removeEventListener('mouseenter', handleOptMouseEnter);
	clicked.removeEventListener('mouseleave', handleOptMouseLeave);
	const text = clicked.innerHTML;
	clicked.innerHTML = `[*]${text.substring(3,text.length)}`;
	clicked.classList.remove('intro-option');
	clicked.classList.add('option-clicked');
	clicked.removeAttribute('onclick');
	const sibs = prev.querySelectorAll('.intro-option');
	for (const sib of sibs) {
		sib.removeEventListener('mouseenter', handleOptMouseEnter);
		sib.removeEventListener('mouseleave', handleOptMouseLeave);
		sib.classList.remove('intro-option');
		sib.classList.add('clicked-sibling');
		sib.removeAttribute('onclick');
	}

	prompt.classList.add('exp');
	chunk.classList.add('o-chunk');
	chunk.classList.add('fade-in');

	prompt.innerHTML = '>';
	feed.appendChild(prompt);
	const offset = prompt.getBoundingClientRect().top - 68 + window.scrollY;
	await typeMessageById('.exp', ' experience');

	chunk.innerHTML = '';
	for (const exp of exps) {
		chunk.innerHTML += `
			<div class="exp-item">
				<p><strong>${exp.role}</strong> @ ${exp.firm}<br>${exp.date}</p>
				<p class="exp-tags">${exp.tags.map((tag) => `<span class="intro-exp">!</span>${tag}`).join(' ')}</p>
			</div>
		`;
	}

	chunk.innerHTML += `
		<div class="more-options current">
			<div class="intro-option edu" onclick="addEducation()">[ ]&nbsp; education</div>
			<div class="intro-option exp" onclick="addExperience()">[ ]&nbsp; experience</div>
			<div class="intro-option cont" onclick="addContact()">[ ]&nbsp; get_in_touch</div>
		</div>
	`;
	feed.appendChild(chunk);
	scrollTo({
		top: offset,
		left: 0,
		behavior: 'smooth'
	});
	addIntroOptListeners();
};

const addContact = async () => {
	const feed = document.querySelector('.feed');
	const prompt = document.createElement('p');
	const chunk = document.createElement('div');

	// mute previous options
	const prev = document.querySelector('.more-options.current');
	prev.classList.remove('current');
	const clicked = prev.querySelector('.intro-option.cont');
	clicked.removeEventListener('mouseenter', handleOptMouseEnter);
	clicked.removeEventListener('mouseleave', handleOptMouseLeave);
	const text = clicked.innerHTML;
	clicked.innerHTML = `[*]${text.substring(3,text.length)}`;
	clicked.classList.remove('intro-option');
	clicked.classList.add('option-clicked');
	clicked.removeAttribute('onclick');
	const sibs = prev.querySelectorAll('.intro-option');
	for (const sib of sibs) {
		sib.removeEventListener('mouseenter', handleOptMouseEnter);
		sib.removeEventListener('mouseleave', handleOptMouseLeave);
		sib.classList.remove('intro-option');
		sib.classList.add('clicked-sibling');
		sib.removeAttribute('onclick');
	}

	prompt.classList.add('cont');
	chunk.classList.add('o-chunk');
	chunk.classList.add('fade-in');

	prompt.innerHTML = '>';
	feed.appendChild(prompt);
	const offset = prompt.getBoundingClientRect().top - 68 + window.scrollY;
	await typeMessageById('.cont', ' get_in_touch');


	chunk.innerHTML = `
		<p>Feel free to reach out over email (<span class="intro-cont">gamlielnatan at gmail dot com</span>) or <a class="intro-cont" href="https://www.linkedin.com/in/natan-gamliel/" target="_blank">connect with me via linkedin</a>.</p>
		<div class="more-options current">
			<div class="intro-option edu" onclick="addEducation()">[ ]&nbsp; education</div>
			<div class="intro-option exp" onclick="addExperience()">[ ]&nbsp; experience</div>
			<div class="intro-option cont" onclick="addContact()">[ ]&nbsp; get_in_touch</div>
		</div>
	`;
	feed.appendChild(chunk);
	scrollTo({
		top: offset,
		left: 0,
		behavior: 'smooth'
	});
	addIntroOptListeners();
};


window.onload = (event) => {
	console.log('page fully loaded.');
	typeIntro();
	addIntroOptListeners();
};

window.onscroll = (event) => {
	const height = document.getElementById('disc').offsetHeight + 
								 document.getElementById('intro-phrase').offsetHeight + 10;
	if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
		document.getElementById('navbar').style.top = '0';
	} else {
		document.getElementById('navbar').style.top = '-51px';
	}
};
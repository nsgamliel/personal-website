// const today = new Date();
// const heroDate = document.querySelector('.intro').querySelector('.timeline-date');
// heroDate.innerHTML = today.toDateString();

import { content } from "./content.js";

const blink = async () => {
	await new Promise(resolve => setInterval(resolve, 400));

	while (true) {//for (let i=0; i<4; i++) {
		const prompt = document.querySelector('.prompt.blink');
		if (!prompt) break;
		const promptText = prompt.innerHTML;
		if (promptText.charAt(promptText.length-1) == '_') {
			prompt.innerHTML = promptText.slice(0,-1);
		} else {
			prompt.innerHTML += '_';
		}
		await new Promise(resolve => setInterval(resolve, 500));
	}
};

const typeIntro = async () => {
	const intro = document.getElementById('intro-phrase');
	const text = `Hi, I'm Natan`;
	
	for (let i=1; i<=text.length; i++) {
		intro.innerHTML = `>${text.substring(0,i)}_`;
		if (i == 3) await new Promise(resolve => setInterval(resolve, 150));
		await new Promise(resolve => setInterval(resolve, 50));
	}

	intro.innerHTML = intro.innerHTML.slice(0,-1);

	// await new Promise(resolve => setInterval(resolve, 200));

	const elems = document.querySelectorAll('.o-chunk');
	elems.forEach(elem => {
		elem.classList.add('fade-in');
	});
	
	blink(true);
};

const typePrompt = async (text) => {
	const prompt = document.querySelector('.prompt');

	for (let i=0; i<=text.length; i++) {
		prompt.innerHTML = `> ${text.substring(0,i)}_`;
		await new Promise(resolve => setInterval(resolve, 50));
	}
	if (prompt.innerHTML.slice(-1) === '_') prompt.innerHTML = prompt.innerHTML.slice(0,-1);
};

const addContent = async (key) => {
	const options = document.querySelector('.more-options');
	const output = document.querySelector('.output');
	const prompt = output.querySelector('.prompt');
	const chunk = output.querySelector('.chunk');

	const selected = options.querySelector(`.intro-option.${key}`);
	selected.parentNode.childNodes.forEach(node => {
		if (node.classList && node.classList.contains('option-clicked')) node.classList.remove('option-clicked');
		const text = node.innerHTML;
		if (text) node.innerHTML = `[ ]${text.substring(3,text.length)}`;
	});
	selected.classList.add('option-clicked');
	const text = selected.innerHTML;
	selected.innerHTML = `[*]${text.substring(3,text.length)}`;

	chunk.innerHTML = '';
	prompt.innerHTML = '>';
	await typePrompt(` ${content[key].full}`);
	prompt.classList.remove('blink');

	// REFACTOR
	if (content[key].generator) {
		chunk.innerHTML = content[key].generatorFcn(content[key].data);
	} else {
		chunk.innerHTML = content[key].chunk;
	}
	
};


window.onload = (event) => {
	console.log('page fully loaded.');
	typeIntro();
	document.querySelector('.intro-option.edu').addEventListener('click', () => {
		addContent('edu');
	});
	document.querySelector('.intro-option.proj').addEventListener('click', () => {
		addContent('proj');
	});
	document.querySelector('.intro-option.exp').addEventListener('click', () => {
		addContent('exp');
	});
	document.querySelector('.intro-option.cont').addEventListener('click', () => {
		addContent('cont');
	});
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
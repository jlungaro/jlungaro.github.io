$( document ).ready(function() {

	const projects = {
	  	'mytrips': {
	    	'title': 'My Trips',
	    	'description': 'A new product focusing on the traveling gift officer, helping them to be more efficient on the road.',
	    	'subtext': 'Role: Lead Product Designer<br>Designed at EverTrue',
	    	'img': ['img/1_mytrips.png', 'img/2_mytrips.png', 'img/3_mytrips.png', 'img/4_mytrips.png', 'img/5_mytrips.png', 'img/6_mytrips.png', 'img/7_mytrips.png', 'img/8_mytrips.png', 'img/9_mytrips.png', 'img/10_mytrips.png', 'img/11_mytrips.png', 'img/12_mytrips.png', 'img/13_mytrips.png', 'img/14_mytrips.png'],
	  	},

	  	'betsyandtobias': {
	    	'title': 'Invite &amp; Save the Date – Betsy &amp; Tobias',
	    	'description': 'I had the honor of designing my best friend&#39;s wedding invites.',
	    	'subtext': 'Role: Best friend',
	    	'img': ['img/1_betsytobias.png', 'img/2_betsytobias.png', 'img/3_betsytobias.png'],
	  	},

	  	'cobrain': {
	    	'title': 'Cobrain',
	    	'description': 'A Bethesda, Md.-based company, uses algorithms to analyze shoppers&#39; buying habits.',
	    	'subtext': 'Role: Lead UI/UX Designer<br>Designed at Intrepid Pursuits',
	    	'img': ['img/cobrain.png'],
	  	},

	  	'stealthapp': {
	    	'title': 'Stealth App',
	    	'description': 'A campaign creation app focusing on your network and multi level marketing with donations. This project went through a design & discovery process.',
	    	'subtext': 'Role: Lead UI/UX Designer<br>Designed at Intrepid Pursuits',
	    	'img': ['img/1_stealthapp.png', 'img/2_stealthapp.png', 'img/3_stealthapp.png', 'img/4_stealthapp.png', 'img/5_stealthapp.png',],
	  	},

	  	'jobcase': {
	    	'title': 'Jobcase',
	    	'description': 'A web, iOS, and Android platform where Jobseekers can go to check out jobs &amp; companies as well as network with other job seekers. This project went through a design and full development process.',
	    	'subtext': 'Role: Lead UI/UX Designer<br>Designed at Intrepid Pursuits',
	    	'img': ['img/jobcase.png'],
	  	},
	}

const currentURL = window.location.search;
const projectName = currentURL.split('=')[1];
const thisProj = projects[projectName];

const templateString = `
<div class="left">
  <h1>${thisProj.title}</h1>
  <p>${thisProj.description}</p><br>
  <h3>${thisProj.subtext}</h3>
</div>
<div class="right">
   ${renderImages(thisProj.img)}
</div>
`

function renderImages(images) {
return `${images.map(imagePath => `<img src="${imagePath}">`).join('')}`
}

$('#project').append(templateString);

});


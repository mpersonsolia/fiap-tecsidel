/********************************* OPEN/CLOSE MENU BUTTON FOR MOBILES *********************************/
function toggleSidebar() {
	var sidebar = document.getElementById('tecsidel-sidebar');
	sidebar.classList.toggle('open');
}

/****************************************** COMPONENTS ******************************************/
function showScreen(screen) {
	const params = new URL(document.location).searchParams;
	params.set('screen', screen);
	document.location.search = params;
}

function fileExists(url) {
	if (url) {
		var req = new XMLHttpRequest();
		req.open('GET', url, false);
		req.send();
		return req.status == 200;
	} else {
		return false;
	}
}

function loadScreen() {
	const params = new URL(document.location).searchParams;
	const actualScreen = params.get('screen') ?? 'dashboard';

	var display = document.getElementById('tecsidel-main');

	let displayHTML = `../pages/${actualScreen}.html`;
	if (fileExists(displayHTML)) {
		display.innerHTML = `<object type="text/html" data="${displayHTML}" width="100%" height="900px" ></object>`;
	} else {
		display.innerHTML =
			'<object type="text/html" data="../pages/dashboard.html" width="100%" height="900px" ></object>';
	}

	const activeLink = document.getElementById(`link-button-${actualScreen}`);
	activeLink.classList.add('active');
}

/****************************************** SIDEBAR ******************************************/
var links = document.querySelectorAll('#link-button');

links.forEach(function (link) {
	link.addEventListener('click', function (event) {
		event.classList.add('active');
	});
});

function toggleSidebar() {
	var sidebar = document.querySelector('.tecsidel-sidebar');
	sidebar.classList.toggle('open');
}

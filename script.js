const list = document.getElementById('hamburger_menu')[0]
const links = document.getElementsByClassName('responsive')[0]

function handleNavbar() {
	links.style.top = '0'
}

function handleClose() {
	links.style.top = '-100%'
}

const accordion = document.querySelectorAll('.contentBx')

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}
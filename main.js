const selectBox = document.querySelector('.select-box')
const selectOption = document.querySelector('.select-option')
const soValue = document.querySelector('#soValue')
const optionSearch = document.querySelector('#optionSearch')
const options = document.querySelector('.options')
const optionsList = document.querySelectorAll('.options li')

function handleAccordion() {
	selectBox.classList.toggle('active')
}

optionsList.forEach(function (optionsListSingle) {
	optionsListSingle.addEventListener('click', function () {
		const text = this.textContent
		const imgSrc = this.querySelector('img').src

		if (soValue) {
			soValue.value = text
		}

		selectOption.innerHTML = `
            <div class="select-option_in_js">
                <img src="${imgSrc}" alt="${text}" style="width: 40px; height: 40px;">
                <p style="color: #fd0;">${text}</p>
                <i onclick="handleAccordion()" class="bi bi-chevron-up upi"></i>
                <i onclick="handleAccordion()" class="bi bi-chevron-down dowin"></i>
            </div>
        `

		selectBox.classList.remove('active')
	})
})

optionSearch.addEventListener('keyup', function () {
	const filter = optionSearch.value.toUpperCase()
	const li = options.getElementsByTagName('li')

	for (let i = 0; i < li.length; i++) {
		const textValue = li[i].textContent || li[i].innerText
		if (textValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = ''
		} else {
			li[i].style.display = 'none'
		}
	}
})

document.addEventListener('click', function (event) {
	const isClickInside = selectBox.contains(event.target)

	if (!isClickInside) {
		selectBox.classList.remove('active')
	}
})


function changeText(element) {
	document.getElementById("menu_text").innerText = element.innerText;
}

//Modal
const openModalBtn = document.getElementById('open-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const modalContainer = document.getElementById('modal-container')

//Show modal
openModalBtn.addEventListener('click', function () {
	modalContainer.classList.add('show-modal')
})

//Hide modal
closeModalBtn.addEventListener('click', function () {
	modalContainer.classList.remove('show-modal')
})

//Hide modal on outside click
window.addEventListener("click", function(e) {
	if(e.target === modalContainer) {
		modalContainer.classList.remove("show-modal")
	}
})


//Fetch json
const entriesUl = document.querySelector("#qual-entries")

fetch("qualifications.json")
.then(res => res.json())
.then(data => {
    console.log(data)
	
	data.forEach(entry => {
        entriesUl.insertAdjacentHTML("beforeend", `<li>${entry.year} ${entry.school}</br> ${entry.subject} </li>`)
		    })
	entriesUl.children[0].classList.add("format")

})

const logos = document.querySelectorAll(".logotypes");

window.addEventListener("scroll", showLogos)

showLogos() 

function showLogos() {

	const triggerBottom = window.innerHeight / 5 * 4

	logos.forEach(logo => {
		const logoTop = logo.getBoundingClientRect().top

		if(logoTop < triggerBottom) {
			logo.classList.add("show")
		} else {
			logo.classList.remove("show")
		}
	})
}

const banner = document.getElementById ("banner")

//creating the left arrow of the slider and making it an event listener
const arrow_left = document.createElement ("img")
arrow_left.classList.add ("arrow","arrow_left")
arrow_left.src = "./assets/images/arrow_left.png"
banner.appendChild(arrow_left)
arrow_left.addEventListener ("click", PrevSlide)

//creating the right arrow of the slider and making it an event listener
const arrow_right = document.createElement ("img")
arrow_right.classList.add ("arrow","arrow_right")
arrow_right.src = "./assets/images/arrow_right.png"
banner.appendChild(arrow_right)
arrow_right.addEventListener ("click", NextSlide)

const dots = document.querySelector(".dots")

const banner_img = document.querySelector(".banner-img")
const banner_text = document.querySelector("#banner p")



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//creating as many bullet points as there are slides, b = bullet point
for (let b = 0; b < slides.length; b++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
  }

const dot = dots.querySelectorAll(".dot")
dot[0].classList.add("dot_selected")


let activeSlide = 0

function updateDots () { //Selects the appropriate bullet point according to the active slide showing
	dot.forEach ((dots, i) => {
		dots.classList.remove ("dot_selected")
		if (i === activeSlide) {
		dots.classList.add("dot_selected")
		}
	})
}


//Shows the previous slide available and loops back to the last slide of the table 'Slides' when needed
function PrevSlide () {
	activeSlide --
	if (activeSlide < 0 ) { activeSlide = slides.length -1} 
	banner_img.src = "./assets/images/slideshow/" + slides[activeSlide].image
	banner_text.innerHTML = slides[activeSlide].tagLine
	updateDots()

}

//Shows the next slide available and loops back to the first slide of the table 'Slides' when needed
function NextSlide() {
	activeSlide ++
	if (activeSlide > slides.length-1 ) { activeSlide = 0}
	banner_img.src = "./assets/images/slideshow/" + slides[activeSlide].image
	banner_text.innerHTML = slides[activeSlide].tagLine
	updateDots()

}
// Small personnal addition to practise JS
// loops through each bulletpoint and adds a click event listener to select the desired slide
dot.forEach(function(dot, i) {
  dot.addEventListener("click", function() {      // when any bullet point is clicked, it works
    activeSlide = i
	banner_img.src = "./assets/images/slideshow/" + slides[activeSlide].image
	banner_text.innerHTML = slides[activeSlide].tagLine
	updateDots()
    
  })
})
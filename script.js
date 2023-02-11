const aside = document.querySelector('aside')
const buttonLogout = document.querySelector(".log-out")
const allButtons = document.querySelectorAll('button')

const buttonMenu = document.querySelector(".logo-on-menu")
const buttonSearch = document.querySelector(".search")
const buttonGrid = document.querySelector(".grid")
const buttonPet = document.querySelector(".pet")
const buttonUser = document.querySelector(".user")
const buttonVet = document.querySelector(".vet")
const buttonSettings = document.querySelector(".settings")

var spanSearch = document.createElement("span")
var spanGrid = document.createElement("span")
var spanPet = document.createElement("span")
var spanUser = document.createElement("span")
var spanVet = document.createElement("span")
var spanSettings = document.createElement("span")


spanSearch.textContent = "Pesquisar"
spanGrid.textContent = "Dashboard"
spanPet.textContent = "Pets"
spanUser.textContent = "Clientes"
spanVet.textContent = "Vets"
spanSettings.textContent = "Ajustes"

// spanSearch.classList.add('textStyle')
let flag = 0;

buttonMenu.addEventListener("click", function(){
  flag++;
  if(flag%2==1)
  {
    aside.style.width = "250px";
    buttonLogout.style.width = "250px"

    for(let button of allButtons)
    {
      button.style.width = "220px";
      button.classList.add('alignButton');
    }

    buttonSearch.appendChild(spanSearch)
    buttonGrid.appendChild(spanGrid)
    buttonPet.appendChild(spanPet)
    buttonUser.appendChild(spanUser)
    buttonVet.appendChild(spanVet)
    buttonSettings.appendChild(spanSettings)

    buttonSearch.classList.add('alignButton');
  }else{
    aside.style.width = "55px";
    buttonLogout.style.width = "55px"

    for(let button of allButtons)
    {
      button.style.width = "50px";
      button.classList.add('alignButtonInitial');
    }
    buttonSearch.removeChild(spanSearch)
    buttonGrid.removeChild(spanGrid)
    buttonPet.removeChild(spanPet)
    buttonUser.removeChild(spanUser)
    buttonVet.removeChild(spanVet)
    buttonSettings.removeChild(spanSettings)

  }
})


$(document).ready(function() {
    $('.transparent').mouseenter(function() {
      $(this).css('background-color', 'var(--light-green)');
    });
    $('.transparent').mouseleave(function() {
      $(this).css('background-color', 'var(--green)');
    });
  });

var selectButton = document.querySelectorAll('.select__button')
var support = document.querySelector('.support')
var exit = document.querySelector('.support__exit')
var bambooButton = document.querySelector('.bamboo__button')
var blackButton = document.querySelector('.black__button')
var enterBamboo = document.querySelector('.enter__bamboo')
var enterBlack = document.querySelector('.enter__black')
var overlay = document.querySelector('.overlay')
var continueButtons = document.querySelectorAll('.option__enter-button')
var thanks = document.querySelector('.thanks')
var thanksButton = document.querySelector('.thanks__button')
var noReward = document.querySelector('.option__header-free')
var buttonMenu = document.querySelector('.button__menu')
var navLinks = document.querySelector('.nav__links')
var buttonExit = document.querySelector('.button__exit')
var navLinksClick = document.querySelector('.nav__links-click')
var navLinkItem = document.querySelectorAll('.nav__link-item')
var input = document.querySelectorAll('.option__enter-input')

input.forEach(element =>  {
    element.addEventListener ('change',
    () => {
        continueButtons.forEach(button => {
            if (input.value === "") {
                button.disabled = true; 
            } else {
                button.disabled = false;
            }
        })
    })
})

selectButton.forEach(button => {
    button.addEventListener (
     'click',
     function () {
         support.style.display  = 'block'
         overlay.style.display = 'block'
         enterBamboo.style.display  = 'none'
         enterBlack.style.display  = 'none'

     }   

    )
})
noReward.addEventListener (
    'click',
    () => {
        support.style.display  = 'none'
        thanks.style.display  = 'block'
    }
)


bambooButton.addEventListener (
    'click', 
    () => enterBamboo.style.display  = 'block'
)

blackButton.addEventListener (
    'click', 
    () => enterBlack.style.display  = 'block'
)

continueButtons.forEach(continueButton => {
    continueButton.addEventListener (
        'click', 
      () => {
            support.style.display  = 'none'
            thanks.style.display  = 'block'
        }
    )
})

exit.addEventListener (
    'click',
    function() {
        support.style.display = 'none'
        overlay.style.display = 'none'
        thanks.style.display  = 'none'
    }
)

thanksButton.addEventListener (
    'click',
    () => {
        overlay.style.display = 'none'
        support.style.display = 'none'
        thanks.style.display  = 'none'
    }
)

buttonMenu.addEventListener (
    'click',
    () => {
        navLinks.classList.add('nav__links-click')
        overlay.style.display = 'block'
        buttonMenu.style.display= 'none'
        buttonExit.style.display = 'block'

    }
 
)

buttonExit.addEventListener (
    'click',
    () => {
        navLinks.classList.remove('nav__links-click')
        overlay.style.display = 'none'
        buttonMenu.style.display = 'block'
        buttonExit.style.display = 'none'
    }
)

navLinkItem.forEach (element => element.addEventListener (
    'click', 
    () => {
        navLinks.classList.remove('nav__links-click')
        overlay.style.display = 'none'
        buttonMenu.style.display = 'block'
        buttonExit.style.display = 'none'
    }
)
   ) 

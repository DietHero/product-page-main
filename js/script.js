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


var selectButton = document.querySelectorAll('.select__button')
var support = document.querySelector('.support')
var exit = document.querySelector('.support__exit')
var bamboo = document.querySelector('.bamboo__button')
var black = document.querySelector('.black__button')
var enterBamboo = document.querySelector('.enter__bamboo')
var enterBlack = document.querySelector('.enter__black')
var overlay = document.querySelector('.overlay')

selectButton.forEach(button => {
    button.addEventListener (
     'click',
     function () {
         support.style.display = 'block'
         overlay.style.display = 'block'
     }   

    )
})

exit.addEventListener (
    'click',
    function() {
        
        support.style.display = 'none'
        overlay.style.display = 'none'
    }
)

black.addEventListener (
    'click',
    function() {
        if ( enterBlack.stye.display = 'none') {
            enterBlack.stye.display = 'block'
        }
    }   
)
bamboo.addEventListener (
    'click', 
    function() {
        enterBamboo.stye.display = 'block'
    }
)
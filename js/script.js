const selectButton = document.querySelectorAll('.select__button')
const selectButtonMain = document.querySelector('.select__button-main')
const support = document.querySelector('.support')
const exit = document.querySelector('.support__exit')
const bambooButton = document.querySelector('.bamboo__button')
const blackButton = document.querySelector('.black__button')
const enterBamboo = document.querySelector('.enter__bamboo')
const enterBlack = document.querySelector('.enter__black')
const overlay = document.querySelector('.overlay')
const continueButtons = document.querySelectorAll('.option__enter-button')
const thanks = document.querySelector('.thanks')
const thanksButton = document.querySelector('.thanks__button')
const noReward = document.querySelector('.option__header-free')
const buttonMenu = document.querySelector('.button__menu')
const navLinks = document.querySelector('.nav__links')
const buttonExit = document.querySelector('.button__exit')
const navLinksClick = document.querySelector('.nav__links-click')
const navLinkItem = document.querySelectorAll('.nav__link-item')
const inputBamboo = document.querySelector('.input__bamboo')
const inputBlack = document.querySelector('.input__black')
const continueBlack = document.querySelector('.continue__black')
const continueBamboo = document.querySelector('.continue__bamboo')
const bookmarkButton = document.querySelector('.hero__bookmark')
const bookmarkIcon = document.querySelector('.hero__bookmark-icon')
const bookmarkText = document.querySelector('.hero__bookmark-text')
const numbersLeft = document.querySelector('.numbers__left')
const backers = document.querySelector('.backers')
const line = document.querySelector('.numbers__line-blue')
const optionBamboo = document.querySelector('.option__bamboo')
const optionBlack = document.querySelector('.option__black')
const iconBlack = document.querySelector('.option__icon-black')
const iconBamboo = document.querySelector('.option__icon-bamboo')
const blackNumberLeft = document.querySelectorAll('.black__number-left')
const bambooNumberLeft = document.querySelectorAll('.bamboo__number-left')
const alertBamboo = document.querySelector('.option__alert-bamboo')
const alertBlack = document.querySelector('.option__alert-black')
var babooNumber = 101
var blackNumber = 64
var number = 89.914
var backersNumber = 5.007
var state = 0
var lineWidth = 60

const reset = function () {
    support.style.display = 'none';
    overlay.style.display = 'none';
    thanks.style.display = 'none';
    enterBamboo.style.display = 'none';
    optionBamboo.style.borderColor = ' rgb(236, 233, 233)';
    iconBamboo.innerHTML = '<i class="far fa-circle"></i>';
    enterBlack.style.display = 'none';
    optionBlack.style.borderColor = 'rgb(236, 233, 233)';
    iconBlack.innerHTML = '<i class="far fa-circle"></i>';
    inputBamboo.value = '';
    inputBlack.value = '';
}

selectButtonMain.addEventListener ('click',
() => {
    support.style.display = 'block';
    support.style.transform = 'translateY(-2rem)'
    overlay.style.display = 'block';
    enterBamboo.style.display = 'none';
    enterBlack.style.display = 'none';
    thanks.style.transform = 'translateY(-2rem)'
})
 


selectButton.forEach(button => {
    button.addEventListener(
        'click',
        function () {
            support.style.display = 'block';
            support.style.transform = 'translateY(30rem)'
            overlay.style.display = 'block';
            enterBamboo.style.display = 'none';
            enterBlack.style.display = 'none';
            thanks.style.transform = 'translateY(35rem)'
        }
    )
})

bambooButton.addEventListener(
    'click',
    () => {
        enterBamboo.style.display = 'block';
        optionBamboo.style.borderColor = ' hsl(176, 50%, 47%)';
        iconBamboo.innerHTML = '<i class="fas fa-dot-circle"></i>';
        enterBlack.style.display = 'none';
        optionBlack.style.borderColor = 'rgb(236, 233, 233)';
        iconBlack.innerHTML = '<i class="far fa-circle"></i>';
        inputBamboo.value = ''
        alertBlack.style.display = 'none';
    }
)

blackButton.addEventListener(
    'click',
    () => {
        enterBlack.style.display = 'block';
        optionBlack.style.borderColor = 'hsl(176, 50%, 47%)';
        iconBlack.innerHTML = '<i class="fas fa-dot-circle"></i>';
        enterBamboo.style.display = 'none';
        optionBamboo.style.borderColor = ' rgb(236, 233, 233)';
        iconBamboo.innerHTML = '<i class="far fa-circle"></i>';
        inputBlack.value = ''
        alertBamboo.style.display = 'none';
    }
)

continueButtons.forEach(continueButton => {
    continueButton.addEventListener(
        'click',
        () => {
            support.style.display = 'none';
            thanks.style.display = 'block';
        }
    )
})

inputBamboo.addEventListener(
    'input',
    (event) => {
        inputValue = event.target.value
        if (inputValue < 25) {
            continueBamboo.disabled = true;
            alertBamboo.style.display = 'block'
            alertBamboo.innerText  = 'input value must be more than 24'
        } else {
            continueBamboo.disabled = false;
            alertBamboo.style.display = 'none'

            var newNumber = number + (Number(inputBamboo.value) * 0.001);
            numbersLeft.innerHTML = '$' + newNumber.toFixed(3);
            number = newNumber;
        }
    }
)
continueBamboo.addEventListener(
    'click',
    () => {
        var newBuckersNumber = backersNumber + 0.001
        backers.innerHTML = newBuckersNumber.toFixed(3)
        backersNumber = newBuckersNumber;

        var newBambooNumber = babooNumber - 1;
        bambooNumberLeft.forEach(number => number.innerHTML = newBambooNumber);
        babooNumber = newBambooNumber;

       
        var newLineWidth = lineWidth + 0.5;
        line.style.width = newLineWidth + '%'
    
        lineWidth = newLineWidth
      
    
    }
)

inputBlack.addEventListener(
    'input',
    (event) => {
        inputValue = event.target.value
        if (inputValue < 75) {
            continueBlack.disabled = true;
            alertBlack.style.display = 'block'
            alertBlack.innerText  = 'input value must be more than 74';
        } else {
            continueBlack.disabled = false;
            alertBlack.style.display = 'none'

            var newNumber = number + (Number(inputBlack.value) * 0.001);
            numbersLeft.innerHTML = '$' + newNumber.toFixed(3);
            number = newNumber
        }
    }
)

continueBlack.addEventListener(
    'click',
    () => {
        var newBuckersNumber = backersNumber + 0.001;
        backers.innerHTML = newBuckersNumber.toFixed(3);
        backersNumber = newBuckersNumber;

        var newBlackNumber = blackNumber - 1
        blackNumberLeft.forEach(number => number.innerHTML = newBlackNumber);
        blackNumber = newBlackNumber;

        var newLineWidth = lineWidth + 1;
        line.style.width = newLineWidth + '%'
    
        lineWidth = newLineWidth
       
    }
)


noReward.addEventListener(
    'click',
    () => {
        support.style.display = 'none';
        thanks.style.display = 'block';
    }
)
buttonExit.addEventListener(
    'click',
    () => {
        navLinks.classList.remove('nav__links-click');
        overlay.style.display = 'none';
        buttonMenu.style.display = 'block';
        buttonExit.style.display = 'none';
    }
)

exit.addEventListener(
    'click',
    reset
)

thanksButton.addEventListener(
    'click',
    reset
)

buttonMenu.addEventListener(
    'click',
    () => {
        navLinks.classList.add('nav__links-click');
        overlay.style.display = 'block';
        buttonMenu.style.display = 'none';
        buttonExit.style.display = 'block';

    }

)

navLinkItem.forEach(element => element.addEventListener(
    'click',
    () => {
        navLinks.classList.remove('nav__links-click');
        overlay.style.display = 'none';
        buttonMenu.style.display = 'block';
        buttonExit.style.display = 'none';
    }
)
)

bookmarkButton.addEventListener(
    'click',
    () => {
        if (state === 0) {
            bookmarkIcon.style.backgroundColor = 'hsl(176, 72%, 28%)';
            bookmarkIcon.style.color = 'white';
            bookmarkText.innerHTML = 'Bookmarked';
            bookmarkButton.style.backgroundColor = 'hsl(175, 39%, 89%)';
            bookmarkButton.style.color = 'hsl(176, 72%, 28%)';
            state = 1;
        } else {
            bookmarkIcon.style.backgroundColor = 'hsl(0, 0%, 48%)';
            bookmarkIcon.style.color = 'black';
            bookmarkText.innerHTML = 'Bookmark';
            bookmarkButton.style.backgroundColor = 'rgb(236, 233, 233)';
            bookmarkButton.style.color = 'black';
            state = 0;
        }


    }
)

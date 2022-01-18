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
var inputBamboo = document.querySelector('.input__bamboo')
var inputBlack = document.querySelector('.input__black')
var continueBlack = document.querySelector('.continue__black')
var continueBamboo = document.querySelector('.continue__bamboo')
var bookmarkButton = document.querySelector('.hero__bookmark')
var bookmarkIcon = document.querySelector('.hero__bookmark-icon')
var bookmarkText = document.querySelector('.hero__bookmark-text')
var numbersLeft = document.querySelector('.numbers__left')
var backers = document.querySelector('.backers')
var line = document.querySelector('.numbers__line-blue')
var optionBamboo = document.querySelector('.option__bamboo')
var optionBlack = document.querySelector('.option__black')
var iconBlack = document.querySelector('.option__icon-black')
var iconBamboo = document.querySelector('.option__icon-bamboo')
var blackNumberLeft = document.querySelectorAll('.black__number-left')
var bambooNumberLeft = document.querySelectorAll('.bamboo__number-left')
var babooNumber = 101
var blackNumber = 64
var number = 89.914
var backersNumber = 5.007
var state = 0

function reset() {
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


inputBamboo.addEventListener(
    'input',
    () => {
        if (inputBamboo.value < 25) {
            continueBamboo.disabled = true;
        } else {
            continueBamboo.disabled = false;

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
    }
)

inputBlack.addEventListener(
    'input',
    () => {
        if (inputBlack.value < 75) {
            continueBlack.disabled = true;
        } else {
            continueBlack.disabled = false;

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
    }
)

selectButton.forEach(button => {
    button.addEventListener(
        'click',
        function () {
            support.style.display = 'block';
            overlay.style.display = 'block';
            enterBamboo.style.display = 'none';
            enterBlack.style.display = 'none';
        }
    )
})
noReward.addEventListener(
    'click',
    () => {
        support.style.display = 'none';
        thanks.style.display = 'block';
    }
)


bambooButton.addEventListener(
    'click',
    () => {
        enterBamboo.style.display = 'block';
        optionBamboo.style.borderColor = ' hsl(176, 50%, 47%)';
        iconBamboo.innerHTML = '<i class="fas fa-dot-circle"></i>';
        enterBlack.style.display = 'none';
        optionBlack.style.borderColor = 'rgb(236, 233, 233)';
        iconBlack.innerHTML = '<i class="far fa-circle"></i>';
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

buttonExit.addEventListener(
    'click',
    () => {
        navLinks.classList.remove('nav__links-click');
        overlay.style.display = 'none';
        buttonMenu.style.display = 'block';
        buttonExit.style.display = 'none';
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

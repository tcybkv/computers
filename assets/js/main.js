//SCROLL HEADER
const changeHeaderColor = () => {
    const header = document.querySelector('.menu');
    if (window.scrollY > 1) {
        header.style.backgroundColor = '#1A1A1A';
        header.style.border = 'none'
    }else if(window.scrollY < 1) {
        header.style.border = '2px solid rgba(8, 108, 249, 0.10)'
        header.style.backgroundColor = 'transparent';
        header.style.transition = 'background-color 0.3s ease-in-out';
    }else {
        header.style.backdropFilter = 'none';
    }
};

window.addEventListener('scroll', changeHeaderColor);

//HISTORY SLIDER

const sliderImage = document.querySelectorAll('.history__image');
const sliderNavigatorTitle = document.querySelectorAll('.history__navigator__title');
const sliderNavigator = document.querySelector('.history__navigator');

let currentTab = 0;

const hideTabContent = () => {
    sliderImage.forEach((item) => {
        item.style.display = 'none'
    });
    sliderNavigatorTitle.forEach((item) => {
        item.classList.remove('history__navigator__title__active')
    });
};

const showTabContent = (index = 0) => {
    sliderImage[index].style.display = 'block';
    sliderNavigatorTitle[index].classList.add('history__navigator__title__active');
};

hideTabContent();
showTabContent();

sliderNavigator.onclick = (event) => {
    if (event.target.classList.contains('history__navigator__title')) {
        sliderNavigatorTitle.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                currentTab = tabIndex;
                showTabContent(currentTab);
            }
        });
    }
};
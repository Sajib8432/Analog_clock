function popupMenu() {
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const menuItem = document.getElementsByTagName('nav')[0];

    menuIcon.addEventListener('click', () => {
        menuItem.classList.toggle('active');
        menuIcon.classList.toggle('burgerAnimation');
    });
}
popupMenu();


setInterval(setClock, 1000);

const hourHand = document.querySelector('[hour_hand]');
const minuteHand = document.querySelector('[minute_hand]');
const secondHand = document.querySelector('[secoend_hand]');

function setClock() {
    const currentDate = new Date;
    const secoendRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secoendRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    serRotation(secondHand, secoendRatio)
    serRotation(minuteHand, minuteRatio)
    serRotation(hourHand, hourRatio)
}

function serRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();








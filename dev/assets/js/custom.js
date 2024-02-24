
const adress = document.querySelector('#adress');
const floor = document.querySelector('#floor');
const flat = document.querySelector('#flat');
const builds = document.querySelectorAll('.build-path-color');
const burger = document.querySelector('.btn-burger');
const navigation = document.querySelector('.header__navigation');

console.log(adress, floor, flat);

builds.forEach(build => {
    build.addEventListener('mouseover', () => {
        const buildAdress = build.getAttribute('data-adress');
        const buildFloor = build.getAttribute('data-floor-quantity');
        const buildFlat = build.getAttribute('data-flat-quantity');

        adress.innerHTML = buildAdress;
        floor.innerHTML = buildFloor;
        flat.innerHTML = buildFlat;
    });
});

const addBooking = (builds) => builds.forEach(build => {
    const buildLink = build.closest('a');
    const flatQuantity = build.getAttribute('data-flat-quantity');
    const flatToNumber = parseInt(flatQuantity);
    flatToNumber ? flatToNumber >= 0 : buildLink.classList.add('bkd');

    buildLink.addEventListener('click', (event) => {
      if (buildLink.classList.contains('bkd')) {
        event.preventDefault()
      }
    })
});

addBooking(builds);

// Burger menu functionality
function Menu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('show');
    console.log('Why did you clicked???');
}

burger.addEventListener('click', Menu);

//Floor JS
const installFloor = () => {
  console.log('installFloor');
}

document.querySelector('.floor-plan') ? installFloor(): null
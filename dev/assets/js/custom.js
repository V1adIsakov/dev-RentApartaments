const adress = document.querySelector('#adress')
const floor = document.querySelector('#floor')
const flat = document.querySelector('#flat')
const builds = document.querySelectorAll('.build-path-color')

console.log(adress, floor, flat);


builds.forEach(build => {
    build.addEventListener('mouseover', () => {
        const buildAdress = build.getAttribute('data-adress')
        const buildFloor = build.getAttribute('data-floor-quantity')
        const buildFlat = build.getAttribute('data-flat-quantity')

        adress.innerHTML = buildAdress;
        floor.innerHTML = buildFloor;
        flat.innerHTML = buildFlat;
    })
})

//!!!!!!!!!!!!!!!!!!!! Burger Menu !!!!!!!!!!!!!!
  const burger = document.querySelector('.btn-burger');
  const navigation = document.querySelector('.header__navigation');
 
  function Menu() {
    burger.classList.toggle('open')
    navigation.classList.toggle('show');
    console.log('Why did you clicked???');
  }


  burger.addEventListener('click', Menu);
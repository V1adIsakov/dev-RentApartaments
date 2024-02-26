const flatArray = [{
        id: 0,
        house: "3",
        floor: "1",
        rooms: "4",
        square: "103.7 м²",
        price: "1200$",
        priceTotal: "130 525$",
        flatNumber: 1,
        status: "booked",
    },
    {
        id: 1,
        house: "3",
        floor: "1",
        rooms: "3",
        square: "88.5 м²",
        price: "887$",
        priceTotal: "88 200$",
        flatNumber: 2,
        status: "action",
    },
    {
        id: 2,
        house: "3",
        floor: "1",
        rooms: "3",
        square: "95.7 м²",
        price: "930$",
        priceTotal: "99 900$",
        flatNumber: 3,
        status: "sold",
    },
    {
        id: 3,
        house: "2",
        floor: "1",
        rooms: "5",
        square: "142 м²",
        price: "1300$",
        priceTotal: "155 000$",
        flatNumber: 4,
        status: "free",
    },
    {
        id: 4,
        house: "2",
        floor: "1",
        rooms: "5",
        square: "145 м²",
        price: "1300$",
        priceTotal: "158 000$",
        flatNumber: 5,
        status: "booked",
    },
    {
        id: 5,
        house: "2",
        floor: "1",
        rooms: "2",
        square: "70 м²",
        price: "700$",
        priceTotal: "77 000$",
        flatNumber: 6,
        status: "action",
    },
    {
        id: 6,
        house: "2",
        floor: "1",
        rooms: "3",
        square: "80 м²",
        price: "850$",
        priceTotal: "83 000$",
        flatNumber: 7,
        status: "sold",
    },
    {
        id: 7,
        house: "2",
        floor: "1",
        rooms: "2",
        square: "70 м²",
        price: "700$",
        priceTotal: "77 000$",
        flatNumber: 8,
        status: "action",
    },
    {
        id: 8,
        house: "3",
        floor: "1",
        rooms: "4",
        square: "103.7 м²",
        price: "1200$",
        priceTotal: "130 525$",
        flatNumber: 9,
        status: "free",
    },
]

window.addEventListener('load', () => {
    const installFloor = () => {
        const flats = document.querySelectorAll('.flat')
        const floorInformation = document.querySelector('.floor-info')

        const removeActiveClass = () => {
            flats.forEach(active => {
                active.classList.remove('active')
            })
        }

        const initialValue = [{
            id: 8,
            house: "1",
            floor: "1",
            rooms: "3",
            square: "55 м²",
            price: "1000$",
            priceTotal: "95 510$",
            flatNumber: 9,
            status: "booked",
        }]

        const render = (array) => {
            const flatInformation = array.map(item => {
                return (`
                    <div class="info-item">
                        <div class="info-item__title">Номер дома :</div>
                        <div>${item.house}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Этаж:</div>
                        <div>${item.floor}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Кол-во комнат:</div>
                        <div>${item.rooms}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Площадь квартиры:</div>
                        <div>${item.square}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Цена за м²:</div>
                        <div>${item.price}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Цена за квартиру:</div>
                        <div>${item.priceTotal}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Номер квартиры:</div>
                        <div>${item.flatNumber}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Статус квартиры:</div>
                        <div>${item.status}</div>
                    </div>
                `)
            }).join('')
            floorInformation.innerHTML = flatInformation
        }

        render(initialValue)




        flats.forEach(flat => {
            if (flat.classList.contains('booking')) {
                flat.querySelector('.status-cell__text-span').innerHTML = "Booked"
            } else if (flat.classList.contains('action')) {
                flat.querySelector('.status-cell__text-span').innerHTML = "Action"
            } else if (flat.classList.contains('sold')) {
                flat.querySelector('.status-cell__text-span').innerHTML = "Sold"
            } else {
                flat.querySelector('.status-cell__text-span').innerHTML = "Free"
            }


            flat.addEventListener('click', () => {
                removeActiveClass()
                flat.classList.add('active')

                let thisFlat = flat.getAttribute('data-number')

                let flatNumber = flatArray.filter(item => item.flatNumber === Number(thisFlat))

                console.log(initialValue, flatNumber)

                render(flatNumber)
            })
        })
    }


    document.querySelector('.floor-plan') ? installFloor() : null
})


//const styleBooked = document.querySelectorAll('.booking .flat-path');
//    styleBooked.forEach(element => {
//        element.style.fill = 'violet';
//    });
//
//    const styleAction = document.querySelectorAll('.action .flat-path');
//    styleAction.forEach(element => {
//        element.style.fill = 'blue';
//    });
//
//    const styleSold = document.querySelectorAll('.sold .flat-path');
//    styleSold.forEach(element => {
//        element.style.fill = 'red';
//    });


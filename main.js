let Num01 = document.getElementById("num_01")
let Num02 = document.getElementById("num_02")
let Num03 = document.getElementById("num_03")
let Num04 = document.getElementById("num_04")
let Num05 = document.getElementById("num_05")
let Num06 = document.getElementById("num_06")

let noty = document.getElementById("noty")
let numFood = document.getElementById("numFood")
let nameFood = document.getElementById("nameFood")

let run = setInterval(() => {
    let randomPic = Math.random()

    let ran = Math.round(randomPic * 100 + 1604) % 6 + 1

    Num01.src = `img/0${ran}.png`
    Num02.src = `img/0${ran}.png`
    Num03.src = `img/0${ran}.png`
    Num04.src = `img/0${ran}.png`
    Num05.src = `img/0${ran}.png`
    Num06.src = `img/0${ran}.png`

}, 50);



const stop = () => {
    clearInterval(run);

    let sum = 0;

    let randomPic1 = Math.random()
    let randomPic2 = Math.random()
    let randomPic3 = Math.random()
    let randomPic4 = Math.random()
    let randomPic5 = Math.random()
    let randomPic6 = Math.random()

    let ran01 = Math.round(randomPic1 * 100 + 1604) % 6 + 1
    let ran02 = Math.round(randomPic2 * 100 + 2708) % 6 + 1
    let ran03 = Math.round(randomPic3 * 100 + 1912) % 6 + 1
    let ran04 = Math.round(randomPic4 * 100 + 6552) % 6 + 1
    let ran05 = Math.round(randomPic5 * 100 + 3271) % 6 + 1
    let ran06 = Math.round(randomPic6 * 100 + 2204) % 6 + 1

    Num01.src = `img/0${ran01}.png`
    Num02.src = `img/0${ran02}.png`
    Num03.src = `img/0${ran03}.png`
    Num04.src = `img/0${ran04}.png`
    Num05.src = `img/0${ran05}.png`
    Num06.src = `img/0${ran06}.png`

    sum = ran01 + ran02 + ran03 + ran04 + ran05 + ran06;

    console.log(ran01, ran02, ran03, ran04, ran05, ran06, sum)

    setTimeout(() => {
        noty.style.display = "block";
        numFood.innerHTML = sum
        nameFood.innerHTML = arrFood[sum - 1]
    }, 200)
}


const toggle = () => {
    noty.style.display = "none";
    run = setInterval(() => {
        let randomPic = Math.random()

        let ran = Math.round(randomPic * 100 + 1604) % 6 + 1

        Num01.src = `img/0${ran}.png`
        Num02.src = `img/0${ran}.png`
        Num03.src = `img/0${ran}.png`
        Num04.src = `img/0${ran}.png`
        Num05.src = `img/0${ran}.png`
        Num06.src = `img/0${ran}.png`

    }, 50);
}

let arrFood = ["M???t m??",
    "C??m nh??",
    "C??m nh??",
    "C??m nh??",
    "C??m nh??",
    "C??m nh??",
    "C??i Ch???o",
    "Anh ????o",
    "B?? Hai",
    "Ch??o v???t",
    "??ng b?? 9",
    "???????ng h???m",
    "??u L???c",
    "L???c An",
    "G?? ?????t",
    "B??nh canh Tr???ng B??ng",
    "L???u m???m",
    "N??m long",
    "B??n ?????u m???m t??m",
    "7 V???ng",
    "G?? B???n ????",
    "Nh???n, ??i d??a !",
    "C??i Ch???o",
    "Anh ????o",
    "B?? Hai",
    "Ch??o v???t",
    "??ng b?? 9",
    "???????ng h???m",
    "G?? ?????t",
    "B??nh canh Tr???ng B??ng",
    "L???u m???m",
    "N??m long",
    "B??n ?????u m???m t??m",
    "7 V???ng",
    "G?? B???n ????",
    "Nh???n, ??i d??a !"
];


const tableFood = document.querySelectorAll("td");

for (let i = 0; tableFood.length <= 36; i++) {
    tableFood[i].innerHTML = i + 1 + ". " + arrFood[i]
}

console.log(tableFood.length)
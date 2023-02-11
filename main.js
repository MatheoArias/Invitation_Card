const eventDate=new Date('Mar 11 2023')

const date = new Date();
const currentHours=date.getHours();
const currentMinutes=date.getMinutes();
const currentSeconds=date.getSeconds();
const deltaMonths=11+(28-date.getDay());


function differenceBetweenDay(dateOne, dateTwo) {
    var dateOnems = dateOne.getTime();
    var dateTwoms = dateTwo.getTime();
    var differencems = dateOnems - dateTwoms;
    return Math.round(differencems / (1000 * 3600 * 24));
}
document.querySelector('#days').innerHTML=differenceBetweenDay(eventDate,date)

function differenceBetweenHour(dateOne, dateTwo) {
    var dateOnems = dateOne.getTime();
    var dateTwoms = dateTwo.getTime();
    var differencems = dateOnems - dateTwoms;
    return Math.round(differencems / (1000 * 3600));
}
const differenceBetweenHours=differenceBetweenHour(eventDate,date)


const deltaHours=24-currentHours
let deltaMinutes=60-currentMinutes
let deltaSeconds=60-currentSeconds

setInterval(function () {
    if(differenceBetweenHours<=0){
        document.querySelector('#Hours').innerHTML=0;
        document.querySelector('#minuts').innerHTML=0;
    }
    else if (deltaSeconds>0){
        deltaSeconds=deltaSeconds-1
        document.querySelector('#seconds').innerHTML=deltaSeconds;
    }
    else{
        deltaSeconds=60
        deltaMinutes=deltaMinutes-1
        document.querySelector('#seconds').innerHTML=deltaSeconds;
        document.querySelector('#minuts').innerHTML=deltaMinutes;
    }
}, 1000);
document.querySelector('#Hours').innerHTML=deltaHours;
document.querySelector('#minuts').innerHTML=deltaMinutes;


const animation=document.querySelectorAll('.animation')
window.addEventListener('scroll',() => {
    let scrollTop = document.documentElement.scrollTop;
    for (let i=0; i<animation.length;i++){
        let sectionHeight=animation[i].offsetTop;
        if(scrollTop+400 > sectionHeight){
            animation[i].style.opacity=1;
        }
    }
})

const contentDatetime=document.querySelector('.content__datetime');
window.addEventListener('scroll',() => {
    let scrollTop = document.documentElement.scrollTop;
    let sectionHeight=contentDatetime.offsetTop;
        if(scrollTop + 400> sectionHeight){
            contentDatetime.style.opacity='1'
            contentDatetime.style.transform='translateX(0px)'
        }
    }
)

const contentLocation=document.querySelector('.content__location');
window.addEventListener('scroll',() => {
    let scrollTop = document.documentElement.scrollTop;
    let sectionHeight=contentLocation.offsetTop;
        if(scrollTop + 400> sectionHeight){
            contentLocation.style.opacity='1'
            contentLocation.style.transform='translateX(0px)'
        }
    }
)



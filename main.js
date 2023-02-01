const eventDate=new Date('Mar 11 2023')
const eventMonths=eventDate.getMonth()+1

const date = new Date()
const currentMonths=date.getMonth()+1
const currentHours=date.getHours()
const currentMinutes=date.getMinutes()
const currentSeconds=date.getSeconds()

const deltaMonths=eventMonths-currentMonths
const deltaDays=(deltaMonths)*28+10


const deltaHours=24-currentHours
let deltaMinutes=60-currentMinutes
let deltaSeconds=60-currentSeconds

document.querySelector('#days').innerHTML=deltaDays
document.querySelector('#Hours').innerHTML=deltaHours
document.querySelector('#minuts').innerHTML=deltaMinutes
setInterval(function () {
    if (deltaSeconds>0){
        deltaSeconds=deltaSeconds-1
        document.querySelector('#seconds').innerHTML=deltaSeconds

    }
    else{
        deltaSeconds=60
        deltaMinutes=deltaMinutes-1
        document.querySelector('#seconds').innerHTML=deltaSeconds
        document.querySelector('#minuts').innerHTML=deltaMinutes
    }
}, 1000);

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





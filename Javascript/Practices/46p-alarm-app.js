let setalarm=document.getElementById('setalarm');
var audio = new Audio('./FM9B3TC-alarm.mp3');
clockfun();
function ringbell(){
audio.play();
}
setalarm.addEventListener('click',(e)=>{
    e.preventDefault();
    let alarm=document.getElementById('alarm');
    let alarmdate=new Date(alarm.value);
    console.log(alarmdate);
    now=new Date;
    console.log(alarmdate-now);
    let timetoalarm=alarmdate-now;
    if(timetoalarm>=0){
        setTimeout(()=>{
            ringbell()

        },timetoalarm);
    }

});

let clock=document.getElementById('clock');
function clockfun(){
    setInterval(() => {
        let now=new Date();
        clock.innerHTML=now;
        console.log(now);
    }, 1000);
}

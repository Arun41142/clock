function myClock(){
    const date = new Date();

    const sys_hours=date.getHours();

    // working on the text message displayed 
    let wish;
    if(sys_hours>=0 && sys_hours<12){
        wish='Good Morning';
    }
    if(sys_hours>=12 && sys_hours<16){
        wish='Good Afternoon';
    }
    else if(sys_hours>=16){
        wish='Good Evening';
    }


    // Working on the am pm 
    let ampm;
    if(sys_hours>=0 && sys_hours<12){
        ampm='AM';
    }else{
        ampm='PM';
    }
    document.getElementById('ampm').innerHTML=ampm;


    // working on the time 
    document.getElementById("hrs").innerHTML=sys_hours;
    document.getElementById('mnt').innerHTML=date.getMinutes();
    document.getElementById('sec').innerHTML=date.getSeconds();
    document.querySelector('.txt-msg').innerHTML=`Hello, ${wish}!`;

    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    document.querySelector('.week-day').innerHTML=days[date.getDay()];

    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.querySelector('.month').innerHTML=months[date.getMonth()];

    let curr_date=date.getDate();
    document.querySelector('.date').innerHTML=curr_date;

    let curr_year=date.getFullYear();
    document.querySelector('.year').innerHTML=curr_year;



}


setInterval(() => {
    myClock();
}, 1000);
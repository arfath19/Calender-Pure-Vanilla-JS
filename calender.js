// ᐯᐱᐳ
let monthCount=new Date().getMonth()+1;

const monthsName=['January','February','March','April','May','June','July','August','September','October','November','December'];


const calender=document.querySelector('.start');
const currDate=new Date().getDate();
console.log(currDate);

function prev(){
    monthCount--;
    const date=new Date(2020,monthCount,0).getDate();

    display(date);
}
function next(){
    monthCount++;
    const date=new Date(2020,monthCount,0).getDate();

    display(date);
}
 

display(new Date(2020,monthCount,0).getDate());
function display(date){ 
    const displayMonth=document.querySelector('.month');
    const currMonth=new Date().getMonth()+1;
    let currDay = (new Date(2020,monthCount-1,01).getDay());
    let lastDay = (6-(new Date(2020,monthCount-1,date).getDay())); //to get end light dates
    let FirstDay = ((new Date(2020,monthCount-1,01).getDay()));//to get the first light dates count
    let dateNew=new Date(2020,monthCount-1,0).getDate();
    let firstDayCalc=dateNew; // to get the first day 
    let minus=FirstDay; // to get minus val for firstDayCAlc add 1 to get previous month
    // console.log("curr month date"+dateNew+" "+ firstDayCalc);
    displayMonth.innerHTML=monthsName[monthCount-1];
    const day=[];
    // for(i=1;i<=FirstDay;i++){ //dont touch
    //     day.push(`<li class="light ${i}">${i}</li>`);
    // }

    for(i=(firstDayCalc-minus)+1;FirstDay>0;i++){
            day.push(`<li class="light ${i}">${i}</li>`);  
            FirstDay--; 
    }
    // console.log(day);
    for(i=1;i<=date;i++){
    if(i==currDate && currMonth==monthCount){
        day.push(`<li class="${i} active" > ${i}</li>`)
    }else{
        day.push(`<li class="${i}">${i}</li>`);

    }
    
    }
    for(i=1;i<=lastDay;i++){
        day.push(`<li class="light ${i}">${i}</li>`);
    }

    calender.innerHTML=day.join("");
}

const fin=document.querySelector('.time');
setInterval(function(){
    const test=new Date();
    fin.innerHTML= test.toLocaleTimeString();
},100);

    

function magic(){
    const element=event.srcElement.nextElementSibling;
    let color=element.style.backgroundColor;
    if(color==""){
        element.style.backgroundColor="#018def";
        element.style.color="#fff";

    }
    else if(color=="rgb(1, 141, 239)"){
        element.style.backgroundColor="";
        element.style.color="black";

        
    }
}



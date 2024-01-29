var day = document.querySelector('#day');
var month1 = document.querySelector('#month');
var year1 = document.querySelector('#year');
var errorday = document.querySelector('.error-day');
var errormonth = document.querySelector('.error-month');
var erroryear = document.querySelector('.error-year');
var outputday = document.querySelector('.output-day');
var outputmonth = document.querySelector('.output-month');
var outputyear = document.querySelector('.output-year');
var btn = document.querySelector('.submit-btn');
var isVAlidateDate = false;
var isVAlidateMonth = false;
var isVAlidateYear = false;
let months = [31,29,31,30,31,30,31,31,30,31,30,31];
let now = Date.now();
        let today = new Date(now);
        let curryear = today.getFullYear();
        let currmonth = today.getMonth() + 1;
        let currday = today.getDate();
// function validate(){
day.addEventListener('input',(e)=>{
    // if(day.value === 0 ){
    //     errorday.textContent="Date should be greater then 0";
    //     isValid = false;
    // }
    // var isVAlidateDate = false;
    if(day.value>31){
        errorday.textContent="Please enter a valid date";
        isVAlidateDate = false;
        return isVAlidateDate;
    }
    else{
        isVAlidateDate = true;
        errorday.textContent="";
    }
    

})
month1.addEventListener('input',(e)=>{
    // if(day.value === 0 ){
    //     errorday.textContent="Date should be greater then 0";
    //     isValid = false;
    // }
    // var isVAlidateMonth = false;
    var noOfDays = months[month1.value-1];
    if(month1.value>12){
        
        errormonth.textContent="Please enter a valid month";
        isVAlidateMonth = false;
        return;
        
    }
    else if(month1.value<=12 && month1.value>0 && day.value>noOfDays){
        
           
        isVAlidateMonth = false;
        errormonth.textContent="Please enter a valid days";
        return;
    }
    // else if(month1.value==2 && noOfDays==29 && year1.value%4!=0){
    //     isVAlidateMonth=false;
    //     errormonth.textContent = "this is not a leap year";
    // }
    else{
        isVAlidateMonth = true;
        errormonth.innerHTML='';
        // alert("your no of days is greater");
    }
})
year1.addEventListener('input',(e)=>{
    // if(day.value === 0 ){
    //     errorday.textContent="Date should be greater then 0";
    //     isValid = false;
    // }
    // var isVAlidateYear = false;
    if((year1.value>=curryear && month1.value>currmonth)||(year1.value>curryear)){
        erroryear.textContent="Please enter a valid year";
        isVAlidateYear = false;
        return;
    }
    else if(month1.value==2 && day.value==29 && year1.value %4!=0){
        isVAlidateYear=false;
        erroryear.innerHTML="this is not a leap year";
        return;
    }
    else{
        isVAlidateYear = true;
        erroryear.textContent="";
    }
})

btn.addEventListener('click',(e)=>{
    if(isVAlidateDate && isVAlidateMonth && isVAlidateYear){
        // alert("success");
        var date = parseInt(day.value);
            var month = parseInt(month1.value);
            var year = parseInt(year1.value);


        
        // console.log(currday);
        // console.log(currmonth);
        // console.log(curryear);
        // debugger;
        // console.log("now your age is : ");
        let calyear = curryear - year;
        let calmonth, caldate;
        // console.log(calyear);
        if (currmonth == month && currmonth == 1 && month == 1) {
            if (currday - date < 0) {
                calyear--;
                calmonth = 11;
                currday += months[month];
                caldate = currday - date;
            }else{
                calmonth = currmonth-month;
                caldate = currday-date;
            }
        }
        else {
            calmonth = currmonth - month;
            // console.log("beforre"+calmonth);
            if (calmonth < 0) {
                calyear--;
                currmonth += 12;
                calmonth = currmonth - month;
            }
            // console.log("after" + calmonth);
            caldate = currday - date;
            // console.log("date"+caldate);
            if (caldate < 0) {
                calmonth--;
                currday += months[month];
                caldate = currday - date;
            }
        }
        outputday.innerHTML = caldate;
        outputmonth.innerHTML = calmonth;
        outputyear.innerHTML = calyear;


    }
    else{
        alert("please enter a valid data");
    }
})
// }
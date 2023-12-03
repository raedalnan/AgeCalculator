//label-error input-error || day-error month-error year-error
let thisYear = new Date().getFullYear()
let thisMonth = new Date().getMonth() +1
let thisDay = new Date().getDate()
const monthArray = [31,28,31,30,31,30,31,31,30,31,30,31]
const btn = document.querySelector(".arrow")
let birthYear , birthMonth , birthDay 
let resYears , resMonths, resDays

let birthYearE = document.querySelector(".iyear")
let birthMonthE = document.querySelector(".imonth")
let birthDayE = document.querySelector(".iday")
let birthDayLabel = document.querySelector(".day")
let birthMonthLabel = document.querySelector(".month")
let birthYearLabel = document.querySelector(".year")
let yearSpan = document.querySelector(".span-years")
let monthSpan = document.querySelector(".span-months")
let daySpan = document.querySelector(".span-days")
let dayErrorLabel = document.querySelector(".day-error")
let monthErrorLabel = document.querySelector(".month-error")
let yearErrorLabel = document.querySelector(".year-error")

 btn.addEventListener("click" , ()=>{
    CalcAge()
 })

 function CalcAge(){
    Reset()
    birthDay = birthDayE.value
    birthMonth = birthMonthE.value
    birthYear = birthYearE.value
    let error = false ;

    if(birthYear === ""){
        birthYearE.classList.add("input-error")
        birthYearLabel.classList.add("label-error")
        yearErrorLabel.innerHTML = "This field is required"
        error = true ;
    }else if(birthYear > thisYear){
        birthYearE.classList.add("input-error")
        birthYearLabel.classList.add("label-error")
        yearErrorLabel.innerHTML = "Must be in the Past"
        error = true ;
    }else if(birthYear < 1900 ){
        birthYearE.classList.add("input-error")
        birthYearLabel.classList.add("label-error")
        yearErrorLabel.innerHTML = "Too Old"
        error = true ;
    }

    if(birthMonth === ""){
        birthMonthE.classList.add("input-error")
        birthMonthLabel.classList.add("label-error")
        monthErrorLabel.innerHTML = "This field is required"
        error = true ;
    }else if(birthMonth > 12 || birthMonth < 1){
        birthMonthE.classList.add("input-error")
        birthMonthLabel.classList.add("label-error")
        monthErrorLabel.innerHTML = "Must be a valid Month"
        error = true ;
    }
    if(birthDay === ""){
        birthDayE.classList.add("input-error")
        birthDayLabel.classList.add("label-error")
        dayErrorLabel.innerHTML = "This field is required"
        error = true ;
    }else if(birthDay < 1 ||birthDay > monthArray[birthMonth - 1] || birthDay > 31){
        birthDayE.classList.add("input-error")
        birthDayLabel.classList.add("label-error")
        dayErrorLabel.innerHTML = "Must be a valid Day"
        error = true ;
    }
    if(error) return

    if( Number(birthDay) > thisDay){
        thisDay += monthArray[thisMonth-1]
        thisMonth -- 
        resDays = thisDay - Number(birthDay)
    }else if( Number(birthDay) <= thisDay)(
        resDays = thisDay - Number(birthDay)
    )
    if(Number(birthMonth) > thisMonth){
        thisMonth += 12
        thisYear --
        resMonths = thisMonth - Number(birthMonth)
    }else{
        resMonths = thisMonth - Number(birthMonth)
    }
    resYears = thisYear - Number(birthYear)
    

    yearSpan.innerHTML = resYears
    monthSpan.innerHTML = resMonths
    daySpan.innerHTML = resDays
 }
function Reset(){
    birthDayE.classList.remove("input-error")
    birthMonthE.classList.remove("input-error")
    birthYearE.classList.remove("input-error")
    dayErrorLabel.innerHTML = ""
    monthErrorLabel.innerHTML = ""
    yearErrorLabel.innerHTML = ""
    birthDayLabel.classList.remove("label-error")
    birthMonthLabel.classList.remove("label-error")
    birthYearLabel.classList.remove("label-error")
    yearSpan.innerHTML = "--"
    monthSpan.innerHTML =  "--"
    daySpan.innerHTML = "--"

}

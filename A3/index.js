/*
    3. 請實做一個function ，該function傳入一正整數參數，請判斷此正整數是否為閏年，若為閏年回傳True，不是閏年回傳False 
    * 不能被4整除的不是閏年; 
    * 能被4整除的是閏年 ; 
    * 能被4和100整除的不是閏年
    * 能被4和100和400整除的是閏年 
*/

function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) return false
        return true
    } else if (year % 4 === 0 && year % 100 === 0) {
        return true
    } else {
        return false
    }
}


const randomYear = Math.floor(Math.random() * (1900 - 2024 + 1) + 1900)
leapYear(randomYear)
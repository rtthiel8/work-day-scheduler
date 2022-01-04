var dateToday = moment().format('MMMM Do YYYY');


document.getElementById("currentDay").innerHTML = dateToday;

const now = moment().format("hhA");
//    console.log(now.format("hhA"));

$(document).ready(function () {
    $('.hour').each(function () {
        var i = $(this).attr('id');
        console.log(i);
    });
    if ('id' > now) {
       $('.hour').addClass('.future') 
    }
    if ('id' < now) {
       $('.hour').addClass('.past')
    }
    if ('id' === now) {
       $('.hour').addClass('.present')
    }
});
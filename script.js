var dateToday = moment().format('MMMM Do YYYY');

document.getElementById("currentDay").innerHTML = dateToday;

const now = moment().format("hh");

$(document).ready(function () {
    $('.hour').each(function () {
        var i = $(this).attr('id');
        console.log(i);

    if (Number(i) > Number(now)) {
       $('#' + i).addClass('future') 
    }
    if (Number(i) < Number(now)) {
       $('#' + i).addClass('past')
    }
    if (Number(i) === Number(now)) {
       $('#' + i).addClass('present')
    }
  });

});
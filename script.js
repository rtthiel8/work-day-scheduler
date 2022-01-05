var dateToday = moment().format('MMMM Do YYYY');

document.getElementById("currentDay").innerHTML = dateToday;
$('button').on('click',handleClick);

const now = moment().format("HH");
    console.log(now);

$(document).ready(function () {
    if (localStorage.hours != undefined) {
        let messages = localStorage.hours.split(',');
        for (let i = 0; i < messages.length; i++) {
            $('textarea').eq(i).val(messages[i])
        }      
    };



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

function handleClick() {
    let storage = [];
    $('textarea').each(i=>storage.push($('textarea').eq(i).val()));
    localStorage.setItem('hours',storage.join(','));
};
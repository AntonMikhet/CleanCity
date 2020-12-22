function priceDivan(next) {
    let h3Divan = document.getElementById('h3_divan');
    let divanPrice = document.getElementById('priceDivan');
    let divanPriceOld = document.getElementById('priceDivanOld');
    let divan2 = document.getElementById("divan2");
    let divan3 = document.getElementById("divan3");
    let divan4 = document.getElementById("divan4");
    let divan5 = document.getElementById("divan5");

    switch (next) {
        case 1:
            if (h3Divan.lang == 2) {
                divan2.classList.add('price-hide');
                divan3.classList.remove('price-hide');
                h3Divan.lang = "3";
                h3Divan.innerHTML = "Трёхместный кожанный диван";
                divanPrice.innerHTML = 'От 47 BYN';
                divanPriceOld.innerHTML = 'От 57 BYN';
               } else if (h3Divan.lang == 3) {
                    divan3.classList.add('price-hide');
                    divan4.classList.remove('price-hide');
                    h3Divan.lang = "4";
                    h3Divan.innerHTML = "Четырёхместный кожанный диван";
                    divanPrice.innerHTML = 'От 53 BYN';
                    divanPriceOld.innerHTML = 'От 63 BYN';

               } else { if (h3Divan.lang == 4) {
                    divan4.classList.add('price-hide');
                    divan5.classList.remove('price-hide');
                    h3Divan.lang = "5";
                    h3Divan.innerHTML = "Пятиместный кожанный диван";
                    divanPrice.innerHTML = 'От 60 BYN';
                    divanPriceOld.innerHTML = 'От 75 BYN';

               } 
               }
            break;
        case 2:
               if (h3Divan.lang == 5) {
                   divan5.classList.add('price-hide');
                   divan4.classList.remove('price-hide');
                   h3Divan.lang = "4";
                   h3Divan.innerHTML = "Четырёхместный кожанный диван";
                   divanPrice.innerHTML = 'От 53 BYN';
                   divanPriceOld.innerHTML = 'От 63 BYN';

               } else if (h3Divan.lang == 4) {
                divan4.classList.add('price-hide');
                divan3.classList.remove('price-hide');
                h3Divan.lang = "3";
                h3Divan.innerHTML = "Трёхместный кожанный диван";
                divanPrice.innerHTML = 'От 47 BYN';
                divanPriceOld.innerHTML = 'От 57 BYN';

               } else if (h3Divan.lang == 3) {
                divan3.classList.add('price-hide');
                divan2.classList.remove('price-hide');
                h3Divan.lang = "2";
                h3Divan.innerHTML = "Двухместный кожанный диван";
                divanPrice.innerHTML = 'От 40 BYN';
                divanPriceOld.innerHTML = 'От 50 BYN';

               }
            break;
        default:
            break;
    }
}



function priceStul() {
    let h3Stul = document.getElementById('h3_stul');
    let StulPrice = document.getElementById('stulPrice');
    let StulPriceOld = document.getElementById('stulPriceOld');
    let Stul1 = document.getElementById("stul1");
    let Stul2 = document.getElementById("stul2");

        if (h3Stul.lang == 1) {
                Stul1.classList.add('price-hide');
                Stul2.classList.remove('price-hide');
                h3Stul.lang = "2";
                h3Stul.innerHTML = "Стул со спинкой";
                StulPrice.innerHTML = 'От 10 BYN';
                StulPriceOld.innerHTML = 'От 15 BYN';
            } else if (h3Stul.lang == 2) {
                    Stul2.classList.add('price-hide');
                    Stul1.classList.remove('price-hide');
                    h3Stul.lang = "1";
                    h3Stul.innerHTML = "Стул без спинки";
                    StulPrice.innerHTML = 'От 7 BYN';
                    StulPriceOld.innerHTML = 'От 11 BYN';

            }
            
}
function ad() {
  
    let myUrl = window.location.href;
    const url = new URL(myUrl);
    const params = new URLSearchParams(url.search);
    let source = params.get("utm_source");
    let ad = params.get("utm_ad");
    document.getElementById("urlSource").value = source;
    document.getElementById("urlSource2").value = source;
    document.getElementById("urlSource3").value = source;
    document.getElementById("urlAd").value = ad;
    document.getElementById("urlAd2").value = ad;
    document.getElementById("urlAd3").value = ad;
}
setTimeout(ad,2000);

var datenow = new Date();
var yeardate = datenow.getFullYear(datenow);
var monthdate = datenow.getMonth(datenow);
var monthdatetimer = datenow.getMonth(datenow) + 1;
var daydate = datenow.getDate(datenow) + 2;

// var date = monthdatetimer + "-" + daydate + "-" + yeardate; 
var date = '12-31-2020';
var countDownDate = new Date(date.replace(/-/g, "/")).getTime();

if (monthdate == 1) {
    monthdate = " Января"
} else if (monthdate == 1) {
    monthdate = " Февраля"
} else if (monthdate == 2) {
    monthdate = " Марта"
} else if (monthdate == 3) {
    monthdate = " Апреля"
} else if (monthdate == 4) {
    monthdate = " Мая"
} else if (monthdate == 5) {
    monthdate = " Июня"
} else if (monthdate == 6) {
    monthdate = " Июля"
} else if (monthdate == 7) {
    monthdate = " Августа"
} else if (monthdate == 8) {
    monthdate = " Сентярбря"
} else if (monthdate == 9) {
    monthdate = " Октября"
} else if (monthdate == 10) {
    monthdate = " Ноября"
} else if (monthdate == 11) {
    monthdate = " Декабря"
} 
// var datetimer = daydate + monthdate;
var datetimer = '31 Декабря';
document.getElementById('date').innerHTML = datetimer;


// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   if (days == 0) {
        var daystext = ' Дней ';
   } else if (days == 1) {
        var daystext = ' День ';
   } else if (days > 1 && days < 5) {
        var daystext = ' Дня ';
   } else if (days > 4) {
        var daystext = ' Дней ';
   }
   if (hours == 0) {
       var hourstext = " Часов"
   } else if (hours == 1) {
        var hourstext = " Час"
   } if (hours > 1 && hours < 5) {
        var hourstext = " Часа"
   } if (hours > 4) {
        var hourstext = " Часов"
   }
   if (/0/.test(minutes) == 1) {
       var minutestext = " Минут"
   } else if (/1/.test(minutes) == 1) {
        var minutestext = " Минута"
   } else if (/2/.test(minutes) == 1) {
        var minutestext = " Минуты"
   } else if (/3/.test(minutes) == 1) {
    var minutestext = " Минуты"
    } else if (/4/.test(minutes) == 1) {
        var minutestext = " Минуты"
    } else if (/5/.test(minutes) == 1) {
        var minutestext = " Минут"
    } else if (/6/.test(minutes) == 1) {
        var minutestext = " Минут"
    } else if (/7/.test(minutes) == 1) {
        var minutestext = " Минут"
    } else if (/8/.test(minutes) == 1) {
        var minutestext = " Минут"
    } else if (/9/.test(minutes) == 1) {
        var minutestext = " Минут"
    } 

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = '<div class="timer">' + days + daystext + '</div>' + '<div class="timer">' + hours + hourstext + '</div>' + '<div class="timer">' +
    + minutes + minutestext + '</div>' + '<div class="timer">' + seconds + " Секунд" + '</div>';
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = '<div class="timer"> Время вышло </div>';
    }
}, 1000);
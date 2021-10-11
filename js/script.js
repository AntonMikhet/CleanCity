window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }
    function mask(event) {
        var matrix = " +375 (__) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
        var input = document.querySelector("#phone");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        var inputBlock = document.querySelector("#phone-block");
        inputBlock.addEventListener("input", mask, false);
        inputBlock.addEventListener("focus", mask, false);
        inputBlock.addEventListener("blur", mask, false);
        var inputDown = document.querySelector("#phone-down");
        inputDown.addEventListener("input", mask, false);
        inputDown.addEventListener("focus", mask, false);
        inputDown.addEventListener("blur", mask, false);
        inputBlock.oninput = function() {
            if (inputBlock.value.length == 20) {
                inputBlock.style.border ="1px solid green";
                } else {
                    inputBlock.style.border ="1px solid red";
                }
              };
               
              inputDown.oninput = function() {
            if (inputDown.value.length == 20) {
                inputDown.style.border ="1px solid green";
                } else {
                    inputDown.style.border ="1px solid red";
                }
              };
    
              input.oninput = function() {
        if (input.value.length == 20) {
            input.style.border ="1px solid green";
            } else {
                input.style.border ="1px solid red";
            }
          };
    
    });




function modalShow(show) {
    let listblock = document.getElementById("list-block");
    let list = document.getElementById("list");
    var body = document.getElementById('body');
    switch (show) {
        case 1:
            list.style.display = "block";
            listblock.style.display = "block";
            list.style.opacity = "1";
            listblock.style.opacity = "1";
            list.style.overflowY = "scroll";
            body.style.overflow = "hidden";

            break;
        case 2:
            list.style.display = "none";
            listblock.style.display = "none";
            list.style.opacity = "0";
            listblock.style.opacity = "0";
            body.style.overflow = "auto";

            break;
        default:
            break;
    }
    window.onclick = function (event) {
        if (event.target == list) {
            modalShow(2);
        };
    };
}

function buttonWhite() {
    komnati.style.color = 'black';
    komnati.style.backgroundColor = 'white';
    koridor.style.color = 'black';
    koridor.style.backgroundColor = 'white';
    kuhnya.style.color = 'black';
    kuhnya.style.backgroundColor = 'white';
    vanna.style.color = 'black';
    vanna.style.backgroundColor = 'white';
}
function textHidden() {
    document.getElementById('cleaning-apartaments__text1').classList.add('cleaning_hidden');
    document.getElementById('cleaning-apartaments__text2').classList.add('cleaning_hidden');
    document.getElementById('cleaning-apartaments__text3').classList.add('cleaning_hidden');
    document.getElementById('cleaning-apartaments__text4').classList.add('cleaning_hidden');

}
function imgChange(img) {
    var komnati = document.getElementById('komnati');
    var koridor = document.getElementById('koridor');
    var kuhnya = document.getElementById('kuhnya');
    var vanna = document.getElementById('vanna');
    var appartamentsImg = document.getElementById('appartamentsImg');
    switch (img) {
        case 1:
            buttonWhite();
            textHidden();
            komnati.style.color = 'white';
            komnati.style.backgroundColor = 'black';
            appartamentsImg.style.backgroundImage = 'url("/img/cash/c6405919b109b01fb9c38825d93a4c4e.png")';
            document.getElementById('cleaning-apartaments__text1').classList.remove('cleaning_hidden');

            break;
        case 2:
            buttonWhite();
            textHidden();
            koridor.style.color = 'white';
            koridor.style.backgroundColor = 'black';
            appartamentsImg.style.backgroundImage = 'url("/img/cash/ccd49a30925cb0e44fbe4f4cc1523b3c.png")';
            document.getElementById('cleaning-apartaments__text2').classList.remove('cleaning_hidden');

            break;
        case 3:
            buttonWhite();
            textHidden();
            kuhnya.style.color = 'white';
            kuhnya.style.backgroundColor = 'black';
            appartamentsImg.style.backgroundImage = 'url("/img/cash/185e6487783fbe6a3784bb2b04979324.png")';
            document.getElementById('cleaning-apartaments__text3').classList.remove('cleaning_hidden');

            break;
        case 4:
            buttonWhite();
            textHidden();
            vanna.style.color = 'white';
            vanna.style.backgroundColor = 'black';
            appartamentsImg.style.backgroundImage = 'url("/img/cash/5568e4f32956f13d0664aeffc7e15e4a.png")';
            document.getElementById('cleaning-apartaments__text4').classList.remove('cleaning_hidden');

            break;
        default:
            break;
    }
}


function questionShow(show) {
    switch (show) {
        case 1:
            hide()
            document.getElementById('question1').classList.toggle("hide-p");
            document.querySelector('.block1').classList.toggle('heightdiv');
            
            break;
        case 2:
            hide()
            document.querySelector('.block2').classList.toggle('heightdiv');
            document.getElementById('question2').classList.toggle("hide-p");
            break;
        case 3:
            document.querySelector('.block3').classList.toggle('heightdiv');
            document.getElementById('question3').classList.toggle("hide-p");
            break;
        case 4:
            document.querySelector('.block4').classList.toggle('heightdiv');
            document.getElementById('question4').classList.toggle("hide-p");
            break;
        case 5:
            document.querySelector('.block5').classList.toggle('heightdiv');
            document.getElementById('question5').classList.toggle("hide-p");

            break;
        case 6:
            document.querySelector('.block6').classList.toggle('heightdiv');
            document.getElementById('question6').classList.toggle("hide-p");

            break;
        case 7:
            document.querySelector('.block7').classList.toggle('heightdiv');
            document.getElementById('question7').classList.toggle("hide-p");
            break;
        case 8:
            document.querySelector('.block8').classList.toggle('heightdiv');
            document.getElementById('question8').classList.toggle("hide-p");
            break;
        case 9:
            document.querySelector('.block9').classList.toggle('heightdiv');
            document.getElementById('question9').classList.toggle("hide-p");
            break;
        default:
            break;
    }
}
function hide() {

    
}

function room(plusMinus) {
    let roomSpan = document.getElementById("roomSpan");
    let valueKomnat = document.getElementById('valueKomnat');
    let roomSpanText = document.getElementById('roomSpanText');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 0) {
            roomSpan.innerHTML = "1";
            roomSpanText.innerHTML = " - комнатная"
            roomSpan.title = "1";
            valueKomnat.value = "1";
           } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
            } 
            }
            }
            }
            }
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1";
            } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "";
                roomSpanText.innerHTML = "Коридор и кухня"
                roomSpan.title = "0";
                valueKomnat.value = "koridor";
            } else {
            }
            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}


function restroom(plusMinus) {
    let roomSpan = document.getElementById("restroomSpan");
    let valueKomnat = document.getElementById('valuerestroom');
    let roomSpanText = document.getElementById('restroomSpanText');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
                roomSpanText.innerHTML = " - санузлов"
            } 
            }
            }
            }
            
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1"; 
                roomSpanText.innerHTML = " - санузел"

            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}


function room2(plusMinus) {
    let roomSpan = document.getElementById("roomSpan2");
    let valueKomnat = document.getElementById('valueKomnat2');
    let roomSpanText = document.getElementById('roomSpanText2');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 0) {
            roomSpan.innerHTML = "1";
            roomSpanText.innerHTML = " - комнатная"
            roomSpan.title = "1";
            valueKomnat.value = "1";
           } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
            } 
            }
            }
            }
            }
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1";
            } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "";
                roomSpanText.innerHTML = "Коридор и кухня"
                roomSpan.title = "0";
                valueKomnat.value = "koridor";
            } else {
            }
            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}


function restroom2(plusMinus) {
    let roomSpan = document.getElementById("restroomSpan2");
    let valueKomnat = document.getElementById('valuerestroom2');
    let roomSpanText = document.getElementById('restroomSpanText2');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
                roomSpanText.innerHTML = " - санузлов"
            } 
            }
            }
            }
            
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1"; 
                roomSpanText.innerHTML = " - санузел"

            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}



function room3(plusMinus) {
    let roomSpan = document.getElementById("roomSpan3");
    let valueKomnat = document.getElementById('valueKomnat3');
    let roomSpanText = document.getElementById('roomSpanText3');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 0) {
            roomSpan.innerHTML = "1";
            roomSpanText.innerHTML = " - комнатная"
            roomSpan.title = "1";
            valueKomnat.value = "1";
           } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
            } 
            }
            }
            }
            }
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1";
            } else { if (roomSpan.title == 1) {
                roomSpan.innerHTML = "";
                roomSpanText.innerHTML = "Коридор и кухня"
                roomSpan.title = "0";
                valueKomnat.value = "koridor";
            } else {
            }
            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}


function restroom3(plusMinus) {
    let roomSpan = document.getElementById("restroomSpan3");
    let valueKomnat = document.getElementById('valuerestroom3');
    let roomSpanText = document.getElementById('restroomSpanText3');
    switch (plusMinus) {
        case 1:
           if (roomSpan.title == 1) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            }  else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) { 
                roomSpan.innerHTML = "5";
                roomSpan.title = "5";
                valueKomnat.value = "5";
                roomSpanText.innerHTML = " - санузлов"
            } 
            }
            }
            }
            
            break;
        case 2:
            if (roomSpan.title == 5) {
                roomSpan.innerHTML = "4";
                roomSpan.title = "4";
                valueKomnat.value = "4";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 4) {
                roomSpan.innerHTML = "3";
                roomSpan.title = "3";
                valueKomnat.value = "3";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 3) {
                roomSpan.innerHTML = "2";
                roomSpan.title = "2";
                valueKomnat.value = "2";
                roomSpanText.innerHTML = " - санузла"

            } else { if (roomSpan.title == 2) {
                roomSpan.innerHTML = "1";
                roomSpan.title = "1";
                valueKomnat.value = "1"; 
                roomSpanText.innerHTML = " - санузел"

            }
            }
            }
            }
            break;
        
        default:
            break;
    }
}




window.onscroll = function headerHidden() {
    let header = document.getElementById('block-form-down');
    let blockButton = document.getElementById("blockButton");
    let footer = document.getElementById('footer');
    let form = document.getElementById('form-down');
    if (window.pageYOffset > 400) {
        header.style.height ="70px";
        blockButton.style.height ="70px";
        form.style.height = '70px';
        } else if (window.pageYOffset < 200 || footer.pageYOffset > 1) {
            header.style.height = "0";
            blockButton.style.height ="0";
            form.style.height = '0px';

        }  
    
        
       
    };
    
    function burger(show) {
        let listBurger = document.getElementById('list-burger');
        switch (show) {
            case 1:
                listBurger.style.height = '100%';
                listBurger.style.overflowY = "scroll";
                body.style.overflow = "hidden";

                break;
            case 2:
                listBurger.style.height = '0';
                body.style.overflow = "auto";
                listBurger.style.overflowY = "auto";

                break;
            default:
                break;
        }
    }
    function listShow(show) {
        let arrowDead = document.getElementById('arrow-dead')
        let arrowUborka = document.getElementById('arrow-uborka');
        let arrowDrycleaning = document.getElementById('arrow-drycleaning');
        let listDead = document.getElementById('list-dead__show')
        let listUborka = document.getElementById('list-uborka__show');
        let listDrycleaning = document.getElementById('list-drycleaning__show');
        switch (show) {
            case 1:
                listUborka.classList.toggle('show');
                arrowUborka.classList.toggle('rotate');
                break;
            case 2:
                listDrycleaning.classList.toggle('show');
                arrowDrycleaning.classList.toggle('rotate');

                break;
            case 3:
                listDead.classList.toggle('show');
                arrowDead.classList.toggle('rotate');

                break;
            default:
                break;
        }
    }

    function cottage(plusMinus) {
        let roomSpan = document.getElementById("roomSpan");
        let valueKomnat = document.getElementById('valueKomnat');
        let roomSpanText = document.getElementById('roomSpanText');
        switch (plusMinus) {
            case 1:
               if (roomSpan.title == 0) {
                roomSpan.innerHTML = "1";
                roomSpanText.innerHTML = " - комнатный"
                roomSpan.title = "1";
                valueKomnat.value = "1";
               } else { if (roomSpan.title == 1) {
                    roomSpan.innerHTML = "2";
                    roomSpan.title = "2";
                    valueKomnat.value = "2";
                }  else { if (roomSpan.title == 2) {
                    roomSpan.innerHTML = "3";
                    roomSpan.title = "3";
                    valueKomnat.value = "3";
                } else { if (roomSpan.title == 3) {
                    roomSpan.innerHTML = "4";
                    roomSpan.title = "4";
                    valueKomnat.value = "4";
                } else { if (roomSpan.title == 4) { 
                    roomSpan.innerHTML = "5";
                    roomSpan.title = "5";
                    valueKomnat.value = "5";
                } else { if (roomSpan.title == 5) { 
                    roomSpan.innerHTML = "6";
                    roomSpan.title = "6";
                    valueKomnat.value = "6";
                } else { if (roomSpan.title == 6) { 
                    roomSpan.innerHTML = "7";
                    roomSpan.title = "7";
                    valueKomnat.value = "7";
                } else { if (roomSpan.title == 7) { 
                    roomSpan.innerHTML = "8";
                    roomSpan.title = "8";
                    valueKomnat.value = "8";
                } else { if (roomSpan.title == 8) { 
                    roomSpan.innerHTML = "9";
                    roomSpan.title = "9";
                    valueKomnat.value = "9";
                } else { if (roomSpan.title == 9) { 
                    roomSpan.innerHTML = "10";
                    roomSpan.title = "10";
                    valueKomnat.value = "10";
                } else { if (roomSpan.title == 10) { 
                    roomSpan.innerHTML = "11";
                    roomSpan.title = "11";
                    valueKomnat.value = "11";
                } else { if (roomSpan.title == 11) { 
                    roomSpan.innerHTML = "12";
                    roomSpan.title = "12";
                    valueKomnat.value = "12";
                } else { if (roomSpan.title == 12) { 
                    roomSpan.innerHTML = "13";
                    roomSpan.title = "13";
                    valueKomnat.value = "13";
                } else { if (roomSpan.title == 13) { 
                    roomSpan.innerHTML = "14";
                    roomSpan.title = "14";
                    valueKomnat.value = "14";
                } else { if (roomSpan.title == 14) { 
                    roomSpan.innerHTML = "15";
                    roomSpan.title = "15";
                    valueKomnat.value = "15";
                } else { if (roomSpan.title == 15) { 
                    roomSpan.innerHTML = "16";
                    roomSpan.title = "16";
                    valueKomnat.value = "16";
                } else { if (roomSpan.title == 16) { 
                    roomSpan.innerHTML = "17";
                    roomSpan.title = "17";
                    valueKomnat.value = "17";
                } else { if (roomSpan.title == 17) { 
                    roomSpan.innerHTML = "18";
                    roomSpan.title = "18";
                    valueKomnat.value = "18";
                } else { if (roomSpan.title == 18) { 
                    roomSpan.innerHTML = "19";
                    roomSpan.title = "19";
                    valueKomnat.value = "19";
                } else { if (roomSpan.title == 19) { 
                    roomSpan.innerHTML = "20";
                    roomSpan.title = "20";
                    valueKomnat.value = "20";
                } 
                }
                }
                }
                }
                }
                } 
                }
                }
                }
                }}}}}}}}}}
                break;
            case 2:
                if (roomSpan.title == 20) {
                    roomSpan.innerHTML = "19";
                    roomSpan.title = "19";
                    valueKomnat.value = "19";
                } else { if (roomSpan.title == 19) {
                    roomSpan.innerHTML = "18";
                    roomSpan.title = "18";
                    valueKomnat.value = "18";
                } else { if (roomSpan.title == 18) {
                    roomSpan.innerHTML = "17";
                    roomSpan.title = "17";
                    valueKomnat.value = "17";
                } else { if (roomSpan.title == 17) {
                    roomSpan.innerHTML = "16";
                    roomSpan.title = "16";
                    valueKomnat.value = "16";
                } else { if (roomSpan.title == 16) {
                    roomSpan.innerHTML = "15";
                    roomSpan.title = "15";
                    valueKomnat.value = "15";
                } else { if (roomSpan.title == 15) {
                    roomSpan.innerHTML = "14";
                    roomSpan.title = "14";
                    valueKomnat.value = "14";
                } else { if (roomSpan.title == 14) {
                    roomSpan.innerHTML = "13";
                    roomSpan.title = "13";
                    valueKomnat.value = "13";
                } else { if (roomSpan.title == 13) {
                    roomSpan.innerHTML = "12";
                    roomSpan.title = "12";
                    valueKomnat.value = "12";
                } else { if (roomSpan.title == 12) {
                    roomSpan.innerHTML = "11";
                    roomSpan.title = "11";
                    valueKomnat.value = "11";
                } else { if (roomSpan.title == 11) {
                    roomSpan.innerHTML = "10";
                    roomSpan.title = "10";
                    valueKomnat.value = "10";
                } else { if (roomSpan.title == 10) {
                    roomSpan.innerHTML = "9";
                    roomSpan.title = "9";
                    valueKomnat.value = "9";
                } else { if (roomSpan.title == 9) {
                    roomSpan.innerHTML = "8";
                    roomSpan.title = "8";
                    valueKomnat.value = "8";
                } else { if (roomSpan.title == 8) {
                    roomSpan.innerHTML = "7";
                    roomSpan.title = "7";
                    valueKomnat.value = "7";
                } else { if (roomSpan.title == 7) {
                    roomSpan.innerHTML = "6";
                    roomSpan.title = "6";
                    valueKomnat.value = "6";
                } else { if (roomSpan.title == 6) {
                    roomSpan.innerHTML = "5";
                    roomSpan.title = "5";
                    valueKomnat.value = "5";
                } else { if (roomSpan.title == 5) {
                    roomSpan.innerHTML = "4";
                    roomSpan.title = "4";
                    valueKomnat.value = "4";
                } else { if (roomSpan.title == 4) {
                    roomSpan.innerHTML = "3";
                    roomSpan.title = "3";
                    valueKomnat.value = "3";
                } else { if (roomSpan.title == 3) {
                    roomSpan.innerHTML = "2";
                    roomSpan.title = "2";
                    valueKomnat.value = "2";
                } else { if (roomSpan.title == 2) {
                    roomSpan.innerHTML = "1";
                    roomSpan.title = "1";
                    valueKomnat.value = "1";
                
                }
                }
                }}}}}}}}}}}}}}}}
                }
                break;
            
            default:
                break;
        }
    }

    // var datenow = new Date();
    // var yeardate = datenow.getFullYear(datenow);
    // var monthdate = datenow.getMonth(datenow);
    // var monthdatetimer = datenow.getMonth(datenow) + 1;
    // var daydate = datenow.getDate(datenow) + 2;
    // var date = monthdatetimer + "-" + daydate + "-" + yeardate; 
    
    // var countDownDate = new Date(date.replace(/-/g, "/")).getTime();


    // if (monthdate == 1) {
    //     monthdate = " Января"
    // } else if (monthdate == 1) {
    //     monthdate = " Февраля"
    // } else if (monthdate == 2) {
    //     monthdate = " Марта"
    // } else if (monthdate == 3) {
    //     monthdate = " Апреля"
    // } else if (monthdate == 4) {
    //     monthdate = " Мая"
    // } else if (monthdate == 5) {
    //     monthdate = " Июня"
    // } else if (monthdate == 6) {
    //     monthdate = " Июля"
    // } else if (monthdate == 7) {
    //     monthdate = " Августа"
    // } else if (monthdate == 8) {
    //     monthdate = " Сентярбря"
    // } else if (monthdate == 9) {
    //     monthdate = " Октября"
    // } else if (monthdate == 10) {
    //     monthdate = " Ноября"
    // } else if (monthdate == 11) {
    //     monthdate = " Декабря"
    // } 
    // // var datetimer = daydate + monthdate;
    // var datetimer = '31 Декабря';
    // document.getElementById('date').innerHTML = datetimer;
    
    
    // // Update the count down every 1 second
    // var x = setInterval(function() {
    
    //     // Get todays date and time
    //     var now = new Date().getTime();
        
    //     // Find the distance between now an the count down date
    //     var distance = countDownDate - now;
        
    //     // Time calculations for days, hours, minutes and seconds
    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //    if (days == 0) {
    //         var daystext = ' Дней ';
    //    } else if (days == 1) {
    //         var daystext = ' День ';
    //    } else if (days > 1 && days < 5) {
    //         var daystext = ' Дня ';
    //    } else if (days > 4) {
    //         var daystext = ' Дней ';
    //    }
    //    if (hours == 0) {
    //        var hourstext = " Часов"
    //    } else if (hours == 1) {
    //         var hourstext = " Час"
    //    } if (hours > 1 && hours < 5) {
    //         var hourstext = " Часа"
    //    } if (hours > 4) {
    //         var hourstext = " Часов"
    //    }
    //    if (/0/.test(minutes) == 1) {
    //        var minutestext = " Минут"
    //    } else if (/1/.test(minutes) == 1) {
    //         var minutestext = " Минута"
    //    } else if (/2/.test(minutes) == 1) {
    //         var minutestext = " Минуты"
    //    } else if (/3/.test(minutes) == 1) {
    //     var minutestext = " Минуты"
    //     } else if (/4/.test(minutes) == 1) {
    //         var minutestext = " Минуты"
    //     } else if (/5/.test(minutes) == 1) {
    //         var minutestext = " Минут"
    //     } else if (/6/.test(minutes) == 1) {
    //         var minutestext = " Минут"
    //     } else if (/7/.test(minutes) == 1) {
    //         var minutestext = " Минут"
    //     } else if (/8/.test(minutes) == 1) {
    //         var minutestext = " Минут"
    //     } else if (/9/.test(minutes) == 1) {
    //         var minutestext = " Минут"
    //     } 
    
    //     // Output the result in an element with id="demo"
    //     document.getElementById("demo").innerHTML = '<div class="timer">' + days + daystext + '</div>' + '<div class="timer">' + hours + hourstext + '</div>' + '<div class="timer">' +
    //     + minutes + minutestext + '</div>' + '<div class="timer">' + seconds + " Секунд" + '</div>';
        
    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("demo").innerHTML = '<div class="timer"> Время вышло </div>';
    //     }
    // }, 1000);

    
var datenow = new Date()
var yeardate = datenow.getFullYear(datenow);
var monthdate = datenow.getMonth(datenow);
var monthdatetimer = datenow.getMonth(datenow);
var daydate = datenow.getDate(datenow);

var daydate = daydate + 2;
var monthdatetimer = monthdatetimer + 1;


var datetimer = monthdatetimer + "-" + daydate + "-" + yeardate; 

if (daydate == 32) {
    var daydate = daydate - 1; 
    var monthdatetimer = monthdatetimer;
    var datetimer = monthdatetimer + "-" + daydate + "-" + yeardate; 
} else if (daydate == 33) {
    var daydate = daydate - 1; 
    var monthdatetimer = monthdatetimer;
    var datetimer = monthdatetimer + "-" + daydate + "-" + yeardate; 
} 

var countDownDate = new Date(datetimer.replace(/-/g, "/")).getTime();

console.log(countDownDate)

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
if (daydate == 31) {
    var daydate = daydate - 1; 
    var date = daydate + monthdate;
document.getElementById('date').innerHTML = date;
} else if (daydate == 33) {
    var daydate = daydate - 1; 
    var date = daydate + monthdate;
    document.getElementById('date').innerHTML = date; 
} else {
    var date = daydate + monthdate;
    document.getElementById('date').innerHTML = date;
};


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
   if (hours == 0 || hours > 5 && hours < 21) {
       var hourstext = " Часов"
   } else if (hours == 1 || hours == 21) {
        var hourstext = " Час"
   } else if (hours > 1 && hours < 5 || hours > 21) {
        var hourstext = " Часа"
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
        document.getElementById("demo").innerHTML = '<div class="timerbox"> Время вышло </div>';
    }
}, 1000);
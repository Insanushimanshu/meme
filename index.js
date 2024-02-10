
var noOfButtons = document.querySelectorAll("button").length;
for(i = 0; i<noOfButtons; i++){


document.querySelectorAll("button")[i].addEventListener("click",function()
{   var key = this.innerHTML;
    switch (key) {
        case "a":
            var arpitb = new Audio("arpitb.weba");
            arpitb.play();
            break;
        case "b":
            var carrym = new Audio("carrym.weba");
            carrym.play();
            break;
        case "c":
            var lordp = new Audio("lordp.weba");
            lordp.play();
            break;
        case "d":
            var special = new Audio("aah.weba");
            special.play();
            break;
        default:
            break;
    }
})
}

//        var arpitb = new Audio("arpitb.weba");
//        arpitb.play();

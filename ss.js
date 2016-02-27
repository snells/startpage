


function outer(x) {
    var c = document.createElement("div");
    c.appendChild(x.cloneNode(true));
    return c.innerHTML;
}
function fn(x) {
    var c = document.getElementById("center");
    var cnt = x.getElementsByClassName("cnt")[0];
    c.innerHTML = outer(cnt);
    var a = c.getElementsByClassName("cnt")[0];
    a.style.visibility = "visible";

    var i = a.getElementsByTagName('a');

    /*
    for(var n = 0; n < i.length; n++) {
	i[n].style.paddingBottom = "30px";
    }
    */
   
}

window.setInterval(function() {
    document.body.style.backgroundSize = "" + window.innerWidth + "px " + window.innerHeight + "px";
}, 100);


window.onload = function() {
    //Identify the button
    var navToggle = document.getElementById("nav-toggle");
    //Identify the nav items
    var navItems = document.getElementById("nav-items");
    //Button is waiting to be clicked
    navToggle.addEventListener("click", function() {

        //Button gets clicked
        //Nav items disappear

        //Button gets clicked again
        //Nav items disappear
        navItems.classList.toggle("mobile-nav-hidden");
    });
    
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("myslides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 5000); // Change image every 5 seconds
    }
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

function move(width_max, id) {
    var id_name = id + "  "
    var elem = document.getElementById(id);
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
        if ($(window).width() > 600) {
            if (width >= width_max) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = id_name + width * 1 + '%';
            }
        }
        else {
            if (width >= width_max) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
}

function ChangeWord(newword, id) {
    $(id).text(newword)
}


window.onload = function () {
    if ($(window).width() > 600) {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }
    else {
        $(".wrap").html(`<p>Hi, My Name is Nathun</p>
        <p>I am Developer</p>
        <p>Welcome to My Profile</p>`)
    }

    if ($(window).width() <= 600) {
        ChangeWord("Swipe Up", ".scrollup")
    }

};

var count = 0;
var countEducation = 0;

window.onscroll = function () {
    var top = document.documentElement.scrollTop
    if (count == 0){
        count = myFunction(count) 
    }
    if (countEducation == 0){
        countEducation = animateEducate(countEducation,top)
    }

};


window.onclick = function( ){
    
}

function loadskill() {
    move(85, ".py")
    move(90, ".html")
    move(70, ".css")
    move(50, ".js")
    move(30, ".cpp")
}


function myFunction(val) {
    console.log(document.documentElement.scrollTop)
    if ($(window).width() > 600) {
        if (document.documentElement.scrollTop > 710) {
            loadskill()
            val += 1
        }
    }
    else {
        if (document.documentElement.scrollTop >= 695 && document.documentElement.scrollTop < 700) {
            loadskill()
             val += 1
        }
    }
    return val
}


function animateEducate(val,top){
    if (top > 1200){
        var x = document.getElementsByClassName("flex-ed")
        var y = document.getElementsByClassName("schoolimg ")
        for (var i = 0; i < x.length; i++) {
            x[i].style.cssText = "transition: opacity 2s; height : 200px; opacity : 1;";
            y[i].style.cssText = "transition: height 2s; height:200px;";
        }
        val += 1;
    }
    return val;
}


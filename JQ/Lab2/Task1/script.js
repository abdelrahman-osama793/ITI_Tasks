$(function () {
    var name, email, phone, complain;
    $('#div1').css({
        'width': '100%',
        'background-color': 'black',
        'display': 'inline-block',
        'padding': '1% 30%',
    })
    $('[name]').css({
        'background-color': 'white',
        'text-align': 'center',
        'border-radius': '5px',
        'width': '50%',
        'height': '40px',
        'margin': '10px'
    })
    $('[type=button]:not(.formBtn)').css({
        'background-color': '#3a14d6',
        'color': 'white',
        'border-radius': '5px',
        'font-size': '30px',
    })
    $('.services button').css({
        'background-color': '#3a14d6',
        'color': 'white',
        'border-radius': '5px',
        'display': 'block',
        'font-size': '30px',
        'margin-left': '30%',
        'margin-bottom': '1%',
        'width': '250px'
    })
    $('.about,.gallery,.complain').css({
        'border-style': 'solid',
        'width': '540px',
        'height': '350px',
        'margin': '75px 443px',
    })
    $('#galleryBtn').on('click', function () {
        $('.gallery').css({
            'display': 'block'
        })
        $('.about').css({
            'display': 'none'
        })
        $('.services').css({
            'display': 'none'
        })
        $('.complain').css({
            'display': 'none'
        })
    })
    $('#servicesBtn').on('click', function () {
        $('.services').css({
            'display': 'block'
        })
        $('.gallery').css({
            'display': 'none'
        })
        $('.about').css({
            'display': 'none'
        })
        $('.complain').css({
            'display': 'none'
        })
    })
    $('#aboutBtn').on('click', function () {
        $('.about').css({
            'display': 'block'
        })
        $('.gallery').css({
            'display': 'none'
        })
        $('.services').css({
            'display': 'none'
        })
        $('.complain').css({
            'display': 'none'
        })
    })

    $('#complainBtn').on('click', function () {
        $('.complain').css({
            'display': 'block'
        })
        $('.gallery').css({
            'display': 'none'
        })
        $('.about').css({
            'display': 'none'
        })
        $('.services').css({
            'display': 'none'
        })
    })

    $('.submitBtn').css({
        'background-color': '#3a14d6',
        'color': 'white',
        'border-radius': '5px',
        'text-align': 'center',
        'font-size': '15px',
    }).on('click', function () {
        name = $('[name=name]').val();
        email = $('[name=email]').val();
        phone = $('[name=phone]').val();
        complain = $('[name=complain]').val();
        $('#showComplain').css({
            'display': 'block'
        }).html(
            `<div style=font-size:20px;text-align:center>
            <p>Your Name is ${name}</p>
            <p>Your Email is ${email}</p>
            <p>Your Phone is ${phone}</p>
            <p>Your Complain is ${complain}</p>
            </div>
            <button class=editBtn style=margin-left:45%>Edit</button>`
        )
        $('#form').css({
            'display': 'none'
        })
        $('.editBtn').css({
            'background-color': '#3a14d6',
            'color': 'white',
            'border-radius': '5px',
            'text-align': 'center',
            'font-size': '15px',
        }).on('click', function () {
            $('#showComplain').css({
                'display': 'none'
            })
            $('#form').css({
                'display': 'block'
            })
            $('[name=name]').val(name);
            $('[name=email]').val(email);
            $('[name=phone]').val(phone);
            $('[name=complain]').val(complain);
        })
    })
})


var slideIndex = 1;
showImages(slideIndex);

function increaseIndex(n) {
    showImages(slideIndex += n);
}

function showImages(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
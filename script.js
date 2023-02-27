$(window).scroll(function () {
    $('.section-anim').each(function () {
        var position = $(this).offset().top;
        var screenTop = $(window).scrollTop() + $(window).height() * 0.8;
        if (position < screenTop) {
            $(this).addClass('animate__animated animate__fadeInUp');
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
});

AOS.init({
    duration: 1000
});

const bibliotechnoLinks = document.querySelectorAll(".bibliotechno-link");

bibliotechnoLinks.forEach(link => {
    link.addEventListener("click", () => {
        const info = link.nextElementSibling;
        info.style.display = info.style.display === "none" ? "block" : "none";
    });
});

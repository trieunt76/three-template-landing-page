/* ------------------------------------------------------ */
/*                       Set Layout                       */
/* ------------------------------------------------------ */
const setWidthLayout = (layoutLeft, layoutRight) => {
    const widthLeft = $('.container').width() / 2;
    const widthRight =
        $('.container').innerWidth() / 2 + $('.container').offset().left;

    $(layoutLeft).css('width', widthLeft);
    $(layoutRight).css('width', widthRight);
};

/* ------------------------------------------------------ */
/*                     Feature Slider                     */
/* ------------------------------------------------------ */
const featureSlider = () => {
    let sliderImage = $('.feature .feature__img');

    sliderImage.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        on: {
            change: function (index) {
                activeArticleSlide(index);
            },
        },
    });
};

const activeArticleSlide = (index) => {
    $('.feature__content-text')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
};

$(document).ready(function () {
    setWidthLayout('.feature__content', '.feature__img');
    setWidthLayout('.about__content', '.about__img');
    setWidthLayout('.address__content', '.address__map');
    $(window).resize(function () {
        setWidthLayout('.feature__content', '.feature__img');
        setWidthLayout('.about__content', '.about__img');
        setWidthLayout('.address__content', '.address__map');
    });

    featureSlider();
});

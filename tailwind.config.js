tailwind.config = {
  theme: {
    extend: {
      colors: {
        'navBackground': '#1B1B1B',
        'paraBlack': '#9C9C9C',
        'headingBlack': '#080808',
        'greenFull': '#3F8E00',
        'greenLight': '#62BA1B',
      },
      fontFamily: {
        'ibmPlex': ['IBM Plex Mono'],
        'raleway': ['Raleway'],
      },
    }
  }
}

$('.responsive').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  nav: true,
  arrows: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
});
$(document).ready(function () {
    let openingAnimWindow = document.querySelector('#lottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'data.json'
  };
  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);
})
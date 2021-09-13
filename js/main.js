var onfoot = 3.6;
var onbicycle = 20.1;
var oncar = 70;
var onplane = 800;

var distance = document.getElementById('js-distance');
var calculateBtn = document.getElementById('js-calculate');
var footer = document.getElementById('js-footer');
var cyclist = document.getElementById('js-cyclist');
var driver = document.getElementById('js-driver');
var pilot = document.getElementById('js-pilot');


calculateBtn.addEventListener('click', function (e) {
    console.log(distance.value)
    footer.textContent = Math.round((Number(distance.value / onfoot) * 60)) + ' min';
    cyclist.textContent = Math.round((Number(distance.value / onbicycle) * 60)) + ' min';
    driver.textContent = Math.round((Number(distance.value / oncar) * 60)) + ' min';
    pilot.textContent = Math.round((Number(distance.value / onplane) * 60)) + ' min';
})




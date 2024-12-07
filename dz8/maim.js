let days = document.getElementById('days');
let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');



setInterval(() => {
    let finishYear = new Date(2025, 0, 0);
    let nowYear = new Date();
    
    
    let dif = finishYear.getTime() - nowYear.getTime();
    
    
    days.textContent = (dif / 1000 / 60 / 60 / 24).toFixed(0).padStart(2, '0');
    hours.textContent = ((dif / 1000 / 60 / 60) % 24).toFixed(0).padStart(2, '0');
    min.textContent = ((dif / 1000 / 60) % 60).toFixed(0).padStart(2, '0');
    sec.textContent = ((dif / 1000) % 60).toFixed(0).padStart(2, '0');
}, 100)
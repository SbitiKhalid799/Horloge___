function Time() {
    var D = new Date();
    var fS = document.getElementById('flech_seconds');
    var fS = document.getElementById('flech_seconds');
    var fM = document.getElementById('flech_minute');
    var fH = document.getElementById('flech_houre');
    fS.style.transform = 'rotate(' + (D.getHours() * 30) + 'deg)';
    fH.style.transform = 'rotate(' + (D.getSeconds() * 6) + 'deg)';
    fM.style.transform = 'rotate(' + (D.getMinutes() * 6) + 'deg)';
}
setInterval('Time()', 1)
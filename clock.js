let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30; // Hour hand
    let mm = day.getMinutes() * 6; // Minute hand
    let ss = day.getSeconds() * 6; // Second hand

    // Adjust hour hand based on minute
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;

    // Rotate the hands
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Update digital time
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minutes");
    let second = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    if (h > 12) {
        h -= 12;
    }
    if (h === 0) {
        h = 12; // Midnight case
    }

    // Format numbers with leading zeroes
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Set time to HTML
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;

}, 1000);

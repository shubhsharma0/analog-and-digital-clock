let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
setInterval(() =>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg )`;
mn.style.transform = `rotateZ(${mm}deg )`;
sc.style.transform = `rotateZ(${ss}deg )`;

//digital
let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let anpm = document.getElementById('anpm');

let h = new Date().getHours();
let m = new Date(). getMinutes();
let s = new Date(). getSeconds();


let an = h >=12 ? "PM" : "AM";
// convert 24hr clock to 12 clock
if(h > 12)
{
    h= h -12;
}

// add zero before  single digit number
h = (h <10) ? "0" + h : h
h = (m <10) ? "0" + h : h
h = (s <10) ? "0" + h : h

hours.innerHTML = h;

minutes.innerHTML = m;
seconds.innerHTML = s;
anpm.innerHTML = an;

})



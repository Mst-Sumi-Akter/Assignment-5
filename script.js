
// heard count section

let heartCount = 0;
const heartCountEl = document.getElementById('heartCount');
document.querySelectorAll('.heartBtn').forEach(btn =>{
    btn.addEventListener('click',() =>{
        heartCount++;
        heartCountEl.textContent = heartCount
    });
});


let coins = 100;
const coinCountEl = document.getElementById('coinCount');
const callHistoryEl = document.getElementById('callHistory');
const clearHistoryBtn = document.getElementById('clearHistory');

// Call buttons
document.querySelectorAll('.callBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const serviceName = card.querySelector('.serviceName').textContent;
    const serviceNumber = card.querySelector('.serviceNumber').textContent;

    if (coins >= 20) {
      coins -= 20;
      coinCountEl.textContent = coins;
      alert('Calling ' + serviceName + ' at ' + serviceNumber);

      const time = new Date().toLocaleTimeString();
      const li = document.createElement('li');
  li.innerHTML = `${serviceName} &nbsp; &nbsp;  ${time} <br> ${serviceNumber}`;


      callHistoryEl.appendChild(li);
    } else {
      alert("Not enough coins!");
    }
  });
});

// Clear call history
clearHistoryBtn.addEventListener('click', () => {
  callHistoryEl.innerHTML = "";
});

// Copy buttons
document.querySelectorAll('.copyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const number = card.querySelector('.serviceNumber').textContent;
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
    

  });
});
let copyCount = 0;
const copyCountEl = document.getElementById('copyCount');
document.querySelectorAll('.copyBtn').forEach(btn =>{
    btn.addEventListener('click',() =>{
        copyCount++;
        copyCountEl.textContent = copyCount
    });
});

let heartCount = 0;
const heartCountEl = document.getElementById('heartCount');
document.querySelectorAll('.heartBtn').forEach(btn =>{
    btn.addEventListener('click',() =>{
        heartCount++;
        heartCountEl.textContent = heartCount
    });
});

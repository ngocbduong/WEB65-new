const changeclickbtn = document.getElementById('changetext');

function changeclick() {
    const h1 = document.getElementById('text');
    h1.innerHTML = 'I wanna fck you in red color';
    h1.style.color = 'red';
}

changeclickbtn.onclick = changeclick;
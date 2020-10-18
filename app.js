let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');





btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = '#40B869';
        } else {
            value.style.color = 'black';
        }
    });
});

if (count < 0) {
    value.style.color = 'red';
} else if (count > 0) {
    value.style.color = 'lightgreen';
} else {
    value.style.color = 'black';
}



// B U T T O N

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
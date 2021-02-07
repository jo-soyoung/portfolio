// Skills Bar Animation Control
const skillBars = document.querySelectorAll('.skill-title.ninety')
const skillBar = document.querySelector('.skill-title.sixty')

const windowHeight = window.innerHeight;

function addAnimate(s) {
    s.classList.add('animate');
}

window.addEventListener('scroll', () => {
    if(windowHeight > 550 && windowHeight <= 600) {
        if(window.scrollY > 1000) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 600 && windowHeight <= 650){
        if(window.scrollY > 850) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 650 && windowHeight <= 730) {
        if(window.scrollY > 800) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 730 && windowHeight <= 760) {
        if(window.scrollY > 700) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 760 && windowHeight <= 900) {
        if(window.scrollY > 600) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 900 && windowHeight <= 1050) {
        if(window.scrollY > 400) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 1050 && windowHeight <= 1200) {
        if(window.scrollY > 330) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    } else if (windowHeight > 1200 && windowHeight <= 1400) {
        if(window.scrollY > 110) {
            for (let s of skillBars) {
                addAnimate(s);
            }
            addAnimate(skillBar);
        }
    }
})
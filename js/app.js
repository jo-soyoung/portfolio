// Menu Control
const burgerBtn = document.querySelector('.hamburger')
const header = document.querySelector('header')

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open')
})


// Cursor Customizing Control
// if (window.innerWidth > 1440) {
//     const mouseCursor = document.querySelector('.cursor');
//     const workPics = document. querySelectorAll('.work-pic');

//     for(let workPic of workPics) {
//         workPic.addEventListener('mouseover', () => {
//             mouseCursor.classList.remove('no-display');
//         })
//         workPic.addEventListener('mouseleave', () => {
//             mouseCursor.classList.add('no-display');
//         })

//         workPic.addEventListener('mousemove', cursor);
//         function cursor(e) {
//             mouseCursor.style.top = `${e.pageY}px`;
//             mouseCursor.style.left = `${e.pageX}px`;
//         }
//     }
// }
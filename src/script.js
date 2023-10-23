const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const circleMouseFollower = () => {
    window.addEventListener('mousemove', (e) => {
        document.querySelector(".minicircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    })
}
circleMouseFollower();
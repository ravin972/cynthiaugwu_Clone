const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const firstPageAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".navbar", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      opacity: 0,
    });
};

const circleMouseFollower = () => {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
};
circleMouseFollower();
firstPageAnimation();

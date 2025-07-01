const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

function animate() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader",
    {
      delay: 0.4,
      color: "black",
    },
    "anim"
  );
}

animate();

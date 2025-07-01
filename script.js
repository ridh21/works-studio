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
      delay: 0.2,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader",{
    opacity : 0
  })
  tl.to("#loader",{
    display : "none"
  })
}

animate();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });

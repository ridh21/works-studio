// Animation
  function animate() {
    var tl = gsap.timeline();

    tl.to("#yellow1", {
      top: "-100%",
      delay: 0.7,
      duration: 0.5,
      ease: "expo.out",
    });

    tl.from(
      "#yellow2",
      {
        top: "100%",
        delay: 0.7,
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

    tl.to("#loader", {
      opacity: 0,
    });

    tl.to("#loader", {
      display: "none",
    });
  }

  animate();

  // Locomotive Scroll Init
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  document.querySelector("#scroll-top").addEventListener("click", () => {
    scroll.scrollTo(0)
  });

const elems = document.querySelectorAll(".elem");
const page2 = document.querySelector("#page2");

let currentIndex = 0;
let intervalId;

function applyHoverEffect(index) {
  elems.forEach((el) => el.classList.remove("hovered"));
  const currentElem = elems[index];
  currentElem.classList.add("hovered");

  const bgImage = currentElem.getAttribute("data-img");
  page2.style.backgroundImage = `url(${bgImage})`;
}

function startAutoHover() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = currentIndex % elems.length;
    applyHoverEffect(currentIndex);
    currentIndex++;
  }, 3000);
}

elems.forEach((elem, index) => {
  elem.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
    applyHoverEffect(index);
  });

  elem.addEventListener("mouseleave", () => {
    currentIndex = (index + 1) % elems.length;
    startAutoHover();
  });
});

startAutoHover();


  // Dynamic Color Change
  scroll.on("scroll", (args) => {
    const scrollY = args.scroll.y;
    const page = document.querySelector("#page2");
    const svg = document.querySelector(".core-logo");
    const navLinks = document.querySelector("#nav-links");

    const pageTop = page.offsetTop;
    const pageHeight = page.offsetHeight;

    if (
      scrollY > pageTop - 50 &&
      scrollY < pageTop + pageHeight - 50
    ) {
      svg.style.fill = "white";
      navLinks.querySelectorAll("a").forEach((link) => {
        link.style.color = "white";
      });
    } else {
      svg.style.fill = "black";
      navLinks.querySelectorAll("a").forEach((link) => {
        link.style.color = "black";
      });
    }
  });
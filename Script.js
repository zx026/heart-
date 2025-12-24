// Heart draw animation
gsap.fromTo("#heart",
  { strokeDasharray: 2000, strokeDashoffset: 2000 },
  {
    strokeDashoffset: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  }
);

// Heart beat
gsap.to("#heart", {
  scale: 1.05,
  transformOrigin: "50% 50%",
  duration: 1,
  repeat: -1,
  yoyo: true
});

// Name pulse
gsap.to(".name", {
  scale: 1.1,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

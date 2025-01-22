document.addEventListener("DOMContentLoaded", () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger)

  // Animate header
  gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
  })

  // Animate branch sections
  gsap.utils.toArray(".branch").forEach((branch, index) => {
    gsap.from(branch, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: branch,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Animate buttons
  gsap.utils.toArray(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    btn.addEventListener("click", (e) => {
      if (!btn.classList.contains("call-btn")) {
        e.preventDefault()
        gsap.to(btn, {
          scale: 0.95,
          yoyo: true,
          repeat: 1,
          duration: 0.1,
        })
        setTimeout(() => {
          window.open(btn.href, "_blank")
        }, 200)
      }
    })
  })

  // Animate map containers
  gsap.utils.toArray(".map-container").forEach((map) => {
    gsap.from(map, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: map,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })
})


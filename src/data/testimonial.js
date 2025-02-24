export const testimonialData = {
  videoUrl: "/assets/video/testimonial.mp4",
  testimonials: [
    {
      id: 1,
      title: "Their dedication and passion for quality are unmatched.",
      text: "As a small business owner, I was worried about finding the right team to help me improve my online presence. They not only made the process easy but also provided valuable insights that helped my business grow. I felt like they truly cared about my success, and that made all the difference.",
      author: {
        name: "Emily Carter",
        role: "Small Business Owner, Carter Handmade Crafts",
        image: "/assets/imgs/testimonial/author-1.jpg", // Optional if you want to add author images
      },
    },
    {
      id: 2,
      title:
        "They didn’t just meet my expectations—they exceeded them in every way!",
      text: "I was looking for a team that truly understands branding, and I couldn’t have asked for a better experience. They took my ideas, refined them, and delivered something even better than I envisioned. The communication was clear, and the turnaround time was impressive. Highly recommend their services!",
      author: {
        name: "David Thompson",
        role: "Founder, Thompson Creative Studio",
        image: "/assets/imgs/testimonial/author-2.jpg",
      },
    },
  ],
  settings: {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    freeMode: true,
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  },
};

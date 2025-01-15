import { useEffect } from "react";

const InstantScrollFix = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        document.documentElement.style.scrollBehavior = "auto";
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView();
          window.location.hash = targetId; // URL hash-ni yangilash
        }
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = "smooth";
        }, 100);
      }
    };

    const links = document.querySelectorAll(".intro a, .jour a, .navbarbtn");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return null;
};

export default InstantScrollFix;

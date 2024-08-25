const inislider = () => {
   const imageList = document.querySelector(".slider-wrapper .image-list");
   const slideButtons = document.querySelectorAll("slider-wrapper .slide-button");
   const sliderScrollbar = document.querySelector("container1 .slider-scrollbar");
   const scrollbarThumb = document.querySelectorAll("slider-wrapper .scrollbar-thumb");
   const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

   scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;

      const handleMouseMove = () => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0,Math.min(maxThumbPosition,newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove",handleMouseMove);
        document.removeEventListener("mouseup",handleMouseUp);
      }
   });

   document.addEventListener("mousemove",handleMouseMove);
   document.addEventListener("mouseup",handleMouseUp);

   slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmout = imageList.clientWidth * direction;
          imageList.scrollBy({let: scrollAmout, behavior: "smooth"})
    });
   });
   const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "black";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrllLeft ? "none" : "black";
   }
   const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
   }
   imageList.addEventListener("sroll", () => {
    handleSlideButtons();
   })
}

window.addEventListener("load", inislider);
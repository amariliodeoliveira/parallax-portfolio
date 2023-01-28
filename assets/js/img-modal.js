const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".closeBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const body = document.body;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    body.classList.add("body-no-scroll");
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");
    body.classList.add("body-no-scroll");

    let imageIndex = index;
    let next = imageIndex++;
    let prev = imageIndex--;

    /* - - - - - - - - - -  */
    /* Work with Arrow Keys */
    /* - - - - - - - - - -  */
    window.addEventListener("keyup", (e) => {
      if (next >= images.length) {
        next = 0;
      }
      if (prev < 0) {
        prev = images.length - 1;
      }

      if (e.keyCode === 37) {
        modalImg.src = images[prev].src;
        modalTxt.innerHTML = images[prev].alt;
        prev--;
        next = prev + 2;
      } else if (e.keyCode === 39) {
        modalImg.src = images[next].src;
        modalTxt.innerHTML = images[next].alt;
        next++;
        prev = next - 2;
      } else if (e.keyCode === 27) {
        modal.classList.remove("appear");
      }
    });

    /* - - - - - - - - - */
    /* Work with Buttons */
    /* - - - - - - - - - */
    prevBtn.addEventListener("click", () => {
      modalImg.src = images[prev].src;
      modalTxt.innerHTML = images[prev].alt;
      prev--;
      next = prev + 2;

      if (next >= images.length) {
        next = 0;
      }
      if (prev < 0) {
        prev = images.length - 1;
      }
    });

    nextBtn.addEventListener("click", () => {
      modalImg.src = images[next].src;
      modalTxt.innerHTML = images[next].alt;
      next++;
      prev = next - 2;

      if (next >= images.length) {
        next = 0;
      }
      if (prev < 0) {
        prev = images.length - 1;
      }
    });

    close.addEventListener("click", () => {
      body.classList.remove("body-no-scroll");
      modal.classList.remove("appear");
    });
  });
});


function spriteSlider(bottle) {
    document.querySelector('.sprite-bottle').src = bottle;
  }
  function thirstBackground(color) {
    const sec = document.querySelector('.green-b-grid');
    sec.style.background = color;
  }
  function backgroundIndex(url) {
   
    const bgStyle = document.querySelector('.green-b-grid');
    bgStyle.style.backgroundImage = `url(${url})`;
  }
 
  document.querySelectorAll(".image-carousel").forEach(carousel => {
    
    const images = carousel.querySelectorAll(".carousel_img");
    const buttonsHTML = Array.from(images, () => {
     
      return `<span class="carousel_button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend",
    `
    <div class="carousel_nav">
      ${buttonsHTML.join("")}
    </div>
    `);
  
    const buttons = carousel.querySelectorAll(".carousel_button");
    
    buttons.forEach((button,i) => {
      
      button.addEventListener("click", () => {
       
        images.forEach(image => image.classList.remove("carousel_img-slct"));
        buttons.forEach(button => button.classList.remove("caro_btn-slct"));

        images[i].classList.add("carousel_img-slct");
        
        button.classList.add("caro_btn-slct");
      });
    });
    images[0].classList.add("carousel_img-slct");
    buttons[0].classList.add("caro_btn-slct");
  });
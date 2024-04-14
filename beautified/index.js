document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("mouseover", () => {
      image.style.transform = "scale(1.2)";
      //image.style.transition = "transform 0.3s ease-in-out";
    });

    image.addEventListener("mouseout", () => {
      image.style.transform = "scale(1)";
      //image.style.transition = "transform 0.3s ease-in-out";
    });
  });
});

// });
// //SUBPART1

// const image = document.querySelector("img");

// image.addEventListener("mouseover", () => {
//   image.style.transform = "scale(1.2)";
// });

// image.addEventListener("mouseout", () => {
//   image.style.transform = "scale(1)";
// });
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    paragraph.style.color = "red";
  });
});

const button = document.querySelector("button");
let count = 0;

button.addEventListener("click", () => {
  count++;
  button.textContent = `Click counter : ${count}`;
  //console.log(count);
});

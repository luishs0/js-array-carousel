const listImg = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let imgContainer = document.querySelector(".img-container");

for (let i = 0; i < listImg.length; i++) {
    const element = `<div class="item">
                        <img src="${listImg[i]}" alt="">
                    </div>`
    
    imgContainer.innerHTML += element;
}

const item = document.getElementsByClassName("item");
let imgPosition = 0;
item[imgPosition].classList.add("d-block");
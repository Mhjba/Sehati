// info sweper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

});
//info
document.querySelectorAll('.butt').forEach(button => {
    button.addEventListener('click', () => {
        const text = button.previousElementSibling;
        if (text.style.maxHeight === '100px') {
            text.style.maxHeight = text.scrollHeight + 'px';
            button.textContent = 'Read less';
        } else {
            text.style.maxHeight = '100px';
            button.textContent = 'Read more';
        }
    });
});
//info
// topics
const readMoreButtons = document.querySelectorAll(".btn");

readMoreButtons.forEach(item => {
    item.addEventListener("click", () => {
        const box = item.closest(".box");
        const readMoreText = box.querySelector(".text");

        if(readMoreText.style.maxHeight){
            readMoreText.style.maxHeight = null;
            item.textContent = "Read More";
            item.style.backgroundColor = "#3498bd";

        }else{
            readMoreText.style.maxHeight = readMoreText.scrollHeight + "px";
            item.textContent = "Read less";
            item.style.backgroundColor = "#e74c3c";
        }
    });
});
//topics
//about
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
//about


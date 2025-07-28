"use strict"
//  Image Switcher: Cycle through an array of image URLs with "Next" and "Previous" buttons.
const NextButton = document.getElementById('nextBtn');
const PreviousButton = document.getElementById('prvBtn');
const display = document.getElementById('display');


const bookImgList =
["https://res.cloudinary.com/djlsg1msm/image/upload/v1742685993/1_pgctz8.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685994/2_defk9n.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/3_iyzvdy.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/4_xkvoy8.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685991/5_kigrsx.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685992/6_ruuo8c.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/7_d1xqpw.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/8_sezusm.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/9_bd9qrv.jpg",
"https://res.cloudinary.com/djlsg1msm/image/upload/v1742685995/10_juutpd.jpg"]

let imgIndex = 0; //initial

function updateImg (){
    if(display){
        display.src = bookImgList[imgIndex];
    }
}

if(display){
    updateImg();
}

if(NextButton){
    NextButton.addEventListener('click', () => {
    imgIndex++;
    if(imgIndex >= bookImgList.length) imgIndex = 0;
    updateImg();
})
}

if(PreviousButton){
    PreviousButton.addEventListener('click', () => {
    imgIndex--;
    if(imgIndex < 0) imgIndex = bookImgList.length -1;
    updateImg();
})
}
// console.log(bookList);
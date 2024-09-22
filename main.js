let saturate = document.querySelector('#saturate');
let contrast = document.querySelector('#contrast');
let brightness = document.querySelector('#brightness');
let sepia = document.querySelector('#sepia');
let grayscale = document.querySelector('#grayscale');
let blur = document.querySelector('#blur');
let hue_rotate = document.querySelector('#hue-rotate');
let download = document.querySelector('#download');
let upload = document.querySelector('#up');
let image = document.querySelector('.img_box img');
let img_box = document.querySelector('.img_box');
let reset = document.querySelector('span');
let input = document.querySelectorAll('ul li input');

window.onload = function()
{
    download.style.display = 'none';
    img_box.style.display = 'none';
    reset.style.display = 'none';
 
}



//-------مهم لازالة تأثيرات الصوره القديمه عن الجديده
function reset_f()
{
   image.style.filter = 'none';
   saturate.value = '100';
   contrast.value = '100';
   brightness.value = '100';
   sepia.value = '0';
   grayscale.value = '0';
   blur.value = '0';
   hue_rotate.value = '0';

}


//----طريقه اخرى بدل html
// reset.onclick = ()=>{
//     reset_f();
// }

//--------------------مهم ازاى تاخد صوره من file ------------------------
upload.onchange = function()
{
    reset_f()
    download.style.display = 'block';
    img_box.style.display = 'block';
    reset.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);  
    file.onload = function()   //لازم عشان بيفرض ان الصوره تتحمل الاول
    {
        image.src = file.result;
    }
}

//-------الطريقه الوحيده اللى تقدر تخلى التأثير بتاعك مكمل حتى لو روحت لتأثير تانى غير كده كل تأثير بيلغى التانى
//لو عملت اكتر من فيلتر وكل واحد فى سطر بيتاخد اخر فلتر
input.forEach((e)=>{
    e.addEventListener("input",function()
{
    image.style.filter = `contrast(${contrast.value}%)
                          saturate(${saturate.value}%)
                          brightness(${brightness.value}%)
                          sepia(${sepia.value}%)
                          grayscale(${grayscale.value})
                          blur(${blur.value}px)
                          hue-rotate(${hue_rotate.value}deg)
                          
                          `

})
})


//---------لاستخدام download---------------------------------
download.onclick = function()
{
    download.href = image.src;   //ولكن لن يحمل غير الصوره الاصليه ولازم canvas عشان التأثيرات  
}
let openbtn=document.getElementById('btnopen');
let menu=document.getElementById('menulist');
let icon=document.getElementById('icon');
let closebtn=document.getElementById('btnclose');
let addcart=document.getElementById('added-cart');
let btncart=document.getElementById('cartbtn');

openbtn.addEventListener('click', ()=>{
    menu.classList.add('show');
    icon.classList.add('iconshow');
    // closebtn.classList.add('unhide');
})
closebtn.addEventListener('click',()=>{
    menu.classList.remove('show');
    icon.classList.remove('iconshow');
    // closebtn.classList.add('hide');
})


let count=0;
function showbtn(){
    // count++;
    if(count==0)
    {
        setTimeout(() => {
            
            btncart.classList.add('cartadded')
            setTimeout(() => {
                btncart.classList.remove('cartadded');
                btncart.innerHTML='ADDED <i class="ri-check-fill"></i>'
            }, 1300);
        }, 500);
        addcart.classList.add('add-show');
        setTimeout(() => {
            addcart.classList.remove('add-show');
        }, 1800);
        count=2;
}
}
gsap.from('.watch-details',1.5, { opacity:0 , x:-150 , delay:.5}) 
gsap.from('.watch-image-container',1.5, { opacity:0 , y:-100 , delay:.5}) 
gsap.from('.watch-description',1.5, { opacity:0 , y:-100 , delay:.5}) 
// gsap.from('.nav',.5, { opacity:0 , y:-50 , delay:.1}) 
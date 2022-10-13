let subHead = document.querySelector("#subHead");
let header = document.querySelector("#Header");
let upButton = document.getElementById('upButton');
let themeButton =document.getElementById('theme');
let themeButton2 = document.getElementById('theme2')
let mainStyle = document.getElementById('mainStyle');
let bar = document.querySelector('#bar');
let dropdownmenu = document.querySelector('.dropdownMenu');
let mainItems = document.querySelector('.navItems .mainItems')
let navItems = document.querySelector('.navItems')



window.onscroll = ()=>{
    if(window.scrollY >0){
        subHead.style.display ="none"
        header.classList.remove('header');
        header.classList.add('header-fixed');
        dropdownmenu.classList.add('bgc-black')
    }
    else{
        subHead.style.display="block"
        header.classList.remove('header-fixed');
        header.classList.add('header');
        dropdownmenu.classList.remove('bgc-black')

    }
    if(window.scrollY >= 937){
        upButton.style.display="block"
    }
    else{
        upButton.style.display="none"
    }
}
upButton.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})


let darkTheme =(e)=>{
    if(e.target.classList.contains('fa-moon')){
        e.target.classList.replace('fa-moon','fa-sun');
        mainStyle.href = 'css/dark.css';
        console.log(mainStyle.href);
    }
    else{
        e.target.classList.replace('fa-sun','fa-moon');
        mainStyle.href = 'css/main.css';
        console.log(mainStyle.href);
    }

}
themeButton2.addEventListener('click',darkTheme)
themeButton.addEventListener('click',darkTheme);

bar.addEventListener('click',()=>{
    dropdownmenu.classList.toggle('dropdownMenu-r');
    mainItems.classList.toggle('mainItems-r');
    navItems.classList.toggle('d-block')
    header.classList.toggle('bgc-black')

})
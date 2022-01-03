// Javascript Codes From WebSite
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
window.onscroll = () =>{
    if(window.scrollY > 60){
        document.querySelector("#scroll-top").classList.add("active");
    }else{
        document.querySelector("#scroll-top").classList.remove("active");
    }
}
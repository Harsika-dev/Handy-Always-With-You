const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totaltime = 7500
const breathetime = (totaltime / 5) * 2
const holdtime = totaltime / 5

breatheanimation()

function breatheanimation(){
    text.innerHTML= 'Breathe-In !'
    container.className='container grow'

    setTimeout(() => {
        text.innerText= 'Hold'
        setTimeout(()=>{
            text.innerText= 'Breathe-Out !'
            container.className='container shrink'
        },holdtime)
    },breathetime)
}

setInterval(breatheanimation,totaltime)






let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

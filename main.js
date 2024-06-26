import menu from "./db.js";

const menuContainer = document.querySelector('#menu-container');

document.addEventListener("DOMContentLoaded", ()=>{
    displayMenuItems(menu);
});


function displayMenuItems(menuItems){
  
   let displayMenu = menuItems.map(
    (item) => `
   <div id='card' class="d-flex gap-3 flex-column flex-md-row align-items-center">
      
        <img src="${item.img}" class="shadow rounded"/>

        <div>
            <div class="d-flex justify-content-between my-2">
                <h5>${item.title}</h5>
                <p>${item.price}</p>
            </div>
            <p class="lead">
                ${item.desc}
            </p>
         </div>
      </div>
   `
    );
    
       // aralarındaki virgülü silme
 
    displayMenu = displayMenu.join('');

    // oluşturduğumuz divleri htmle gönderme

   menuContainer.innerHTML = displayMenu;
}

//filtreleme

const filterBtns = document.querySelectorAll('.filter-btn');

//dizideki her bir elemanın tıklanma olayı

filterBtns.forEach((btn)=>{
    //tıklanma olayı

    btn.addEventListener('click',searchCategory);
});
function searchCategory(e){
    const category = e.target.dataset.id;
   
   const filtredItems = menu.filter((menuItem)=>{
        if(category  === menuItem.category) return menuItem;
    });
    if(category === "all"){
        displayMenuItems(menu);

    }
    else{
        displayMenuItems(filtredItems);
    }
}


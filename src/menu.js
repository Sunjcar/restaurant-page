const menu = () => { 
    //Cach Dom
    const content = document.getElementById('content')
  
    //Dom creation
    
    const headline = document.createElement('h1');
    headline.classList.add('menuHead')
    headline.textContent = "Menu"
 
    const img = document.createElement('img');
    img.classList.add('menuImg');
    img.src = './images/fish.jpg'
    const p = document.createElement('p')
    p.classList.add('menu-item')
    p.textContent = "Fish of the Great Wall"
 
    
    const img1 = document.createElement('img')
    img1.classList.add('menuImg1');
    img1.src = './images/tofu.jpg' 
    const p1 = document.createElement('p')
    p1.classList.add('menu-item1')
    p1.textContent = "Ma Po Tofu"


    const img2 = document.createElement('img');
    img2.classList.add('menuImg2');
    img2.src = './images/beef.jpg'
    const p2 = document.createElement('p')
    p2.classList.add('menu-item2')
    p2.textContent = "Beef Delight"
 

    const img3 = document.createElement('img');
    img3.classList.add('menuImg3');
    img3.src = './images/salad.jpg'
    const p3 = document.createElement('p')
    p3.classList.add('menu-item3')
    p3.textContent = "Chinese Fortune Salad"
 

    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(p)
    content.appendChild(img1)
    content.appendChild(p1)
    content.appendChild(img2)
    content.appendChild(p2)
    content.appendChild(img3)
    content.appendChild(p3)

   
};

export default menu


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
    
    const img1 = document.createElement('img')
    img1.classList.add('menuImg1');
    img1.src = './images/tofu.jpg' 

    const img2 = document.createElement('img');
    img2.classList.add('menuImg2');
    img2.src = './images/beef.jpg'

    const img3 = document.createElement('img');
    img3.classList.add('menuImg3');
    img3.src = './images/salad.jpg'

    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(img2)
    content.appendChild(img3)
    content.appendChild(img1)
   
};

export default menu


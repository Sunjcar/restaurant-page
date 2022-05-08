const home = () => {
    //Cach Dom
    const content = document.getElementById('content')   
    
    //Dom creation
    
    const headline = document.createElement('h1');
    headline.classList.add('homeHead')
    const img = document.createElement('img');
    img.classList.add('homeImg')
    const info = document.createElement('h3');
    info.classList.add('quote')
    const p = document.createElement('p');

    headline.textContent = "The Chinese Experience";
    info.textContent = "“The art of Chinese cooking,” says Master James Wei, Taipei gourmet and prince of hospitality, “is to make the meat taste like vegetables and the vegetables test like meat, without either the meat or vegetables losing their original texture.” ~ Richard Hughes";
    p.textContent = "Photo by Calum Lewis"

    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(info)
    content.appendChild(p)
  
    
};home()

export default home

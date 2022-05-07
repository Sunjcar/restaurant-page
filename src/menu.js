const menu = (() => {
    //Cach Dom
    const content = document.getElementById('content')

    //Dom creation
    const headline = document.createElement('h1');
    const img = document.createElement('img');
    const info = document.createElement('h3');

    headline.textContent = "Baby Its All GOOD"
    info.textContent = "JUSTIN BIEBER"
    
    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(info)
})();
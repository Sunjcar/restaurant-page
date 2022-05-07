const about = (() => {
    //Cach Dom
    const content = document.getElementById('content')

    //Dom creation
    const headline = document.createElement('h1');
    headline.textContent = "The Best Restaraunt in Town"
    const img = document.createElement('img');

    const info = document.createElement('h3');
    info.textContent = "This is the greatest restaurant in the entire universe. Must try the whopping ramen!"
    
    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(info)
})();
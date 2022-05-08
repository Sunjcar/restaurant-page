const home = () => {
    //Cach Dom
    const content = document.getElementById('content')   
    
    //Dom creation
    /* function homePage(){ */
        
    const headline = document.createElement('h1');
    headline.classList.add('homeHead')
    const img = document.createElement('img');
    const info = document.createElement('h3');

    headline.textContent = "BOOBA BOOBA BOOBA";
    info.textContent = "Who doesn't like BOOOBA, this place has the best BOOBAS";
    info.classList.add('hello')
    
    content.appendChild(headline);
    content.appendChild(img)
    content.appendChild(info)
    /* }homePage() */
    
};home()

export default home

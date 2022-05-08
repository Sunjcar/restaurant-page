const about = () => {
    //Cach Dom
    const content = document.getElementById('content');

    //Dom creation
    const headline = document.createElement('h1');
    const img = document.createElement('img');
    
    const info = document.createElement('h3');

    headline.textContent = "Contact Info";
    info.textContent = "";

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(info);
} 

export default about
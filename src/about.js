const about = () => {
    //Cach Dom
    const content = document.getElementById('content');

    //Dom creation
    const headline = document.createElement('h1');
    const img = document.createElement('img');
    const info = document.createElement('h3');

    headline.textContent = "The Best Restaraunt in Town";
    info.textContent = "This is the greatest restaurant in the entire universe. Must try ng ramen!";

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(info);
} 

export default about
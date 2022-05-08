const about = () => {
    //Cach Dom
    const content = document.getElementById('content');

    //Dom creation
    const picture = document.createElement('p');
    picture.classList.add('picture');


    const credit = document.createElement('p')
    credit.classList.add('photo-credit')
    credit.textContent = "Photo by Calum Lewis"

    const headline = document.createElement('h1');
    headline.classList.add('aboutHead');
    headline.textContent = "Contact Info";

    const number = document.createElement('p');
    number.classList.add('number');
    number.textContent = "520-1314";

    const hours = document.createElement('p')
    hours.classList.add('hours')
    hours.textContent = "Hours:"

    const p = document.createElement('p')
    p.classList.add('monday')
    p.textContent = "Monday: 11am - 7pm"

    const p1 = document.createElement('p')
    p1.classList.add('tuesday')
    p1.textContent = "Tuesday: 11am - 7pm"

    const p2 = document.createElement('p')
    p2.classList.add('wedensday')
    p2.textContent = "Wedensday: 11am - 7pm"

    const p3 = document.createElement('p')
    p3.classList.add('thursday')
    p3.textContent = "Thursday: 11am - 7pm"

    const p4 = document.createElement('p')
    p4.classList.add('friday')
    p4.textContent = "Friday: 11am - 7pm"

    const p5 = document.createElement('p')
    p5.classList.add('weekend')
    p5.textContent = "Saturday/Sunday: Closed"

    content.appendChild(picture)
    content.appendChild(credit)
    content.appendChild(headline);
    content.appendChild(number);
    content.appendChild(hours)
    content.appendChild(p);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);
    content.appendChild(p5)
} 

export default about
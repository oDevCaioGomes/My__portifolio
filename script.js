function sendWhatsapp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const telephone = '5527988482076';

    const text = `Olá, Me chamo ${name}, ${message}`;
    const formattedMessage = encodeURIComponent(text);

    const url = `https://wa.me/${telephone}?text=${formattedMessage}`;

    window.open(url, '_blank');

    console.log(url);
    
}



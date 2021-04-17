const createContactPageElements = () => {
    const createContactDiv = document.createElement('div');
    createContactDiv.setAttribute('id', 'contact');
    createContactDiv.innerHTML = `<div class="contact-grid">
        <h2>Talk to us</h2>
        <div class="flex-div">
            <i class="fas fa-envelope-square fa-2x"></i>
            <p>eat@sunrisecoast.com</p>
        </div>
        <div class="flex-div">
            <i class="fas fa-phone-square fa-2x"></i>
            <p>(650) 384-6500</p>
        </div>
    </div>
    <div class="contact-grid">
        <h2>Visit us</h2>
        <div class="flex-div">
            <i class="fas fa-map-marker-alt fa-2x"></i>
            <p>530 Bryant St, Palo Alto, CA</p>
        </div>
    </div>
    <div class="contact-grid">
        <h2>Hours</h2>
        <div class="flex-div">
            <i class="fas fa-clock fa-2x"></i>
            <p>Monday to Wednesday</p>
            <p>12 - 9 pm</p>
        </div>
        <div class="flex-div">
            <i class="fas fa-clock fa-2x"></i>
            <p>Thursday to Saturday</p>
            <p>12 - 10 pm</p>
        </div>
    </div>`;

    return createContactDiv;
};

export { createContactPageElements };
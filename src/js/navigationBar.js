const createNavigationBarElements = () => {
    const createNavDiv = document.createElement('div');
    createNavDiv.innerHTML = `<nav>
        <div id="nav-bar">
            <h1>Sunrise Roast</h1>
            <div>
                <ul>
                    <li>
                        <a id="home-button" href="#">Home</a>
                    </li>
                    <li>
                        <a id="menu-button" href="#">Menu</a>
                    </li>
                    <li>
                        <a id="contact-button" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div id="button-nav-div" class="push-right">
                <ul>
                    <li class="button-element">
                        <a href="#">Order Home</a>
                    </li>
                    <li class="button-element adjust-left">
                        <a href="#">Book a table</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;

    return createNavDiv;
};

export { createNavigationBarElements };
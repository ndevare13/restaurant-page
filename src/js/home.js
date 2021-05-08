const createHomePageElements = () => {
    const createHomeDiv = document.createElement('div');
    createHomeDiv.setAttribute('id', 'home');
    createHomeDiv.innerHTML = `<div>
    <img id="main-img" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80 " alt="delicious-looking-food ">
    </div>
    <div class="tagline">
        <h2>Welcome to Sunrise Roast!</h2>
        <p>"...where fine dining is an authentic experience..."</p>
    </div>`;

    return createHomeDiv;
};

export { createHomePageElements };
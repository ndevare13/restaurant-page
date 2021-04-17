const createMenuPageElements = () => {
    const createMenuDiv = document.createElement('div');
    createMenuDiv.setAttribute('id', 'menu');
    createMenuDiv.innerHTML = `<div class="menu-food-card">
        <div>
            <h5>Kupati Georgian Sausage</h5>
            <p>Kupati is a Georgian sausage made with ground pork and beef, Georgian spices and onions.</p>
            <p>$24.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p389_i1_w4032.jpeg?width=640" alt="kupati-georgian-sausage">
        </div>
    </div>
    <div class="menu-food-card">
        <div>
            <h5>Winter Pear</h5>
            <p>Ripe pear cooked in Georgian wine. House-made cream paired with fresh mint and walnuts.</p>
            <p>$17.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p393_i1_w4032.jpeg?width=640" alt="winter-pear">
        </div>
    </div>
    <div class="menu-food-card">
        <div>
            <h5>Pkhali</h5>
            <p>Hand-chopped baby spinach and beets pkhali with walnuts and herbs. Served with eggplant rolls and mchadi cornbread.</p>
            <p>$16.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p3_i2_w3252.jpeg?width=640" alt="pkhali">
        </div>
    </div>
    <div class="menu-food-card">
        <div>
            <h5>Georgian Salad</h5>
            <p>Traditional Georgian salad with cucumbers and tomatoes served with burrata, grilled bread, herbs and pesto.</p>
            <p>$18.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p100_i2_w640.jpeg" alt="georgian-salad">
        </div>
    </div>
    <div class="menu-food-card">
        <div>
            <h5>Khachapuri Adjaruli</h5>
            <p>Boat-shaped bread with cheese, butter and an egg. So good, it made it to our logo.</p>
            <p>$21.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p11_i3_w4032.jpeg?width=640" alt="khachapuri-adjaruli">
        </div>
    </div>
    <div class="menu-food-card">
        <div>
            <h5>Chicken Tapaka</h5>
            <p>Iron pressed, pan-fried golden cornish chicken with Georgian sour Tkemali sauce.</p>
            <p>$36.00</p>
        </div>
        <div>
            <img src="https://www.bevri.restaurant/uploads/1/2/9/4/129418926/s237899252658155039_p22_i3_w640.jpeg" alt="chicken-tapaka">
        </div>
    </div>`;

    return createMenuDiv;
};

export { createMenuPageElements };
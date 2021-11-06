const form = document.forms['hero'];
form.addEventListener('submit', makeHero);
function makeHero(e){
    e.preventDefault();
    const hero = {};
    hero.name = form.heroName.value;
    alert(JSON.stringify(hero))
    return hero;
};

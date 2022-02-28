function manipulateDom() {
    // Megkeres az oldalon minden quote osztályhoz tartozó elemet
    const quote = document.querySelectorAll('.quote');
    // stílust állít be rájuk
    // a körvonaluk legyen kék
    // a hátterük világoskék
    // az általuk használt betűtípus dőlt
    quote.style.cssText = `
        border-color: blue;
        background-color: lightblue;
        font-style: italic;
    `;    
};

export { manipulateDom };
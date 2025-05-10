let category = localStorage.getItem('category');
let productsContainer = document.querySelector('.products-container');


function productsRequest(category) {

    if (productsContainer.hasChildNodes())  productsContainer.clear() && localStorage.clear();
   
    fetch(`/api/server/?category=${category}`).then(responce => responce.text())
    .then(response => JSON.parse(response))
    .then(responce => productsContainer.insertAdjacentHTML('afterbegin', 
    
        `${responce.map(product => (
            `<a class='product-link'>
                <img src=${product.img_path} />
                <p>${product.name}</p>
                <span class='product-price'> $ ${product.price}</span>
            </a>`
    
        )).join('')} `
    
    ));

};


productsRequest(category);

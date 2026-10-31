// Product Listing Page using Fake Store API

let apiContainer = document.querySelector(".api");
let productContainer = document.querySelector("#product-list");

// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
.then(function (response) {
return response.json();
})
.then(function (products) {

// Display each product separately
products.forEach(function (product) {

    // Create a separate card for each product
    let productCard = document.createElement("div");
    productCard.className = "card";

    // Limit the title to 50 characters
    let productTitle = product.title.slice(0, 50);

    if (product.title.length > 50) {
        productTitle = productTitle + "...";
    }

    // Limit the description to 100 characters
    let productDescription = product.description.slice(0, 100);

    if (product.description.length > 100) {
        productDescription = productDescription + "...";
    }

    // Display product details inside the card
    productCard.innerHTML =
        "<img src='" + product.image + "' alt='Product image'>" +
        "<h2>Product ID: " + product.id + "</h2>" +
        "<h3>" + productTitle + "</h3>" +
        "<p class='price'>$" + product.price + "</p>" +
        "<p>" + productDescription + "</p>";

    // Add the card to the product listing
    productContainer.appendChild(productCard);
});

})
.catch(function (error) {

// Display API errors in red inside .api
apiContainer.innerHTML =
    "<p class='error'>Error loading products. Please try again.</p>";

console.log("API Error:", error);

})
.finally(function () {

// Display the completion message after the request finishes
let completionMessage = document.createElement("p");
completionMessage.className = "completed";
completionMessage.innerHTML = "API request completed";

apiContainer.appendChild(completionMessage);

});
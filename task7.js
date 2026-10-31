// 1.Display only the product title inside an <h1> tag.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
       let task1Container = document.querySelector("#task1");

        products.forEach(function (product) {
            let productTitle = document.createElement("h1");

            productTitle.innerHTML = product.title;

            task1Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 2.Display the product ID and title inside an <h2> tag.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task2Container = document.querySelector("#task2");
        products.forEach(function (product) {
            let productHeading = document.createElement("h2");

            productHeading.innerHTML =
                "ID: " + product.id + " - " + product.title;

            task2Container.appendChild(productHeading);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 3.Display the first 30 characters of each product title.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task3Container = document.querySelector("#task3");
        products.forEach(function (product) {
            let productHeading = document.createElement("h2");

            productHeading.innerHTML = product.title.slice(0, 30);

            task3Container.appendChild(productHeading);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 4.Display the first 100 characters of each product description.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task4Container = document.querySelector("#task4");

        products.forEach(function (product) {
            let productDescription = document.createElement("p");

            productDescription.innerHTML = product.description.slice(0, 100);

            task4Container.appendChild(productDescription);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 5.Display each product's image inside a <div>.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task5Container = document.querySelector("#task5");

        products.forEach(function (product) {
            let productImageContainer = document.createElement("div");

            productImageContainer.innerHTML =
                '<img src="' + product.image + '" alt="' + product.title + '">';

            task5Container.appendChild(productImageContainer);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 6.Display the product title, description, and image inside a single <div>.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
       let task6Container = document.querySelector("#task6");

        products.forEach(function (product) {
            let productDetails = document.createElement("div");

            productDetails.innerHTML =
                "<h2>" + product.title + "</h2>" +
                "<p>" + product.description + "</p>" +
                '<img src="' + product.image + '" alt="' + product.title + '">';

            task6Container.appendChild(productDetails);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 7.Display each product's price inside a <p> tag.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task7Container = document.querySelector("#task7");
        products.forEach(function (product) {
            let productPrice = document.createElement("p");

            productPrice.innerHTML = "Price: $" + product.price;

            task7Container.appendChild(productPrice);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 8.Display each product's category inside an <h3> tag.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task8Container = document.querySelector("#task8");

        products.forEach(function (product) {
            let productCategory = document.createElement("h3");

            productCategory.innerHTML = product.category;

            task8Container.appendChild(productCategory);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 9.Display the product title in uppercase.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task9Container = document.querySelector("#task9");

        products.forEach(function (product) {
            let productTitle = document.createElement("h2");

            productTitle.innerHTML = product.title.toUpperCase();

            task9Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 10.Display the product title and its total character count.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
       let task10Container = document.querySelector("#task10");

        products.forEach(function (product) {
            let productTitle = document.createElement("h2");

            productTitle.innerHTML =
                product.title + " - Characters: " + product.title.length;

            task10Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 11.Display the first 5 products only.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task11Container = document.querySelector("#task11");

        products.slice(0, 5).forEach(function (product) {
            let productTitle = document.createElement("h2");

            productTitle.innerHTML = product.title;

            task11Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 12.Display products with their IDs, titles, and prices.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task12Container = document.querySelector("#task12");
        products.forEach(function (product) {
            let productDetails = document.createElement("div");

            productDetails.innerHTML =
                "<h2>ID: " + product.id + "</h2>" +
                "<h3>Title: " + product.title + "</h3>" +
                "<p>Price: $" + product.price + "</p>";

            task12Container.appendChild(productDetails);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 13.Display each product's image with a width of 200px.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task13Container = document.querySelector("#task13");

        products.forEach(function (product) {
            let productImage = document.createElement("div");

            productImage.innerHTML =
                '<img src="' + product.image + '" alt="' + product.title +
                '" width="200px">';

            task13Container.appendChild(productImage);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 14.Add a separate <div> for each product and give it a class name of "card".
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task14Container = document.querySelector("#task14");

        products.forEach(function (product) {
            let productCard = document.createElement("div");

            productCard.className = "card";

            productCard.innerHTML =
                "<h2>" + product.title + "</h2>";

            task14Container.appendChild(productCard);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 15.Display the product title and description, limiting the description to 50 characters.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task15Container = document.querySelector("#task15");

        products.forEach(function (product) {
            let productCard = document.createElement("div");

            productCard.className = "card";

            productCard.innerHTML =
                "<h2>" + product.title + "</h2>" +
                "<p>" + product.description.slice(0, 50) + "</p>";

            task15Container.appendChild(productCard);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 16.Display all product titles in the browser console and on the webpage.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task16Container = document.querySelector("#task16");
        products.forEach(function (product) {
            console.log(product.title);

            let productTitle = document.createElement("h2");

            productTitle.innerHTML = product.title;

            task16Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 17.Display each product's title and category inside the same <div>.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task17Container = document.querySelector("#task17");

        products.forEach(function (product) {
            let productDetails = document.createElement("div");

            productDetails.innerHTML =
                "<h2>" + product.title + "</h2>" +
                "<h3>Category: " + product.category + "</h3>";

            task17Container.appendChild(productDetails);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 18.Display a message inside .api when the API data is successfully loaded.
{
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let task18Container = document.querySelector("#task18");

        task18Container.innerHTML = "<h2>Product data loaded successfully!</h2>";

        products.forEach(function (product) {
            let productTitle = document.createElement("h3");

            productTitle.innerHTML = product.title;

            task18Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

// 19.Display "Loading..." inside .api before fetching the API data.
{
let task19Container = document.querySelector("#task19");

task19Container.innerHTML = "<h2>Loading...</h2>";

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        task19Container.innerHTML = "<h2>Products Loaded Successfully!</h2>";

        products.forEach(function (product) {
            let productTitle = document.createElement("h3");

            productTitle.innerHTML = product.title;

            task19Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
        task19Container.innerHTML = "<p>Failed to load products.</p>";
    });
}

// 20.Use .finally() to display "API request completed" after the request finishes.
{
let task20Container = document.querySelector("#task20");

task20Container.innerHTML = "<h2>Loading...</h2>";

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        task20Container.innerHTML = "<h2>Products Loaded Successfully!</h2>";

        products.forEach(function (product) {
            let productTitle = document.createElement("h3");

            productTitle.innerHTML = product.title;

            task20Container.appendChild(productTitle);
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
        task20Container.innerHTML = "<p>Failed to load products.</p>";
    })
    .finally(function () {
        let completionMessage = document.createElement("p");

        completionMessage.innerHTML = "API request completed";

        task20Container.appendChild(completionMessage);
    });
}
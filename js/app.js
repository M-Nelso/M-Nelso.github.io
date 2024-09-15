let lengthConstant = 5; // Default length

// Function to show the gallery
function ShowCastle() {
    // Array of images
    const images = [
        'images/Gallery/castle1.jpg',
        'images/Gallery/castle2.jpg',
        'images/Gallery/castle3.jpg',
        'images/Gallery/castle4.jpg',
        'images/Gallery/castle5.jpg'
    ];
    // Get unique images
    const uniqueImages = getRandomUniqueImages(images);
    const h1Element = document.querySelector('h1');
    // Set the title of the gallery
    h1Element.innerHTML = 'Castle Gallery';
    displayImages(uniqueImages);
}

// Function to show the gallery
function ShowCats() {  
    // Array of images
    const images = [
        'images/Gallery/cat1.jpg',
        'images/Gallery/cat2.jpg',
        'images/Gallery/cat3.jpg',
        'images/Gallery/cat4.jpg',
        'images/Gallery/cat5.jpg'
    ];
    // Get unique images
    const uniqueImages = getRandomUniqueImages(images);
    const h1Element = document.querySelector('h1');
    // Set the title of the gallery
    h1Element.innerHTML = 'Cat Gallery';
    displayImages(uniqueImages);
}

// Function to show the gallery
function ShowDogs() {
    // Array of images
    const images = [
        'images/Gallery/dog1.jpg',
        'images/Gallery/dog2.jpg',
        'images/Gallery/dog3.jpg',
        'images/Gallery/dog4.jpg',
        'images/Gallery/dog5.jpg'
    ];
    // Get unique images
    const uniqueImages = getRandomUniqueImages(images);
    const h1Element = document.querySelector('h1');
    // Set the title of the gallery
    h1Element.innerHTML = 'Dog Gallery';
    displayImages(uniqueImages);
}

// Function to show the gallery
function ShowNature() {
    // Array of images
    const images = [
        'images/Gallery/nature1.jpg',
        'images/Gallery/nature2.jpg',
        'images/Gallery/nature3.jpg',
        'images/Gallery/nature4.jpg',
        'images/Gallery/nature5.jpg'
    ];
    // Get unique images
    const uniqueImages = getRandomUniqueImages(images);
    const h1Element = document.querySelector('h1');
    // Set the title of the gallery
    h1Element.innerHTML = 'Nature Gallery';
    displayImages(uniqueImages);
}

// Function to show the gallery
function ShowRandom() {
    // Array of images
    const images = [
        'images/Gallery/castle1.jpg',
        'images/Gallery/castle2.jpg',
        'images/Gallery/castle3.jpg',
        'images/Gallery/castle4.jpg',
        'images/Gallery/castle5.jpg',
        'images/Gallery/cat1.jpg',
        'images/Gallery/cat2.jpg',
        'images/Gallery/cat3.jpg',
        'images/Gallery/cat4.jpg',
        'images/Gallery/cat5.jpg',
        'images/Gallery/dog1.jpg',
        'images/Gallery/dog2.jpg',
        'images/Gallery/dog3.jpg',
        'images/Gallery/dog4.jpg',
        'images/Gallery/dog5.jpg',
        'images/Gallery/nature1.jpg',
        'images/Gallery/nature2.jpg',
        'images/Gallery/nature3.jpg',
        'images/Gallery/nature4.jpg',
        'images/Gallery/nature5.jpg'
    ];

    // Get unique images
    const uniqueImages = getRandomUniqueImages(images);
    const h1Element = document.querySelector('h1');
    // Set the title of the gallery
    h1Element.innerHTML = 'Random Gallery';
    displayImages(uniqueImages);
}

// Function to set the length constant
function setLengthConstant() {
    // Get all the length anchor elements
    const lengthElements = document.querySelectorAll('a.length');
    // Add event listener to each length anchor element
    lengthElements.forEach(element => {
        // Upon click, set the length constant to the value of the anchor element
        element.addEventListener('click', (event) => {
            lengthConstant = parseInt(event.target.textContent, 10);
            // Get the h1 element
            const h1Element = document.querySelector('h1');
            // Switch statement to determine which gallery to show based on new length constant and h1 element
            switch (h1Element.innerHTML) {
            case 'Castle Gallery':
                ShowCastle();
                break;
            case 'Cat Gallery':
                ShowCats();
                break;
            case 'Dog Gallery':
                ShowDogs();
                break;
            case 'Nature Gallery':
                ShowNature();
                break;
            case 'Random Gallery':
                ShowRandom();
                break;
            default:
                console.log('No matching gallery found');
            }       
        });
    });
}

// Function to get random unique images
function getRandomUniqueImages(images) {
    // Set to store the results
    //Only thing that worked - creating empty array wasn't working
    const results = new Set();
    // While the results array is less than the length constant, add a random image to the results array
    while (results.size < lengthConstant) {
        const randomIndex = Math.floor(Math.random() * images.length);
        results.add(images[randomIndex]);
    }
    // Return the results array
    return Array.from(results);
}

// Function to display images
function displayImages(images) {
    // Get the xCards element
    const xCards = document.getElementById('xCards');
    // Clear the xCards element
    xCards.innerHTML = '';
    // Create Html to display images
    images.forEach(image => {
        const articleElement = document.createElement('article');
        articleElement.className = 'Content';
        const imgElement = document.createElement('img');
        imgElement.src = image;
        articleElement.appendChild(imgElement);
        xCards.appendChild(articleElement);
    });
}

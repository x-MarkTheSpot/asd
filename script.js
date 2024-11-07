// Get elements
const ringStyleSelect = document.getElementById("ringStyle");
const gemstoneSelect = document.getElementById("gemstone");
const gemstoneCutSelect = document.getElementById("gemstoneCut");

const ringStyleImage = document.getElementById("ringStyleImage");
const gemstoneImage = document.getElementById("gemstoneImage");
const gemstoneCutImage = document.getElementById("gemstoneCutImage");

const totalPriceElement = document.getElementById("totalPrice");

// Function to update images and total price based on selections
function updateImages() {
    let totalPrice = 0;

    // Ring Style
    const ringStyle = ringStyleSelect.value;
    let ringStylePrice = 0;
    switch (ringStyle) {
        case "10000":
            ringStyleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdC6z-GIruaRJpVNOZSIdIOc6Rv0VxTFCPA&s";
            ringStylePrice = 10000;
            break;
        case "15000":
            ringStyleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuvnn9YaJcMJg6tZYklMvAoF34BUVFkK0qQ&s";
            ringStylePrice = 15000;
            break;
        case "20000":
            ringStyleImage.src = "https://temple-and-grace.mo.cloudinary.net/mdopt/images/prod-small/small-1-8988-white-gold.jpg";
            ringStylePrice = 20000;
            break;
        case "25000":
            ringStyleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStU6HcnfsxIE6QrjLpZ5iLBRMlhdwXobkfA&s";
            ringStylePrice = 25000;
            break;
        default:
            ringStyleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6CPIfmEjXQFY9AIJijE6lzUMC9AlYoO4eQ&s";
    }

    // Gemstone
    const gemstone = gemstoneSelect.value;
    let gemstonePrice = 0;
    switch (gemstone) {
        case "12000":
            gemstoneImage.src = "https://brite.co/wp-content/uploads/2023/04/Image-2-1.webp";
            gemstonePrice = 12000;
            break;
        case "8000":
            gemstoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfPUKXgv-r9RJQnirbsQlN6LHGS4JxyCGLw&s";
            gemstonePrice = 8000;
            break;
        case "6000":
            gemstoneImage.src = "https://cdn.prod.website-files.com/616016fcfa24362239c03279/627fd8033c64c4806b3cc022_4_Asscher%20-%20Size%20Tables.webp";
            gemstonePrice = 6000;
            break;
        case "5000":
            gemstoneImage.src = "https://cdn.jupitergem.com/media/catalog/product/cache/80a5efd1712483de2852ff87d752e953/2/_/2.10_ruby_sku_192701.jpg";
            gemstonePrice = 5000;
            break;
        case "3000":
            gemstoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPc4NVNHm7b4n9_LnQgpnm605cpyo2KfFUw&s";
            gemstonePrice = 3000;
            break;   
        case "6400":
            gemstoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCebiBHwSD29ly-VOLfjLwfRrNOvtFah4Sg&s";
            gemstonePrice = 6400;
            break;   
        case "8420":
            gemstoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CKAwjeEKcsTuJfTN1fuJuw8y1geLvYQQpQ&s";
            gemstonePrice = 8420;
            break;     
        default:
            gemstoneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq80jeAKlgvdT97rWcDYJk6QKdAOwAtFxKDA&s";
            gemstonePrice = 0;
    }

    // Gemstone Cut
    const gemstoneCut = gemstoneCutSelect.value;
    let gemstoneCutPrice = 0;
    switch (gemstoneCut) {
        case "round":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/roundMobile.a0ed5.svg";
            gemstoneCutPrice = 3000; // Add price if applicable
            break;
        case "emerald":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/emeraldMobile.150d1.svg";
            gemstoneCutPrice = 2500; // Add price if applicable
            break;
        case "princess":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/princMobile.5923a.svg";
            gemstoneCutPrice = 3400; // Add price if applicable
            break;
        case "cushion":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/cushionMobile.39d1e.svg";
            gemstoneCutPrice = 4000; // Add price if applicable
            break;
        case "oval":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/ovalMobile.79c32.svg";
            gemstoneCutPrice = 2000; // Add price if applicable
            break;
        case "radiant":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/radiantMobile.ca49d.svg";
            gemstoneCutPrice = 2050; // Add price if applicable
            break;
        case "asscher":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/asscherMobile.4201b.svg";
            gemstoneCutPrice = 5200; // Add price if applicable
            break;
        case "marquise":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/marquiseMobile.8f34f.svg";
            gemstoneCutPrice = 3400; // Add price if applicable
            break;
        case "heart":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/heartMobile.6ddbf.svg";
            gemstoneCutPrice = 2300; // Add price if applicable
            break;
        case "pear":
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/pearMobile.462a0.svg";
            gemstoneCutPrice = 2100; // Add price if applicable
            break;
        default:
            gemstoneCutImage.src = "https://ecommo--ion.bluenile.com/static-dyo-bn/roundMobile.a0ed5.svg";
            gemstoneCutPrice = 0;
    }

    // Calculate the total price
    totalPrice = ringStylePrice + gemstonePrice + gemstoneCutPrice;

    // Update total price display
    totalPriceElement.textContent = "₱" + totalPrice.toLocaleString();
}

ringStyleImage.style.width = "80px";
ringStyleImage.style.height = "auto";

gemstoneImage.style.width = "100px";
gemstoneImage.style.height = "auto";

gemstoneCutImage.style.width = "100px";
gemstoneCutImage.style.height = "auto";


// Event listeners for changes
ringStyleSelect.addEventListener("change", updateImages);
gemstoneSelect.addEventListener("change", updateImages);
gemstoneCutSelect.addEventListener("change", updateImages);

// Initialize images and price on page load
updateImages();

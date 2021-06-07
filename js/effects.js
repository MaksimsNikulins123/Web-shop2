// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// if(isMobile) {
    let products = document.querySelectorAll('.products__link>a');
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        product.addEventListener("click", function(e) {
            // e.preventDefault();
            // product.parentElement.classList.toggle('_active');
            if(product.parentElement.classList.contains('_active')){
                // e.preventDefault();
                // continue;
            } else {
                let activeLinks = document.querySelectorAll('.products__link._active');
                for (let index = 0; index < activeLinks.length; index++) {
                    const link = activeLinks[index];
                    link.classList.remove('_active')
                    
                }
                product.parentElement.classList.add('_active');
                
            }
            e.preventDefault();
        });

        
    };
// }  

// let products = document.querySelectorAll('.products__link>a');

//     for (let index = 0; index < products.length; index++) {
//         const product = products[index];
//         product.addEventListener("click", function(e) {
//             e.preventDefault();
//             product.parentElement.classList.toggle('_active');
//         })
//     };

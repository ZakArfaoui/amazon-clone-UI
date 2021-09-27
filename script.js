

function getItems(){
    db.collection("items").get().then((querySnapshot) => {
            let items = [];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    image: doc.data().image,
                    name: doc.data().name,
                    make: doc.data().make,
                    rating: doc.data().rating,
                    price: doc.data().price
                })
       });
       generateItems(items)
    });
    function generateItems(items){
        let itemsHTML = "";
        items.forEach((items) =>{
            itemsHTML += `

            <div class="main-product  p-2">
            <div class="product-img w-40 h-46  bg-white rounded-lg p-4">
                <img class="w-40 h-24 object-contain" src="${items.image}">
            </div>
            <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                <span>${items.name}</span>
            </div>
            <div class="product-make text-green-700">
                <span>${items.make}</span>
            </div>
            <div class="product-rating text-yellow-300 font-bold my-1">
                <span>⭐⭐⭐⭐⭐ ${items.rating}</span>
            </div>
            <div class="product-price font-bold text-gray-700 text-lg">
                <span>$ ${items.price}</span>
            </div>
            <div class="add-to-cart h-8 w-28 bg-yellow-500 flex items-center justify-center text-white rounded text-md cursor-pointer hover:bg-yellow-600">
                <span>Add To Cart</span>
            </div>
        </div>
 
            `

        })
        document.querySelector(".main-section-product").innerHTML = itemsHTML;
    }
}
getItems();
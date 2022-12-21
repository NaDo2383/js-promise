let products = [
    { productId: 1, productName: "Цүнх", shop_id: 1, category: 3 },
    { productId: 2, productName: "Гутал", shop_id: 2, category: 1 },
    { productId: 3, productName: "Хар цамц", shop_id: 1, category: 1 },
    { productId: 4, productName: "Будаа агшаагч", shop_id: 1, category: 2 },
    { productId: 5, productName: "Хутга", shop_id: 2, category: 2 },
    { productId: 6, productName: "Аяга", shop_id: 1, category: 2 },
];

let shops = [
    { id: 1, name: "Номин" },
    { id: 2, name: "Улаанбаатар" },
    { id: 3, name: "Сансар" },
];

// Эхлээд тухайн нэг барааны мэдээлэл харуулах
// Сонгосон барааны дэлгүүрийн мэдээллийг харуулах
// Тухайн дэлгүүрээс нэг ангилалд байгаа бусад барааг харуулах
//category - Хувцас -1, Гэр ахуйн бараа -2, Хэрэглээ - 3

let choosenOne = Math.floor(Math.random() * 6);
let choosenOnesStore = "";
let sameProductChoosenOneInSameStore = "";

function findStore(product) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].productId == product) {
            choosenOnesStore = products[i].shop_id
        } esle {
            alert("tanii songoson baraa ali neg delguur baihgui bn")
        }
    }
}

function findStore_promise(shop_id) {
    // for (let i=0; i<products.length; i++)
    let prom = new Promise((resolve, reject) => {

        for (let i = 0; i < shops.length; i++) {



            if (shops[i].id == shop_id) {

                resolve(shops[i])
                // choosenOne sStore = products[i].shop_id
            } else {
                reject("error")
                alert("tanii songoson baraa ali neg delguur baihgui bn")
            }
        }
    });

    return prom;
}



prom.then((res) => {
    console.log(res);
})
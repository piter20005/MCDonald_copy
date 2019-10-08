let elements = document.getElementsByClassName("menu-option");
let finalPrice = 0;
let finalName = "";
let resultBasket = document.getElementById("result");
let resultCheck = document.getElementById("resultCheck");
let resultImage = document.getElementById("resultImage");
let burgers = {
    "first":{
        name:'cheeseburger',
        description: "Dla serowych smakoszy! Gdy do zwykłego hamburgera dodasz ser cheddar, otrzymasz pysznego burgera, który ucieszy każde podniebienie.",
        price: 10,
    },
    "second":{
        name:'chicker',
        description: "Oryginalny smak kurczaka w panierce z sosem miodowo-musztardowym. Do tego krucha sałata i pszenna bułka z kaszką kukurydzianą. Dobrze wymyślony burger z myślą o Tobie!",
        price: 5
    },
    "third":{
        name:"filet-o-fish",
        description: "Złów coś na ząb! Panierowana ryba, ser cheddar, a do tego – sos tatarski. Nie trzeba wypływać na głębokie wody, aby skosztować tego wyjątkowego smaku.",
        price: 8},
    "fourth":{
        name: "kurczakburger",
        description: "Niepowtarzalny sos paprykowo-pomidorowy, panierowane mięso z kurczaka i krojona sałata... Czy masz już na niego ochotę?",
        price: 6},
    "fifth":{
        name: "bigmac",
        description: "Tego burgera nie trzeba Wam przedstawiać! Od lat niezmiennie zachwyca dwoma kawałkami soczystej 100% wołowiny, świeżymi warzywami i sekretnym sosem. Ilekroć przyjdziesz do McDonald's, on zawsze będzie na Ciebie czekał.", 
        price: 12},
    "sixth":{
        name: "mcchicken",
        description: "Rozkoszuj się soczystym kurczakiem w chrupiącej panierce, z kruchą sałatą i sosem majonezowym. To chyba najsłynniejszy kurczak w McDonald's!", 
        price: 10},
    "seventh":{
        name: "mcdouble",
        description: "Koneserzy wołowiny bardzo chętnie wybierają tego burgera. Znajdziesz w nim aż 2 plastry 100% wołowiny, a do tego ser cheddar, cebulę, keczup i musztardę. Na większy apetyt.", 
        price: 9},
    "eighth":{
        name: "mcroyal",
        description: "Ten królewski smak od lat rządzi w McDonald's. Urzeka soczystą 100% wołowiną i topionym serem cheddar. To harmonia prostoty i wykwintności.", 
        price: 10},
    "nineth":{
        name: "wiesmac",
        description: "Coś dla wielbicieli sielskiego życia! 100% wołowiny w towarzystwie świeżych warzyw, a wszystko w sosie musztardowo-chrzanowym. Ten smak rządzi w mieście!", 
        price: 10},
}
elements[0].innerHTML += "<h2>" + burgers.first.name.toUpperCase() + "</h2> "+"<p>"+ burgers.first.description + "</p>"+"<p>"+burgers.first.price +  " zł</p>";
elements[1].innerHTML += "<h2>" + burgers.second.name.toUpperCase() + "</h2> "+"<p>"+ burgers.second.description + "</p>"+"<p>"+burgers.second.price + " zł</p>";
elements[2].innerHTML += "<h2>" + burgers.third.name.toUpperCase() + "</h2> "+"<p>"+ burgers.third.description + "</p>"+"<p>"+burgers.third.price + " zł</p>";
elements[3].innerHTML += "<h2>" + burgers.fourth.name.toUpperCase() + "</h2> "+"<p>"+ burgers.fourth.description + "</p>"+"<p>"+burgers.fourth.price + " zł</p>";
elements[4].innerHTML += "<h2>" + burgers.fifth.name.toUpperCase() + "</h2> "+"<p>"+ burgers.fifth.description + "</p>"+"<p>"+burgers.fifth.price + " zł</p>";
elements[5].innerHTML += "<h2>" + burgers.sixth.name.toUpperCase() + "</h2> "+"<p>"+ burgers.sixth.description + "</p>"+"<p>"+burgers.sixth.price + " zł</p>";
elements[6].innerHTML += "<h2>" + burgers.seventh.name.toUpperCase() + "</h2> "+"<p>"+ burgers.seventh.description + "</p>"+"<p>"+burgers.seventh.price + " zł</p>";
elements[7].innerHTML += "<h2>" + burgers.eighth.name.toUpperCase() + "</h2> "+"<p>"+ burgers.eighth.description + "</p>"+"<p>"+burgers.eighth.price + " zł</p>";
elements[8].innerHTML += "<h2>" + burgers.nineth.name.toUpperCase() + "</h2> "+"<p>"+ burgers.nineth.description + "</p>"+"<p>"+burgers.nineth.price + " zł</p>";
function orderList (name, price){
    let priceDiv = document.getElementById("endprice");
    let table = document.getElementsByTagName("table");
    let createRow = document.createElement("tr");
    let createCell = document.createElement("td");
    let cellId = document.getElementsByTagName("td").length;
    finalPrice +=price;
    createRow;
    createCell.setAttribute('id',cellId);
    createCell.innerHTML = name;
    table[0].appendChild(createRow);
    createRow.appendChild(createCell);
    let x = createRow.insertCell(0);
    x.innerHTML = price + " zł";
    priceDiv.innerHTML = "Cena końcowa: " + finalPrice + " zł";
    // finalName +="\n"+name+' cena: '+ price;
    // resultCheck.innerHTML += "<p>"+finalName+"</p>";
    // resultCheck.innerHTML += 'Łączna kwota zamówienia: '+finalPrice;
}
elements[0].addEventListener("click",()=>{
    orderList(burgers.first.name,burgers.first.price);
});
elements[1].addEventListener("click",()=>{
    orderList(burgers.second.name,burgers.second.price);
});
elements[2].addEventListener("click",()=>{
    orderList(burgers.third.name,burgers.third.price);
})
elements[3].addEventListener("click",()=>{
    orderList(burgers.fourth.name,burgers.fourth.price);
})
elements[4].addEventListener("click",()=>{
    orderList(burgers.fifth.name,burgers.fifth.price);
})
elements[5].addEventListener("click",()=>{
    orderList(burgers.sixth.name,burgers.sixth.price);
})
elements[6].addEventListener("click",()=>{
    orderList(burgers.seventh.name,burgers.seventh.price);
})
elements[7].addEventListener("click",()=>{
    orderList(burgers.eighth.name,burgers.eighth.price);
})
elements[8].addEventListener("click",()=>{
    orderList(burgers.nineth.name,burgers.nineth.price);
})
resultImage.addEventListener("click",closeBasketA());
function openBasketA(){
    resultBasket.style.height = "500px";
    resultBasket.style.width = "300px";
    resultBasket.style.borderRadius = "10px";
    resultImage.style.display = "none";
    resultCheck.style.display = "flex";
    resultBasket.style.overflowY = "scroll";
}

function closeBasketA() {
    resultBasket.style.height = "100px";
    resultBasket.style.width = "100px";
    resultBasket.style.borderRadius = "100px";
    resultImage.style.display = "block";
    resultCheck.style.display = "none";
    resultBasket.style.overflowY = "hidden";
}

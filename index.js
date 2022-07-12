let corpoSite = document.querySelector("body")

let partePrincipalSite = document.createElement("main")
partePrincipalSite.id = "partePrincipal"

let tituloSite = document.createElement("h1")
tituloSite.innerHTML = "Feira Virtual" 
partePrincipalSite.appendChild(tituloSite)

let divItemValor = document.createElement("div")
let itemDiv = document.createElement("span")
let valorDiv = document.createElement("span")
divItemValor.id = "itemValor"
itemDiv.innerHTML = "Item"
valorDiv.innerHTML = "Valor"
divItemValor.appendChild(itemDiv)
divItemValor.appendChild(valorDiv)
partePrincipalSite.appendChild(divItemValor)

let products = []

function createProduct(imageProduct, idProduct, nameProduct, priceProduct){
    let product = {
        image: imageProduct,
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
    }
    products.push(product)
    return products
}
createProduct("./assets/img/abacate.jpg", 0, "Abacate", "2.50")
createProduct("./assets/img/banana.jpg", 1, "Banana", "5.00")
createProduct("./assets/img/caju.jpg", 2, "Caju", "1.99")
createProduct("./assets/img/cebola.jpg", 4, "Cebola", "1.49")
createProduct("./assets/img/melancia.jpg", 5, "Melancia", "7.00")
createProduct("./assets/img/melaoamarelo.jpg", 6, "Melão", "5.00")
createProduct("./assets/img/pastel.png", 8, "Pastel", "5.00")
createProduct("./assets/img/pimenta.jpg", 9, "Pimenta", "3.50")
createProduct("./assets/img/tomatecomum.jpg", 10, "Tomate", "1.20")

let productList  = document.createElement("ul")

function listarProdutos(listaProdutos){
    for(let i = 0; i<listaProdutos.length; i++){
       let produto = listaProdutos[i]
       let cardProduto   = criarCardProduto(produto)
       if(listaProdutos == products){
        productList.appendChild(cardProduto)
       }
   }
   partePrincipalSite.appendChild(productList)
   corpoSite.appendChild(partePrincipalSite)
}
listarProdutos(products)

function criarCardProduto(produto){
    let imagemCard        = produto.image
    let idCard            = produto.id 
    let nomeCard          = produto.name
    let valorCard         = produto.price

    let productDetails       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("span")
    let tagDiv = document.createElement("div")

    tagDiv.id = "inforProdutos"
    productDetails.id    = idCard
    tagImge.src          = imagemCard
    tagImge.alt          = nomeCard
    tagNome.innerText    = nomeCard
    tagPreco.innerText   = `R$ ${valorCard}`

    tagDiv.appendChild(tagImge)
    tagDiv.appendChild(tagNome)
    productDetails.appendChild(tagDiv)
    productDetails.appendChild(tagPreco)

    return productDetails
}

function soma(products){
  
    let total = 0
    for (let i = 0; i <products.length; i++) {
        let precoProduto = products[i].price
        let x = parseFloat(precoProduto)
        total += x
    }

    return total.toFixed(2)
}

let valorFinal = soma(products)

let divTotal = document.createElement("div")
let totalTexto = document.createElement("p")
let totalValor = document.createElement("p")
divTotal.id = "divTotal"
totalTexto.innerHTML = "Total"
totalValor.innerHTML = `R$ ${valorFinal}`
divTotal.appendChild(totalTexto)
divTotal.appendChild(totalValor)
partePrincipalSite.appendChild(divTotal)

let buttonEnd = document.createElement("button")
buttonEnd.innerHTML = "Finalizar Compra"
partePrincipalSite.appendChild(buttonEnd)
let corpoSite = document.querySelector("body")

let partePrincipalSite = document.createElement("main")
partePrincipalSite.id = "partePrincipal"
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
createProduct("./assets/img/banana.jpg", 1, "Palma da Banana", "5.00")
createProduct("./assets/img/caju.jpg", 2, "Caju", "1.99")
createProduct("./assets/img/caldocana.jpg", 3, "Caldo de Cana", "3.50")
createProduct("./assets/img/cebola.jpg", 4, "Cebola", "1.49")
createProduct("./assets/img/melancia.jpg", 5, "Melancia", "7.00")
createProduct("./assets/img/melaoamarelo.jpg", 6, "Melão Amarelo", "5.00")
createProduct("./assets/img/melaolaranja.jpg", 7, "Melão Laranja", "5.50")
createProduct("./assets/img/pastel.png", 8, "Pastel de Carne", "5.00")
createProduct("./assets/img/pimenta.jpg", 9, "Pimenta", "0.50")
createProduct("./assets/img/tomatecomum.jpg", 10, "Tomate Comum", "1.20")

let ulProducts = document.createElement("ul")

function listarProdutos(listaProdutos){
    for(let i = 0; i<listaProdutos.length; i++){
       let produto = listaProdutos[i]
       let cardProduto   = criarCardProduto(produto)
       if(listaProdutos == products){
        ulProducts.appendChild(cardProduto)
       }
   }
   partePrincipalSite.appendChild(ulProducts)
   corpoSite.appendChild(partePrincipalSite)
}
listarProdutos(products)

function criarCardProduto(produto){
    let imagemCard        = produto.image
    let idCard            = produto.id 
    let nomeCard          = produto.name
    let valorCard         = produto.price

    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("span")

    tagLi.id             = idCard
    tagImge.src          = imagemCard
    tagImge.alt          = nomeCard
    tagNome.innerText    = nomeCard
    tagPreco.innerText   = valorCard

    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}

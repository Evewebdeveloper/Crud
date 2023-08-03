var productName = document.getElementById('pName')
var productPrice = document.getElementById('pPrice')
var productCategory = document.getElementById('pCategory')
var productDesc = document.getElementById('pdesc')
var addBtn = document.getElementById('addBtn')
var updatedIndex=0

// Add (creat) El Products
var allProducts=[]

function addProducts() {
    if(addBtn.innerHTML=='Add Product'){

        var product ={
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            des: productDesc.value
        }
    allProducts.push(product)
    localStorage.setItem('product',JSON.stringify(allProducts))
    clearData()
    displayProducts()

    }
    else{
updateData()
    }
   
}

//  display(read) el product

function displayProducts() {

var cartona=''
for (var i=0 ; i<allProducts.length ; i++){
cartona=cartona+`<tr>
<td>${i}</td>
<td>${allProducts[i].name}</td>
<td>${allProducts[i].price}</td>
<td>${allProducts[i].category}</td>
<td>${allProducts[i].des}</td>
<td><button onclick="getValues(${i})" class="btn btn-warning">Update</button></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
</tr>`
}
document.getElementById('tData').innerHTML=cartona

}

//  Update(update) el product

function getValues(index){
    updatedIndex=index
    productName.value=allProducts[index].name
    productPrice.value=allProducts[index].price
    productCategory.value=allProducts[index].category
    productDesc.value=allProducts[index].des
    addBtn.innerHTML='update'

}

function updateData(index){
    var updatedProduct={
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        des: productDesc.value
    }
    allProducts.splice(  updatedIndex,1,updatedProduct)
    displayProducts()
    localStorage.setItem('product',JSON.stringify(allProducts))
addBtn.innerHTML=('Add Product')
}

function deleteProduct(index){
    allProducts.splice(index,1)
    console.log(allProducts);
    displayProducts()
    localStorage.setItem('product',JSON.stringify(allProducts))
    }


    // clearData

function clearData(){
    productName.value=''
    productPrice.value=''
    productCategory.value=''
    productDesc.value=''
}

// search

function search() {
    var cartona=''
    var term=document.getElementById('searchValue').value
    for( var i=0 ; i<allProducts.length ;  i++){
if(allProducts[i].name.includes(term)){
    cartona=cartona+`<tr>
    <td>${i}</td>
    <td>${allProducts[i].name.replace(term,`<span class='bg-info'>${term}</span>`)}</td>
    <td>${allProducts[i].price} </td>
    <td> ${allProducts[i].category}</td>
    <td> ${allProducts[i].desc}</td>
    <td><button onclick='updateProducts(${i})' class="btn btn-warning">Update</button></td>
    <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td>
     </tr>`
}
    }
    document.getElementById('tData').innerHTML=cartona
}var x=''
x.includes()
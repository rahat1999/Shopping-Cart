function updateProductNumber(product,price,isIncrising){
    const productInput = document.getElementById(product +'-number');
    let productNumber =parseInt(productInput.value);
    if(isIncrising==true){
        productNumber = productNumber+1;
    }
    else if(productNumber>0){
        productNumber = productNumber-1;//caseNumber--
    }
    productInput.value = productNumber;
    // update  total
    const productTotal= document.getElementById(product +'-total');
    productTotal.innerText =productNumber * price;
    //calucate total
    calculateTotal()
}
//update end
function getInputValue(product){
    const productInput =document.getElementById(product +'-number');
    const phoneNumber =parseInt(productInput.value);
    return phoneNumber;
}

function calculateTotal(){ 
     const phoneTotal = getInputValue('phone') * 1219;
     const caseTotal = getInputValue('case') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax =subTotal/10
     const totalPrice = subTotal + tax;
    //  update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-ammount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}

//handle phone incrise dicrise event

document.getElementById("phone-plus").addEventListener('click',function(){
updateProductNumber('phone',1219,true);
});

// phone minus
document.getElementById("phone-minus").addEventListener('click',function(){
updateProductNumber('phone',1219,false);
});

//handale case increse decrise event
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true)
  });
  // case minus
  document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
    
  });

 
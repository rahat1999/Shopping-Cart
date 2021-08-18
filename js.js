function updateProductNumber(product,price,isIncrising){
    const caseInput = document.getElementById(product +'-number');
    let caseNumber =parseInt(caseInput.value);
    if(isIncrising==true){
        caseNumber = caseNumber+1;//caseNumber++
    }
    else if(caseNumber>0){
        caseNumber = caseNumber-1;//caseNumber--
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal= document.getElementById(product +'-total');
    caseTotal.innerText =caseNumber * price;
}
// phone incrise dicrise event
document.getElementById("phone-plus").addEventListener('click',function(){
updateProductNumber('phone',1219,true)

});
// phone minus
document.getElementById("phone-minus").addEventListener('click',function(){
updateProductNumber('phone',1219,false)

})

//handale case increse decrise event
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true)
  });
  // case minus
  document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false)
    
  });
function rot13(str) {
    let alfaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
    let cipher = "";
    for (const i of str.split('')) {
        let index = alfaArray.indexOf(i);
        if(index== -1){
           cipher += i;
        }else{
            index += 13;
            if(index > 25){
                index = index % 26;
            }
            cipher += alfaArray[index];
        }
    }
    console.log(cipher);
    return cipher;
}
  
rot13("SERR PBQR PNZC");
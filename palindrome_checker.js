function palindrome(str) {
    let s = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let arr = s.split("");
    let rev = arr.reverse().join("");
    
    if(s===rev){
        return true;
    }else{
        return false;
    }
}
  
palindrome("_eye");
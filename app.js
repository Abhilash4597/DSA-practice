//  =====================================================question-58 ===========================================================

var lengthOfLastWord = function(s) {
    let str=s.trim();
    let count=0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i]!==" "){
            count++;
        }else{
            return count;
        }
    }
    return count;
    // check the test case for non alphabet and numbers also
};
console.log(lengthOfLastWord("hello world"))
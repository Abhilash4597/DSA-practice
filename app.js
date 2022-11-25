// ============================================================question-1 ==============================================================================================

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
    return -1
};
console.log(twoSum([2,7,11,15],9));

// ============================================================question-7 ==============================================================================================

var reverse = function(x) {
    let reverse=0;
    let positiveNum = Math.abs(x);
    while(positiveNum>0){
        let rem = positiveNum % 10;
        reverse = (reverse * 10) + rem;
        positiveNum = Math.floor(positiveNum/10);
    } 
    if(reverse >= 2**31-1||reverse <= -(2**31)){
        return 0;
    }else if(x < 0){
        return -reverse;
    }else{
        return reverse;
    }
};
console.log(123);

// ============================================================question-9 ==============================================================================================

var isPalindrome = function(x) {
    let num="";
    let digit = x;
    while(digit>0){
        let rem = digit%10;
        num += rem;
        digit = Math.floor(digit/10);
    }
    if(num==x){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(234));

// ============================================================question-34 ==============================================================================================

var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let firstIndex = -1;
    let ansArr = [];
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(target == nums[mid]){
            firstIndex = mid;
            right = mid -1;

        }else if (target > nums[mid]){
            left = mid + 1;
        }else{
            right = mid -1
        }
    }
    
    let lastIndex = -1;
    left = firstIndex;
    right = nums.length-1;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(target == nums[mid]){
         lastIndex = mid;
         left = mid + 1

        }else if (target > nums[mid]){
            left = mid + 1;
        }else{
            right = mid -1
        }
    }
    ansArr.push(firstIndex,lastIndex)
    return ansArr;
};
console.log(searchRange([5,7,7,8,8,10],8));

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
console.log(lengthOfLastWord("hello world"));

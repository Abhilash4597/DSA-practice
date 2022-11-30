// ============================================================question-1 ===============================================================================

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
    return -1;
};
console.log(twoSum([2,7,11,15],9));

// ============================================================question-7 =================================================================================
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

// ============================================================question-9 ==================================================================================

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

// ============================================================question-20 ==================================================================================

var isValid = function(str) {
    let arr=[];
    for(let i=0;i<str.length;i++){
        if(str[i]=="(" || str[i]=="{" || str[i]=="[" ){
            arr.push(str[i]);
        }else if(str[i]==")" && arr[arr.length-1]=="(" || str[i]=="}" && arr[arr.length-1]=="{" || str[i]=="]" && arr[arr.length-1]=="["){
            arr.pop();
        }else{
            return false;
        }
    }
    if(arr.length==0){
        return true;
    }else{
        return false;
    }
};
console.log(isValid("()[]{}"));

// ============================================================question-26 =================================================================================

var removeDuplicates = function(nums) {
    let j=0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==nums[i+1]){
                nums[j]=nums[i];
                j++;
            }
        }
        return j;
};
console.log(removeDuplicates([1,1,2]));

// ============================================================question-27 =================================================================================

var removeElement = function(nums, val) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[j]=nums[i];
            j++;
        }
    }
    return j;
};
console.log(removeElement([3,2,2,3],3));

// ============================================================question-33 =================================================================================

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
     
    while(left <= right) {
        let mid = left + Math.floor((right - left)/2);
        
        if(nums[mid] == target) {
            return mid;
        }
        
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        } else {
            if( nums[right] >= target && target > nums[mid]) {
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
 };
 console.log(search([4,5,6,7,0,1,2],3));

// ============================================================question-34 =================================================================================

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

//  =====================================================question-58 =======================================================================================

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


// ============================================================question-66 =================================================================================

let plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i]>9){
            digits[i]=0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
console.log(plusOne([1,2,3]));

// ============================================================question-75 =================================================================================

var sortColors = function(nums) {
    for(let i=0;i<nums.length;i++){
        let min = i;
        for(let j=i;j<nums.length;j++){
            if(nums[j]<nums[min]){
                min=j;
            }
        }
        [nums[i],nums[min]]=[nums[min],nums[i]];
    }
    return nums;
};
console.log(sortColors([2,0,2,1,1,0]));
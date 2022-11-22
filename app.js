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
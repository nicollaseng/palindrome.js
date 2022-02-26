function verifyPalindrome(str){
	if(str.length >= 2) {
  let isPalindrome = 'none'
  	const reversed = str.split("").reverse().join("")
    isPalindrome = str === reversed
    if(isPalindrome) return isPalindrome
    else {
    	let currentLongest = [0, 1];

    for (let i=1; i< s.length; i++){
        const odd = moveFromCenter(s, i-1, i+1);
        const even = moveFromCenter(s, i-1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = currentLongest[1] - currentLongest[0] > longest [1] - 				 longest[0] ?  currentLongest : longest
    }
   	 return s.slice(currentLongest[0], currentLongest[1]);
	};

	function moveFromCenter(s, leftIdx, rightIdx){
    while (leftIdx >= 0 && rightIdx < s.length){
        if(s[leftIdx] !== s[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    	}
    	return [leftIdx + 1, rightIdx]
    }
  }
}

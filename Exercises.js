//Question 1
function myReverse(str) {
  {
      str = str + "";
      return str.split("").reverse().join("");
    }
  }

//Question 2
function allCombinations(str) {
	let combinations = [];
	let temp = "";
	for (let i = 0; i < str.length; i++) {
		temp = "";
		for (let j = i; j < str.length; j++) {
			temp += str[j];
			combinations.push(temp);
		}
	}
	return combinations;
}
    


//Question 3
function allCaps(str) {
  words = str.toLowerCase().split(' ');

  for(let i = 0; i < words.length; i++) {
       let letters = words[i].split('');
       letters[0] = letters[0].toUpperCase();
       words[i] = letters.join('');
  }
  return words.join(' ');
}

//Question 4
function myPower(x, n) 
  {
    let power = 1;
    for (let i =1; i <= n; i++)
    {
      power = x * power;        
    }
    return power;
}


//Question 5
function getFirstNotRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    if (str.indexOf(first) == i && str.indexOf(first, i + 1) == -1) {
      return first;
    }
  }
  return result;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return num === sum;
}


// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;

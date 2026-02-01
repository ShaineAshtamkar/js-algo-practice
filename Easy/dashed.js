/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(text) {
  //your code
  dashed = ""
  const vowels = "aeiouAEIOU";
  for (let l = 0; l < text.length; l++) {
    if (vowels.includes(text[l])) {
      dashed = dashed + "-" + text[l] + "-";
    }
    else {
      dashed = dashed + text[l]
    }


  }
  return dashed;

}

exports.solution = dashed;  
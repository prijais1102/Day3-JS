/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
	// Write your code here
        for (let i = 0; i < num; i++) {
                var output = '';
                for (let j =0; j < num - i; j++) output += ' ';
                for (let k = 0; k <= i; k++) output += '* ';
                console.log(output);  
        } 
};
buildPyramid(6)

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/


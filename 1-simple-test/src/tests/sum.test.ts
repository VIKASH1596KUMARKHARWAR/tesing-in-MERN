import {describe, expect, it, test} from '@jest/globals';
import {multiply, sum} from '../index';

describe('sum module', () => {
  // test('adds 1 + 2 to equal 3', () => {
  //   expect(sum(1, 2)).toBe(3);

  // or  alternatively
  it('add 1 + 2 to equal 3',()=>{
    const finalAnswer = sum(1,2);
    expect(finalAnswer).toBe(3);
  })


  it('should return the sum of negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });


}); 


/*You can stick to one testing method, either it or test. 
In this case, it is used consistently for better readability.
The comments within the code have been removed since you 
don't need them for functionality.
The describe block is correctly grouping the tests for the sum module */

//test or it any one can be used 

describe("testing the multiply function",()=>{
  it("should multiply 1 and 2 correctly",()=>{
    expect(multiply(1,2)).toBe(2);
  })
});
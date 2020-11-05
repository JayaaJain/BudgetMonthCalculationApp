/**
 * For implementing modules we need data encapsulation and 
 * we can implemetent encap with the help IIFE : Immediately 
 * invoked function expressions and Closures : let's you use props 
 * of parent function even after the function has returned
 */

///////////////* Data and budget control Model *\\\\\\\\\\\\\\\\
var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            // console.log(add(b));
            return add(b);
        }
    }
})();

///////////////* UI Model *\\\\\\\\\\\\\\\\
var UIController = (function() {

})();


/**
 * Separation of concerns : Since budgetController & UIController
 * are separate so we need appController to make them interact
*/

///////////////* AppController Module *\\\\\\\\\\\\\\\\
var controller = (function(budgetCtrl, UICtrl) {

   var z = budgetCtrl.publicTest(5);

   return {
       anotherPublic: function() {
           console.log(z);
       }
   }
})(budgetController, UIController);
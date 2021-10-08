//////// Timing Out ///////

// function helloMsg(message) {
//     console.log(message);  
// } 

// helloMsg('Cats are Great!');

// setTimeout ( () =>  {
//     helloMsg('I said CATS ARE GREAT!');
// }, 2000);

// /////////////////////////////

// function getWords(word) {
//     console.log(word);
// }

// getWords('one')

// setTimeout ( () =>  {
//     helloMsg('two');
// }, 3000);

// setTimeout ( () =>  {
//     helloMsg('three');
// }, 5000);

// setTimeout ( () =>  {
//     helloMsg('four');
// }, 6000);

//////////////////////////////

///////Callbacks and Recursion///////

// function done() {
//     console.log("Job's done!")

// };

// done();

const countdown = (num, callback) => {

    setTimeout(() => {
        
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback);
        } else {
            callback();
        }

    }, 1000);

};

const isDone = () => {
    console.log("Dun Dun Dunn!");
};

countdown(5, isDone);

///////////////////////////////////////////////////////////

const lunchTime = true

const orderMeSomeFood = () => 
{
    return new 
    Promise((resolve, reject)
    {

    });
};
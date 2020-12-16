import React, {useEffect} from 'react';

const JSTesting = () => {

    const testingFunction = () => {

        // Converting object to an array
        const zoo = {
            lion: '🦁',
            panda: '🐼',
          };
        const zooObjKeys =  Object.keys(zoo);
          // ['lion', 'panda']
          
        const zooObjValues =  Object.values(zoo);
          // ['🦁', '🐼']
          
        const zooObjentries = Object.entries(zoo);
          // [ ['lion', '🦁'], ['panda', '🐼'] ]

        console.log('zooObjKeys', zooObjKeys);
        console.log('zooObjValues', zooObjValues);
        console.log('zooObjentries', zooObjentries);

        // Looping over objects -- This is a older way to looping through object. But now we have Object.entries, Object.keys and Object.values
        var numbers = {
            one: 1,
            two: 2,
          };
          
        const keys = [];
          
          for (var number in numbers) {
            if (numbers.hasOwnProperty(number)) {
              keys.push(number);
            }
          }
          
        console.log('keys' , keys); // [ 'one', 'two' ]

        // Object entries + Destructuring
        const numbers1 = {
            one: 1,
          };
          
          const objectArray = Object.entries(numbers1);
          
          objectArray.forEach(([key, value]) => {
            console.log(key); // 'one'
            console.log(value); // 1
          });

        // Convert Array back to an object 
        const array = [
            ['one', 1],
            ['two', 2],
          ];
          
        const backObj = Object.fromEntries(array);
        console.log(backObj);
          // { one: 1, two: 2 }
    };

    useEffect(()=> {
        testingFunction();
    },[]);

    return (
        <div>
            <h1>For JS Testing</h1>
        </div>
    )
}

export default JSTesting

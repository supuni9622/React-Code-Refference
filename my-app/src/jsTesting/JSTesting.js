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

    const testingFunction2 = () => {
        // Converting a Map to an object --- this is not working
        var object = {}
        var map = new Map([ 
            [ "a", "one"], 
            [ "b" , "two"], 
            [ "c", "three"]
            //[ "d" : new Map([ [ "e": "four"] ]) ]
            ])
     
            const mapToObject = (object, map) => {
                for(let[key,value] of map) { object[key] = value }
            }
        console.log(JSON.stringify(mapToObject(object, map), null, ' '));


        //Converting an object to a Map
        const o3 = {
            "a": "one",
            "b": "two",
            "c": "three",
            "d": { "e": "four"}
        };
  

        function objectToMap(o) {
            let m = new Map()
            for(let k of Object.keys(o)) {
                if(o[k] instanceof Object) {
                    m.set(k, objectToMap(o[k]))   
                }
                else {
                    m.set(k, o[k])
                }    
            }
            return m
        }
  
        var m2 = objectToMap(o3);
        console.log(m2.get("d").get("e"));
        console.log(m2);
    };

    useEffect(()=> {
        //testingFunction();
        testingFunction2();
    },[]);

    return (
        <div>
            <h1>For JS Testing</h1>
        </div>
    )
}

export default JSTesting

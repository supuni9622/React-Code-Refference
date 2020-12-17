import React, {useEffect} from 'react';

const data = {"collected":[{"collectedDate":"2020-12-11","totalCollectedPoints":0},{"collectedDate":"2020-12-11","totalCollectedPoints":88.39},{"collectedDate":"2020-12-11","totalCollectedPoints":90.06},{"collectedDate":"2020-12-11","totalCollectedPoints":85.76},{"collectedDate":"2020-12-11","totalCollectedPoints":92.63},{"collectedDate":"2020-12-11","totalCollectedPoints":60.54},{"collectedDate":"2020-12-11","totalCollectedPoints":51.64},{"collectedDate":"2020-12-14","totalCollectedPoints":8.33},{"collectedDate":"2020-12-14","totalCollectedPoints":92.46},{"collectedDate":"2020-12-14","totalCollectedPoints":47.14},{"collectedDate":"2020-12-14","totalCollectedPoints":74.85},{"collectedDate":"2020-12-14","totalCollectedPoints":16.78},{"collectedDate":"2020-12-14","totalCollectedPoints":98.04}],"redeemed":[{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-11","totalRedeemedPoints":10},{"redeemedDate":"2020-12-14","totalRedeemedPoints":10},{"redeemedDate":"2020-12-14","totalRedeemedPoints":10},{"redeemedDate":"2020-12-14","totalRedeemedPoints":10},{"redeemedDate":"2020-12-14","totalRedeemedPoints":10},{"redeemedDate":"2020-12-14","totalRedeemedPoints":10}]};

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

    const testingFunction3 = () => {
        //convert nested array pairs to objects in an array
        const arr = [
            [
               ['firstName', 'Joe'],
               ['lastName', 'Blow'],
               ['age', 42],
               ['role', 'clerk'],
               [
                  ['firstName', 'Mary'],
                  ['lastName', 'Jenkins'],
                  ['age', 36],
                  ['role', 'manager']
               ]
            ]
         ];

         const convertToObject = (arr = []) => {
            const empty = {};
            const res = arr.map(el => {
               const object = {};
               el.forEach(attr => {
                  let name = attr[0], value = attr[1];
                  object[name] = value;
                  return object;
               }, object);
               return object;
            }, empty);
            return res;
         }
         console.log(convertToObject(arr));

         //Output
        //  [
        //     {
        //        firstName: 'Joe',
        //        lastName: 'Blow',
        //        age: 42,
        //        role: 'clerk',
        //        'firstName,Mary': [ 'lastName', 'Jenkins' ]
        //     }
        //  ]

    };

    const testingFunction4 = () => {
        //Convert object of objects to array
        const playerRating = {
            'V Kohli':{
                  batting: 99,
               fielding: 99
            },
            'R Sharma':{
               batting: 98,
               fielding: 95
            },
            'S Dhawan':{
               batting: 92,
               fielding: 90
            }
         }
         const objArray = [];
         Object.keys(playerRating).forEach(key => objArray.push({
            name: key,
            rating: playerRating[key]
         }));
         console.log(objArray);

         // Output
        //  [
        //     { name: 'V Kohli', rating: { batting: 99, fielding: 99 } },
        //     { name: 'R Sharma', rating: { batting: 98, fielding: 95 } },
        //     { name: 'S Dhawan', rating: { batting: 92, fielding: 90 } }
        //  ]

    }

    const testingFunction5 = () => {
        // Enterprise loyalty analytics- chart data format 
        const transformedCollected=data.collected.reduce((result,{collectedDate,totalCollectedPoints=0})=>{

            result[collectedDate]={date:collectedDate,collected:totalCollectedPoints,redeemed:0}
            return result;
            },{})
            
            const transformed=data.redeemed.reduce((result,{redeemedDate,totalRedeemedPoints})=>{
            if(result[redeemedDate]){
            result[redeemedDate].redeemed=totalRedeemedPoints;
            }else{
            result[redeemedDate]={
            date:redeemedDate,
            collected:0,
            redeemed:totalRedeemedPoints
            };
            }
            
            return result;
            
            },transformedCollected)
            
            console.log(transformed);

            const transformedArray = Object.values(transformed);

            console.log(transformedArray);
    }

    useEffect(()=> {
        //testingFunction();
        //testingFunction2();
        //testingFunction3();
        //testingFunction4();
        testingFunction5();
    },[]);

    return (
        <div>
            <h1>For JS Testing</h1>
        </div>
    )
}

export default JSTesting

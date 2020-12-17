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

    const testingFunction6 = () => {
        //Iterate over objects
        // 1st case
        const obj = { a: 1, b: 2 };

        for (const key in obj) {
            console.log("key", key);
            console.log("value", obj[key]);
        }

        // 2nd case
        const user = {
            name : 'Supuni',
            age : 45,
            scl : 'FHS'
        }
        const ageExists = Object.keys(user).includes("age");
        console.log('ageExists ? ', ageExists);

        // 3rd case
        const values = Object.keys(user).map((key) => user[key]);
        console.log(values);

        // 4th case
        Object.keys(user).map((key) => console.log('Test: ', user[key]));

        // 5th case
        const monthlyExpenses = {
            food: 400,
            rent: 1700,
            insurance: 550,
            internet: 49,
            phone: 95,
          };

          const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense,
            0);
          
          console.log('Monthly Total : ' , monthlyTotal);

          // 6th case
          const users = {
            "1": {
              name: "John",
              age: 29,
            },
            "2": {
              name: "Jane",
              age: 42,
            },
            "3": {
              name: "Fred",
              age: 17,
            },
          };

          const objEntries = Object.entries(users)

          console.log(objEntries);
          console.log(objEntries[0]);

          objEntries.map((key) => console.log('Test1: ', key[0], 'Test2: ',  key[1]));

          // 7th case : Replacing MAP/ FILTER with a single REDUCE

          const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
            if (user.age > 20) {
                acc.push({ ...user, id })
            }
            return acc;
          }, []);

          console.log(usersOver20);

          // Output
        //   [
        //       {
        //           name : 'John',
        //           age : 29,
        //           id : '1'
        //     },
        //     {
        //         name : 'Jane',
        //         age : 42,
        //         id : '2'
        //     }
        //   ]
    }

    const testingFunction7 = () => {
        // Convert array of objects to an object of arrays
        const nights = [
            { "2016-06-25": 32, "2016-06-26": 151, "2016-06-27": null },
            { "2016-06-24": null, "2016-06-25": null, "2016-06-26": null },
            { "2016-06-26": 11, "2016-06-27": 31, "2016-06-28": 31 },
         ];

         const arrayToObject = (arr = []) => {
            const res = {};
            for(let i = 0; i < arr.length; i++){
               const keys = Object.keys(arr[i]);
               for(let j = 0; j < keys.length; j++){
                  if(res.hasOwnProperty(keys[j])){
                     res[keys[j]].push(arr[i][keys[j]]);
                  }
                  else{
                     res[keys[j]] = [arr[i][keys[j]]];
                  }
               }
            };
            return res;
         };
         console.log(arrayToObject(nights));

         // OUTPUT
        //  {
        //     '2016-06-25': [ 32, null ],
        //     '2016-06-26': [ 151, null, 11 ],
        //     '2016-06-27': [ null, 31 ],
        //     '2016-06-24': [ null ],
        //     '2016-06-28': [ 31 ]
        //  }


       

    }

    const testingFunction8 = () => {
        //Group objects inside the nested array

        const parentArray = [[
            {
               key: 123,
               value: 'India'
            }, {
               key: 124,
               value: 'USA'
            }, {
               key: 125,
               value: 'Japan'
            }, {
               key: 126,
               value: 'Denmark'
            }, {
                  key: 127,
               value: 'Austria'
            },
         ], [
            {
               key: 124,
               value: 'Kenya'
            }, {
               key: 126,
               value: 'UK'
            }, {
               key: 123,
               value: 'Germany'
            }, {
               key: 127,
               value: 'Spain'
            }, {
               key: 125,
               value: 'Portugal'
            },
         ]];

        const map = {};
        parentArray.forEach(arr => {
            arr.forEach(obj => {
                const { key, value } = obj;
                if(map[key]){
                    map[key].push(value);
                }else{
                    map[key] = [value]
                }
            })
        });
        console.log(map);
    }

    const testingFunction9 = () => {

        //Convert array of arrays to array of objects grouped together
        const data = [
            ['orange', 'fruit'],
            ['red', 'color'],
            ['green', 'color'],
            ['orange', 'color'],
            ['banana', 'fruit'],
            ['blue', 'color'],
            ['lemon', 'fruit'],
            ['mango', 'fruit'],
            ['lemon', 'color'],
         ];

         const groupData = arr => {
            return arr.reduce((acc, val) => {
               const [value, groupName] = val;
               const groupIndex = acc.findIndex(el => el?.group === groupName);
               if(groupIndex !== -1){
                  acc[groupIndex].value.push(value);
               }else{
                  acc.push({
                     group: groupName,
                     value: [value]
                  });
               }
               return acc;
            }, []);
         };
         console.log(groupData(data));

         // OUTPUT 
        //  [
        //     { group: 'fruit', value: [ 'orange', 'banana', 'lemon', 'mango' ] },
        //     {
        //        group: 'color',
        //        value: [ 'red', 'green', 'orange', 'blue', 'lemon' ]
        //     }
        //  ]


         
    }

    const testingFunction10 = () => {
        //convert array into array of objects using map() and reduce() 
        const arr = [
            [
               ['juice', 'apple'], ['maker', 'motts'], ['price', 12]
            ],
            [
               ['juice', 'orange'], ['maker', 'sunkist'], ['price', 11]
            ]
         ];

         const arrayToObject = arr => {
            let res = [];
            res = arr.map(list => {
               return list.reduce((acc, val) => {
                  acc[val[0]] = val[1];
                  return acc;
               }, {});
            });
            return res;
         };
         console.log(arrayToObject(arr));
    }

    useEffect(()=> {
        //testingFunction();
        //testingFunction2();
        //testingFunction3();
        //testingFunction4();
        //testingFunction5();
        //testingFunction6();
        //testingFunction7();
        //testingFunction8();
        //testingFunction9();
        testingFunction10();

    },[]);

    return (
        <div>
            <h1>For JS Testing</h1>
        </div>
    )
}

export default JSTesting

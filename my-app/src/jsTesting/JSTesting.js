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

            console.log(transformedCollected);
            
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

        const data2 = [
         {
           rewardId : 1,
           date: "Dec-12",
           count: 12
         },
         {
           rewardId: 2,
           date: "Dec-14",
           count: 34
         },
         {
           rewardId : 3,
           date: "Dec-15",
           count : 45
         },
         {
            rewardId : 3,
            date: "Dec-12",
            count : 24
          },
          {
            rewardId : 3,
            date: "Dec-14",
            count : 100
          },
          {
            rewardId : 4,
            date: "Dec-14",
            count : 500
          }
       ];

       const transformedTest=data2.reduce((result,{rewardId,date, count})=>{

         result[date]={date:date, [rewardId]: count}
         return result;
         },{})

         console.log(transformedTest);
         
         const transformedTest2=data2.reduce((result,{rewardId,date, count})=>{
         if(result[date] && !result[rewardId]){
            result[date][rewardId]=count;
         }else{
            result[date]={
               date:date,
               [rewardId]: count
            }
         };
         
         return result;
         
         },transformedTest);
         
         console.log(transformedTest2);

         const transformedArray = Object.values(transformedTest2);

         console.log(transformedArray);

         const test2 = Object.values(data2);
         console.log('Test 2', Object.values(test2));

         const rewardRedeemed = test2.reduce((result, {rewardId}) => {
            result.push(rewardId);
            return result;
          }, []);

          console.log('Test 22', rewardRedeemed);

          const rewardRedeemed1 = data2.reduce((result, {rewardId}) => {
            result.push({key : rewardId});
            return result;
          }, []);

          console.log('Test 222', rewardRedeemed1);

          const finale = (data, key) => {
             return [
                ... new Map(
                   data.map(x => [key(x), x])
                ).values()
             ]
          }

         const finale11 = finale(rewardRedeemed1, line => line.key)

          console.log(finale(rewardRedeemed1, line => line.key));
          console.log(JSON.stringify(finale(rewardRedeemed1, it => it.key)));

      //  const output = [
      //     {
      //       "rewardId": data2.count,
      //       "date": "Dec-12",
      //     }
      //  ]
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

         // OUTPUT
        //  [
        //     { juice: 'apple', maker: 'motts', price: 12 },
        //     { juice: 'orange', maker: 'sunkist', price: 11 }
        //  ][
        //     { juice: 'apple', maker: 'motts', price: 12 },
        //     { juice: 'orange', maker: 'sunkist', price: 11 }
        //  ]
    }

    const testingFunction11 = () => {
      // 6 ways to remove duplicates from an array 

      // 1st way - Use teh filter method
      const arr = ['banana' , 'apple', 'orange', 'lemon', 'apple', 'lemon']
      const removeDuplicateData = (arr) => {
        return arr.filter((value, index) => arr.indexOf(value) === index);
      }
      console.log('Original array method 1 : ', arr);
      console.log('Remove dulication from array method 1 : ', removeDuplicateData(arr));

        //Getting duplicate values
        const duplicateData = (arr) => {
          return arr.filter((value, index) => arr.indexOf(value) !== index);
        }
        console.log('Getting duplicate data method 1 : ', duplicateData(arr));

      // 2nd way - By using a Set
      // Sets are a new object type with ES6 that allows you to create collections of unique values

      const removeDuplicate2 = (arr) => {
        return [...new Set(arr)]
      }

      console.log('Remove dulication from array method 2 : ', removeDuplicate2(arr));

      // 3rd way - Using the forEach method
      const removeDuplicate3 = (arr) => {
        const unique = [];
        arr.forEach(element => {
          if(!unique.includes(element)){
            unique.push(element)
          }
        });
        return unique;
      }

      console.log('Remove dulication from array method 3 : ', removeDuplicate3(arr));

      // 4th way - By using reduce method
      //The reduce method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.

      const removeDuplicate4 = (arr) => {
        return arr.reduce((result, curr) => result.includes(curr) ? result : [...result, curr], []);
      }
      console.log('Remove dulication from array method 4 : ', removeDuplicate4(arr));

      // 5th way - By using underscore JS
      // _.uniq method produces a duplicate-free version of the array, and also we can sort this array by passing the second parameter is true.
      // However this gives error - _is not defined

      //const removeDuplicateResult = _.uniq(arr, false);
     // const removeDuplicateWithSort = _.uniq(arr, true);

     // console.log('Remove dulication from array method 5 : ', removeDuplicateResult);
     // console.log('Remove dulication from array method 5 with sort : ', removeDuplicateWithSort);

     // 6th way - Removing Duplicate Objects from a Given Array
      const users = [
        {
          name : 'Supuni',
          age : 25,
          address : 'Ad1'
        },
        {
          name : 'Nipuni',
          age : 12,
          address : 'Ad2'
        },
        {
          name : 'Supuni',
          age : 20,
          address : 'Ad1'
        },
        {
          name : 'Supuni',
          age : 20,
          address : 'Ad1'
        },
        {
          name : 'Sandy',
          age : 18,
          address : 'Ad1'
        }
      ];

      const uniqueObjectsFromArray = (data, key) => {
        return [
          ...new Map(
            data.map(x => [key(x), x])
          ).values()
        ]
      }

      console.log('Get unique objects from array 1 :', uniqueObjectsFromArray(users, user => user.name));
      console.log('Get unique objects from array 2 :', uniqueObjectsFromArray(users, user => user.age));
      console.log('Get unique objects from array 3 :', uniqueObjectsFromArray(users, user => user.address));
      console.log('Get unique objects from array - JSON Stringfy :', JSON.stringify(uniqueObjectsFromArray(users, user => user.name)));
    }

    const testingFunction12 = () => {
      // Merge Sort 

      const arr = [6,5,3,1,8,7,2,4]

      console.log("Original: ", arr)

      //Merge sort using recursion
      function mergeSortRecursion(unsortedArray) {
	      //There's no need to split/merge if there's only one element
	      if (unsortedArray.length <= 1)
	        {
		        return unsortedArray;
	        }

	        //Now we divide the array in half
	        //we first need to find the middle point
	        //We use Math.floor to avoid decimals in an odd length array
	        const midPoint = Math.floor(unsortedArray.length / 2);

	        //Now we get the left and right part of the array
	        const leftArr = unsortedArray.slice(0, midPoint);
	        const rightArr = unsortedArray.slice(midPoint);

	        //Now we merge the two arrays using recursion to keep finding the left and right array.
	      return mergeTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr));
      }

    //Merge two arrays assuming both is already organized
    function mergeTwoArrays(leftArr, rightArr) {
      console.log("Merging: ", leftArr, rightArr)
      
	    //We first make an var where we push the values into from the both array.
	    let resultArray = [];
	    //We also make two more index keeping track of the position of left and right array
	    //Since both arrays are organized, we'll move from the smallest number to the largest.
	    let leftIndex = 0, rightIndex = 0;

	    //We will keep merging as long as there's still numbers from any of the array unadded
	    while (leftIndex < leftArr.length &&
			  rightIndex < rightArr.length)
	    {
		    //If the value on the left array is lower, we add that one into the result
		    if (leftArr[leftIndex] < rightArr[rightIndex])
		    {
			    console.log("Left is Smaller, we add ", leftArr[leftIndex], "from index", leftIndex)
			    resultArray.push(leftArr[leftIndex]);
			    leftIndex++; //Since we added the value from left index, lets increment it.
		    } //Otherwise, we add in the value of the right array.
		    else
		    {
			    console.log("Right is Smaller, we add ", rightArr[rightIndex], "from index", rightIndex)
			    resultArray.push(rightArr[rightIndex]);
			    rightIndex++; //Since we added the value from right index, lets increment it.
		    }
	    }

	    console.log("After while, LeftIndex: ", leftIndex, " RightIndex: ", rightIndex)

	    //However once one side is all finished, the other array is untouched
	    //So lets start by checking if it's the left side undefined and add it to the result
	    if (leftArr[leftIndex])
	    {	
		    //We first start by getting all the unadded elements on the left
		    var unaddedElements = leftArr.slice(leftIndex)
		      console.log("Left unadded: ", unaddedElements)
		    //Then we push in the unadded elements using the spread operator
		    resultArray.push(...unaddedElements); 
	    } //If it's not left, then it's for sure the right array
	    else
	    {
		    //We first start by getting all the unadded elements on the right
		    var unaddedElements = rightArr.slice(rightIndex)
		    console.log("Right unadded: ", unaddedElements)
		    //Then we push in the unadded elements using the spread operator
		    resultArray.push(...unaddedElements); 
	  }

	    console.log("Final Arr: ", resultArray);
	    console.log(""); //Creating an empty Line break for easy of eye in console
	    return resultArray;
    }

    const result = mergeSortRecursion(arr);
    console.log("Result:", result);
    }

    const testingFunction13 = () => {
      // Merge arrays

      // 1st way - Using the loop
      const mergeArrays = (fromArray, toArray) => {
        for(let i = 0, len = fromArray.length; i < len; i++) {
               toArray.push(fromArray[i]);
        }
         return toArray;
      }
   
      const array1 = [1,2,3,4,5];
      const array2= [6,7,8,9,10];
      const array3 = [];

      const mergeArraysResult1 = mergeArrays(array1, array3);
      console.log('Merge arrays result 1 :', mergeArraysResult1);
      console.log('Array 3:', array3);

      const mergeArraysResult2 = mergeArrays(array2, array3);
      console.log('Merge arrays result 2: ', mergeArraysResult2);

      //Using spread operator
      const array4 = ['a','b','c','d','e'];
      const array5 = [10,20,30,40,50];
      const array6 = [...array4, ...array5];

      console.log('Merge using spread operator', array6);

      const array7 = [];
      array7.push(...array4, ...array5);

      console.log('Merge using spread operator and push ', array7);

      const string ="two";
      const arrayOfChar = [...string];

      console.log('Convert string to array : ',arrayOfChar );

      // 3rd way - Using concat method

      const a = 'Supuni'
      const b = 24
      const c = {
        name : 'Kasuni',
        who : 'best friend'
      }
      const array8 = [a,b,c]
      const array9 = [6,7,8,9,10];

      const array10 = array8.concat(array9);
      console.log('Array merge using concat : ', array10);

      const array11 = [].concat(array8, array9);
      console.log('Array merge using concat 2 : ', array11);

      // 4th way - Using Reduce method
      var array12 = [1,2,3,4,5];
      var array13 = [6,7,8,9,10];

      var array14 = array13.reduce((newArray, item) => {
          newArray.push(item);
          return newArray;

      }, array12);

      console.log('Merge array using reduce method : ', array14);
    }

    const testingFunction14 = () => {
        // Merge objects

        // 1st way - Using spread operator
        let person = {
          firstName: 'John',
          lastName: 'Doe',
          age: 25,
          ssn: '123-456-2356'
        };
      
      
        let job = {
          jobTitle: 'JavaScript Developer',
          location: 'USA'
        };
      
        let employee = {
          ...person,
          ...job
        };
      
       console.log(employee);

       // OUTPUT
      //  {
      //   firstName: 'John',
      //   lastName: 'Doe',
      //   age: 25,
      //   ssn: '123-456-2356',
      //   jobTitle: 'JavaScript Developer',
      //   location: 'USA'
      // }

      // If objects have a property with the same name, then the right-most object property overwrites the previous one

      let job2 = {
        jobTitle: 'JavaScript Developer',
        country: 'USA'
      };
    
      let location = {
        city: 'London',
        country: 'England'
      };
    
      let remoteJob = {
        ...job2,
        ...location
      };
    
      console.log(remoteJob);
      //OUTPUT
      // {
      //   jobTitle: 'JavaScript Developer',
      //   country: 'England',
      //   city: 'London'
      // }

      // 2nd way -  using Object.assign() method
      let person1 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        ssn: '123-456-2356'
    };
    
    
    let job3 = {
        jobTitle: 'JavaScript Developer',
        country: 'USA'
    };
    
    
    let employee4 = Object.assign(person1, job3);
    console.log(employee4);
    }

    const testingFunction15 = () => {
      const friend = {
        details : {
          name : 'Supuni',
          age : 24
        },
        deactive : false
      }

      const salesData = {
        "sales":{ 
            "growth":0,
            "value":13
          },
          "revenue":{
            "growth":0,
            "value":83698
          },
          "avgBucketSize":{
            "growth":0,
            "value":6438.31
          },
          "repeatPurchases":{
            "growth":0,
            "value":0
          }
        };

      const name1 = friend.details.name;
      console.log('Name :', name1);
      console.log('Sales :', salesData.sales.value); // In this scenario some times we can get 'undefined'

      // To avoid undefined
      if(friend && friend.details) {
        const name = friend.details.name;
        console.log('Name with avoiding undefined, previous way :', name);
      }

      // New way - Optional chaining
      const name2 = friend?.details?.name;
      console.log('Name with optional chaining :', name2);

      // Nullish coalescing - set a default value
      // isActive will be true if user.active is null or undefined but will be false if user.active is falsy.

      const isActive = friend.active ?? true;
      console.log('Nullish Coalescing operator ?? checking : ', isActive);

      const isDeactive = friend.deactive ?? true;
      console.log('Nullish Coalescing operator ?? checking2 : ', isDeactive);

      //Intl.DisplayNames

      //provides language sensitive string comparison, number formatting, and date and time formatting

      const regionNames = new Intl.DisplayNames(['es'], {type: 'region'})
        const regionTest1 =  regionNames.of('FR') // 'Francia'
        const regionTest2 = regionNames.of('US') // 'Estados Unidos'

      const langNames = new Intl.DisplayNames(['fr'], {type: 'language'})
        const langTest1 =  langNames.of('ES') // 'espagnol'
        const langTest2 = langNames.of('EN') // 'anglais'

      const currencyNames = new Intl.DisplayNames(['zh-Hans'], {type: 'currency'});
        const currencyTest1 =currencyNames.of('USD') // '美元'
        const currencyTest2 = currencyNames.of('EUR') // '欧元'

        console.log('Test 1', regionTest1);
        console.log('Test 2', regionTest2);
        console.log('Test 3', langTest1);
        console.log('Test 4', langTest2);
        console.log('Test 5', currencyTest1);
        console.log('Test 6', currencyTest2);

        //Intl.DateTimeFormat options

        const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
        // British English uses day-month-year order
        console.log(new Intl.DateTimeFormat('en-GB').format(date))
        // "19/12/2012"

        const options = {calendar: 'chinese', numberingSystem: 'arab'}
        const dateFormat = new Intl.DateTimeFormat('default', options)

        console.log('Testing :', dateFormat);
    }

    useEffect(()=> {
      //   testingFunction();
      //   testingFunction2();
      //   testingFunction3();
      //   testingFunction4();
      //   testingFunction5();
      //   testingFunction6();
      //   testingFunction7();
      //  testingFunction8();
      //   testingFunction9();
      //   testingFunction10();
      // testingFunction11();
      //testingFunction12();
      //testingFunction13();
      //testingFunction14();
      testingFunction15();
    },[]);

    return (
        <div>
            <h1>For JS Testing</h1>
            <h4>Test Cases</h4>
            <ol>
                <li>Converting object to an array</li>
                <li>Converting an object to a Map</li>
                <li>convert nested array pairs to objects in an array</li>
                <li>Convert object of objects to array</li>
                <li>Enterprise loyalty analytics- chart data format</li>
                <li>Iterate over objects</li>
                <li>Convert array of objects to an object of arrays</li>
                <li>Group objects inside the nested array</li>
                <li>Convert array of arrays to array of objects grouped together</li>
                <li>convert array into array of objects using map() and reduce() </li>
                <li>6 ways to remove duplicates from an array </li>
                <li>Merge sort example </li>
                <li>Merge arrays </li>
                <li>Merge objects </li>
            </ol>
        </div>
    )
}

export default JSTesting

/*
import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Card, ReactVirtualized, ProgressBar } from 'shoutout_themes';
import ListTypeTableRowRenderer from '../../utils/table/ListTypeTableRowRenderer';
import OverviewChart from '../utils/OverviewChartCard';
import ComparisonChart from '../utils/ComparisonChartCard';
import LineChartWidget from './LineChartWidget';
import { UserContext } from '../../../Contexts/userContext';
import { AnalyticsContext } from '../context/AnalyticsContext';
import { getRewardsCount, getRewardsSeries, getRewardRedemptionSeries, getTopRewards } from '../../../Services';
import moment from 'moment';
import numeral from 'numeral';
import { LoadingComponent } from '../../utils/UtilComponents';

const { Column, Table, AutoSizer } = ReactVirtualized;
numeral.nullFormat('N/A');

const data2 = [
  {
    rewardId : 1,
    date: "Dec-12",
    count: 12
  },
  {
    rewardId : 2,
    date: "Dec-12",
    count: 34
  },
  {
    rewardId : 1,
    date: "Dec-13",
    count: 44
  },
  {
    rewardId : 2,
    date: "Dec-13",
    count: 10
  },
  {
    rewardId : 3,
    date: "Dec-13",
    count: 13
  },
  {
    rewardId : 4,
    date: "Dec-13",
    count: 20
  },
  {
    rewardId: 2,
    date: "Dec-14",
    count: 34
  },
  {
    rewardId : 1,
    date: "Dec-15",
    count : 30
  },
  {
    rewardId : 2,
    date: "Dec-15",
    count : 23
  },
  {
    rewardId : 3,
    date: "Dec-15",
    count : 45
  },
  {
    rewardId : 4,
    date: "Dec-15",
    count : 20
  },
  {
     rewardId : 3,
     date: "Dec-12",
     count : 24
   },
   {
    rewardId : 4,
    date: "Dec-12",
    count : 15
  },
   {
     rewardId : 3,
     date: "Dec-14",
     count : 100
   },
   {
    rewardId : 1,
    date: "Dec-14",
    count : 0
  },
   {
     rewardId : 4,
     date: "Dec-14",
     count : 90
   }
];

const finale = (data, key) => {
  return [
     ... new Map(
        data.map(x => [key(x), x])
     ).values()
  ]
};

const Rewards = () => {

  const { isAuth } = useContext(UserContext);
  const { fromDate, toDate, selectedTimePeriod } = useContext(AnalyticsContext);

  const [isLoading, setIsLoading] = useState(false);
  const [rewardsCount, setRewardsCount] = useState({});
  const [rewardSeries, setRewardSeries] = useState({});
  const [rewardSeriesRedeemed, setRewardSeriesRedeemed] = useState([]);
  const [rewardSeriesClaimed, setRewardSeriesClaimed] = useState([]);
  const [topRewardData, setTopRewardData] = useState([]);
  const [lineOptions, setLineOptions] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  const loadAllData = useCallback(async () => {

    try {

      setIsLoading(true);

      const [rewardSeriesData, rewardCountData, topReward, lineChartData] = await Promise.all([getRewardsSeries({ fromDate, toDate }), getRewardsCount({ fromDate, toDate }), getTopRewards({ fromDate, toDate }), getRewardRedemptionSeries({ fromDate, toDate })]);
      setIsLoading(false);
      setRewardsCount(rewardCountData);
      setRewardSeries(rewardSeriesData);

      setTopRewardData(topReward);

      const rewardRedeemed = rewardSeriesData.redeemed.reduce((result, data) => {
        result.push({ key: moment(data["date"]).format("MMM-DD"), rewardCountRedeemed: data.count });
        return result;
      }, []);

      const rewardClaimed = rewardSeriesData.claimed.reduce((result, data) => {
        result.push({ key: moment(data["date"]).format("MMM-DD"), rewardCountClaimed: data.count });
        return result;
      }, []);

      setRewardSeriesRedeemed(rewardRedeemed);
      setRewardSeriesClaimed(rewardClaimed);

      const transformedRewardClaimed = rewardSeriesData.claimed.reduce((result, { date, count = 0 }) => {

        result[date] = { date: moment(date).format("MMM-DD"), claimed: count, redeemed: 0 }
        return result;
      }, {})

      const transformed = rewardSeriesData.redeemed.reduce((result, { date, count }) => {
        if (result[date]) {
          result[date].redeemed = count;
        } else {
          result[date] = {
            date: moment(date).format("MMM-DD"),
            claimed: 0,
            redeemed: count
          };
        }

        return result;

      }, transformedRewardClaimed)

      const transformedRewardArray = Object.values(transformed);

      setRewardSeries(transformedRewardArray);

      const transformedLineData=data2.reduce((result,{rewardId,date, count})=>{

        result[date]={date:date, [rewardId]: count}
        return result;
        },{})

        console.log(transformedLineData);
        
        const transformedLineChartData=data2.reduce((result,{rewardId,date, count})=>{
        if(result[date] && !result[rewardId]){
           result[date][rewardId]=count;
        }else{
           result[date]={
              date:date,
              [rewardId]: count
           }
        };
        
        return result;
        
        },transformedLineData);
        
        console.log(transformedLineChartData);

        const transformedArray = Object.values(transformedLineChartData);

        console.log(transformedArray);

        const transformLines = data2.reduce((result, {rewardId}) => {
          result.push({key : rewardId});
          return result;
        }, []);

      const lineChartLineOptions = finale(transformLines, line => line.key)

      setLineChartData(transformedArray);
      setLineOptions(lineChartLineOptions);


    } catch (e) {
      console.error(e);
    }

  }, [setRewardsCount, setRewardSeriesRedeemed, setRewardSeriesClaimed, setRewardSeries, setTopRewardData, fromDate, toDate]);

  useEffect(() => {
    if (isAuth && fromDate) {
      loadAllData();
    }

  }, [isAuth, fromDate, toDate]);

  return (
    <>
      <div className="mb-3">
        <h4 className="font-weight-bold">Rewards</h4>
        <Card className="p-4 mb-4">
          <h6>Top Rewards</h6>
          {
            isLoading ?
              <LoadingComponent />
              :
              <>
                {
                  topRewardData.length > 0 ?
                    <div className="d-flex justify-content-start">
                      {
                        topRewardData.map((reward, rewardIndex) => {
                          return (
                            <div key={`r-${rewardIndex}`}>
                              <img
                                src={reward.imageUrls[0]}
                                alt='presentage'
                                style={{ width: '120px', height: '100px', borderRadius: '10%' }}
                                className='m-3'
                              />
                              <h6 className='text-center'>{reward.name}</h6>
                            </div>
                          )
                        })
                      }
                    </div>
                    : <p className='no-rewards-text mb-0'> No top rewards found </p>
                }
              </>
          }
        </Card>
        <div className='d-flex justify-content-between'>
          <Card className="mr-4 w-50">
            {isLoading ?
              <LoadingComponent /> :
              <OverviewChart
                title='Redeemed Rewards'
                amount={numeral(rewardsCount.redeemed?.count).format('0a')}
                presentage={`${numeral(rewardsCount.redeemed?.growth).format('0a')}% vs ${selectedTimePeriod}`}
                data={rewardSeriesRedeemed}
                barOptions={{ xAxis: { key: "key", type: "category" }, bar: [{ key: 'rewardCountRedeemed' }] }}
                color='#8884d8'
              />
            }
          </Card>
          <Card className="w-50">
            {isLoading ?
              <LoadingComponent /> :
              <OverviewChart
                title='Claimed Rewards'
                amount={numeral(rewardsCount.claimed?.count).format('0a')}
                presentage={`${numeral(rewardsCount.claimed?.growth).format('0a')}% vs ${selectedTimePeriod}`}
                data={rewardSeriesClaimed}
                barOptions={{ xAxis: { key: "key", type: "category" }, bar: [{ key: 'rewardCountClaimed' }] }}
                color='#64dbfe'
              />
            }
          </Card>
        </div>
      </div>
      <Card className='p-4 mb-3'>
        {isLoading ?
          <LoadingComponent /> :
          <ComparisonChart
            title='Claimed and Redeemed Rewards'
            data={rewardSeries}
            barOptions={{ yAxis: { type: "number", allowDecimals: false }, xAxis: { key: "date", type: "category" }, bar: [{ key1: 'claimed', key2: 'redeemed' }] }}
          />
        }
      </Card>
      <Card className='p-4 mb-3'>
        {isLoading ?
          <LoadingComponent /> :
          <>
            <h5>Rewards</h5>
            {
              lineChartData.length > 0 ?
                <div style={{ marginLeft: '-2.5rem' }}>
                  <LineChartWidget
                    data={lineChartData}
                    //lineOptions={{ yAxis: { type: "number", allowDecimals: false }, lines: [{ key: 'uv', type: "step" },{key: 'pv', type: "step" }] }}
                    //lineOptions={{ xAxis: { key: "name" }, line: [{ key1: 'uv', key2: 'pv', type: "step" }] }}
                    lineOptions={lineOptions}
                  />
                </div>
                :
                <img src="/assets/images/defaultImages/Graph 01.svg" className="img-fluid p-4" alt='default graph' />
            }
          </>
        }
      </Card>
      <Card className='p-4 mb-3' style={{ width: '100%' }}>
        <h6>Rewards</h6>
        <div className="h-100 my-3">
          <AutoSizer disableHeight>
            {({ width }) => (
              <Table
                disableHeader={false}
                headerHeight={55}
                height={400}
                // headerClassName="px-3"
                rowHeight={100}
                rowGetter={({ index }) => topRewardData[index]}
                rowClassName={({ index }) => index === -1 ? "px-3 cursor-pointer-hover" : "cursor-pointer-hover"}
                rowCount={topRewardData.length || 0}
                // sortBy={sortBy}
                // sortDirection={sortDirection}
                width={width}
                //sort={sort}
                rowRenderer={ListTypeTableRowRenderer}
                noRowsRenderer={() => {
                  return isLoading ? <LoadingComponent /> : <div className="text-center">No data found.</div>;
                }}
              >

                <Column
                  label="Reward"
                  dataKey='name'
                  width={150}
                  flexGrow={1}
                  cellRenderer={({ rowData }) => (
                    <p className="mb-0">{rowData.name}</p>
                  )
                  }
                />
                <Column
                  label=""
                  dataKey=''
                  width={600}
                  flexGrow={1}
                  cellRenderer={({ rowData }) => (
                    <ProgressBar variant='primary' now={rowData.percentage} />
                  )
                  }
                />
                <Column
                  label="Amount"
                  dataKey=''
                  width={20}
                  flexGrow={1}
                  cellRenderer={({ rowData }) => (
                    <div className="mb-0 text-center">
                      <p className="mb-0">{numeral(rowData.totalRedeemedCount).format('0a')}</p>
                      <small className='text-muted mb-0 '>{`${numeral(rowData.percentage).format('0a')}%`}</small>
                    </div>
                  )
                  }
                />

              </Table>
            )}
          </AutoSizer>
        </div>
      </Card>
    </>
  )
}

export default Rewards
*/

/*
import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartWidget = ({data, lineOptions =  [] }) => {
    return (
        <ResponsiveContainer
            width="100%"
            height={400}
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 40, right: 20, left: 60, bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend  verticalAlign="top" height={36}/>
                {lineOptions.map((item)=>{
                    return (<Line key={item.key} type={item.type || "monotone"} dataKey={item.key||'value'} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}  name={item.key}/>)
                })}
            </LineChart>
        </ResponsiveContainer>
    )
  }

export default LineChartWidget

*/

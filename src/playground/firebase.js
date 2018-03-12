
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  });

    console.log(expenses);  
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//       console.log(expenses);
//   });






// database.ref('expenses').push({
//   description: 'ola',
//   note: 'louco',
//   amount: 100,
//   createdAt: 0
// })

// database.ref('expenses').push({
//   description: 'hello',
//   note: 'crazy',
//   amount: 10000,
//   createdAt: 0
// })

// database.ref('expenses').push({
//   description: 'aloha',
//   note: 'setup',
//   amount: 500,
//   createdAt: 0
// })





// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const  val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   })



// database.ref().set({
//   name: 'Chris',
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Belo Horizonte',
//     country: 'Brazil'
//   }
// }).then(() => {
//   console.log('Data Saved')
// }).catch((error) => {
//   console.log('error:', error)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('UPDATED')
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('removed');
// })
//   .catch((e) => {
//     console.log(e);
//   });

// database.ref().update({
//   name: 'Mike',
//   age: '59',
//   job: 'Web Dev'
// });

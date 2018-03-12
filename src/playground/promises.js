const promise = new Promise((resolve, reject) => {
  resolve('resolved');
});

promise.then((data) => {
  console.log(data)
})
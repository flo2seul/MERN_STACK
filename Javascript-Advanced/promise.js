// promise
const userPromise = new Promise((resolve, reject) => {
  //code
  let user = {
    name: "john",
    city: "kumasi",
  };
  let isFetched = false;

  if (isFetched) {
    resolve(user);
  } else {
    reject("error");
  }
});

//Resolving

userPromise
  .then(function (valueFromResolve) {
    //.then() is use to get the value from resolve function
    console.log(valueFromResolve);
  })
  .catch((error) => {
    console.log(error);
  });

// Function returning a promise

function getUser() {
  return (promise = new Promise((resolve, reject) => {
    //logic goes here
    let user = {
      name: "John",
      city: "Accra",
    };
    let isFetched = true;
    if (isFetched) {
      //resolve
      resolve(user);
    } else {
      //reject
      reject("error fetching user");
    }
  }));
}

getUser()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Consuming multiple promises

//1. promise.all()
//2. promise.race()

//1. Fetch all posts
//2. fetch all comments associated with a post

//fetch post
const postPromise = new Promise(function (resolve, reject) {
  let isPostFetched = true;
  let post = {
    title: "Title 1",
    desc: "Description 1",
  };

  if (isPostFetched) resolve(post);
  //reject
  reject("Error fetching post");
});

//fetch comment
const commentPromise = new Promise(function (resolve, reject) {
  let commentFetched = true;
  let comment = {
    title: "Candy",
    desc: "Excellent Comment",
  };

  if (commentFetched) resolve(comment);
  //reject
  reject("Error fetching comment");
});

//resolve multiple promises (promise.all())

Promise.all([postPromise, commentPromise])
  .then((allPromises) => {
    console.log(allPromises);
  })
  .catch((err) => {
    console.log(err);
  });

//resolve multiple promises (promise.race())

Promise.race([postPromise, commentPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

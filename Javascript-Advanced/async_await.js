// Async / Await

function makeAPIRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve
      let isFetched = true;
      let user = {
        name: "Miki",
        age: 20,
      };
      if (isFetched) {
        resolve(user);
      }
      reject("Error fetching user");
    }, 5000);
  });
}
async function getUser() {
  try {
    // make api call to fetch user
    const res = await makeAPIRequest();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getUser();

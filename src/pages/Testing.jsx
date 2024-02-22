function Testing() {
  function mydisplayer(pro) {}
  let myPromise = new Promise(function (resolve, reject) {
    try {
      throw new Error();
      console.log("Resolved");
      resolve();
    } catch (err) {
      console.log("Error is here");
      reject();
    }
  });
  myPromise.then(solve, error);

  return <div></div>;
}

export default Testing;

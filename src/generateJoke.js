import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
  // console.log(res.data.joke);
  // document.getElementById('joke').innerHTML = res.data.joke;
  // return res.data.joke;
  // return 'this is a joke';
  // console.log(res.data.joke);
  // document.getElementById('joke').innerHTML = res.data.joke;
  // return res.data.joke;
  // return 'this is a joke';
  // console.log(res.data.joke);
  // document.getElementById('joke').innerHTML = res.data.joke;
  // return res.data.joke;
  // return 'this is a joke';
  // console.log(res.data.joke);
}

export default generateJoke;

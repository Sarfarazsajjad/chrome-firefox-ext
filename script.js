const site_url = window.location.href;

const url = "http://localhost:5000/url";


fetch(url, {
  mode: "cors",
  method: "POST",
  credentials: "same-origin",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ url: site_url }),
})
  .then((response) => {
    response.json();
  })
  .catch((error) => {
    console.log(error);
  });



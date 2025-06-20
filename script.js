let request = (obj) => {
  return new Promise((accept, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        accept(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
};

let object = {
  url: 'https://jsonplaceholder.typicode.com/todos',
  method: "GET",
  body: null
};

let results = [];
const myInfo = async () => {
  try {
    const result = await request(object);
    const pre = document.getElementById('api-results').textContent = result;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
  };

myInfo();

const btn = document.getElementById('btn');
const fullUrl = document.getElementById('user-val');

async function fetchData() {
  const URL = fullUrl.value;
  // const BASE_URL = `http://tinyurl.com/api-create.php?url=${URL}`;
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  console.log(data);
}

function showDataDOM() {}

// EVENT LISTENERS
btn.addEventListener('click', fetchData);

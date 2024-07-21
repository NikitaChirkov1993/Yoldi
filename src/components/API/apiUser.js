
const getApiUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  const fetchData = async () => {
    const result = await getApiUser();
    console.log(result);
  };

  fetchData();
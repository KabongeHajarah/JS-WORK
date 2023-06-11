const url='https://restcountries.com/v2/all'
fetch(url)
.then(response=> response.json())  // accessing the API data as JSON
.then(data=>{
    //getting data
    console.log(data);
})
.catch(error=>console.log(error))

const fetchData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      console.log(countries);
    } catch (err) {
      console.log(err);
    }
  };
  
  console.log('===== async and await');
  fetchData();
  
  
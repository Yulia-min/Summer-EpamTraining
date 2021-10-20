export async function getEntries(category) {
    try {
      const data = await fetch(`https://api.publicapis.org/entries?category=${category}&https=true`);
      const dataJSON = await data.json();
      const entries = dataJSON.entries;
      return entries;
  
    } catch(error) {
      console.log(error.message);
    }
  }
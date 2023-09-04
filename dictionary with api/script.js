// const diction = async(word)=>{


const diction = async (word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
  
    const headers = {
      'X-RapidAPI-Key': '10e00976e2msh1ad4b58d5364771p11e442jsnb104f7ac0b2b',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    };
  
    const options = {
      method: 'GET',
      headers: headers
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const jsonResponse = JSON.parse(result);
      
      const meanings = jsonResponse.definition.split(/\d+\./g).filter((meaning) => meaning.trim() !== '');
      
      let formattedMeanings = '';
      meanings.forEach((meaning, index) => {
        formattedMeanings += `${index + 1}. ${meaning.trim()}<br>`;
      });
      
      document.getElementById('word').innerHTML = "Word: " + jsonResponse.word;
      document.getElementById('definition').innerHTML = "Meanings:<br>" + formattedMeanings;
    } catch (error) {
      console.error(error);
    }
  };
  
  document.getElementById('searchbtn').addEventListener("click", (e) => {
    e.preventDefault();
    diction(document.getElementById('searchinput').value);
  });
  
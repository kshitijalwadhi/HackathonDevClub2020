var city = document.querySelector('#Qtime_div');
var time = document.querySelector('.Qist_div');


 



 

  function getWeathery(){
    let api = 'https://quote-garden.herokuapp.com/quotes/random';
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
            console.log(data);
        })
        .then(function(data){
          var tempCity = data['quoteText'];
          var tempTime = data['quoteAuthor'];
          

          Qtime_div.innerHTML="'" + tempCity + "'";
          Qist_div.innerHTML= "~" + tempTime;


          


          
        })
      
       

       
}
getWeathery();
    
    
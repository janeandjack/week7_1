// (() => {
// function fetchData () {
// fetch('./includes/conect.php?carModel=R58')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(function(error){

//     console.error(error);
//     });
//     }
//     fetchData();

// })();

(() => {
    function fetchData() {       
         fetch('./includes/conect.php?carModel=R58')        
         .then(res => res.json())       
         .then(data => console.log(data))        
         .catch(function(error) {            
             console.error(error);      
             });    
            }
        fetchData();

})();
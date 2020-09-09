const request= require('postman-request');
module.exports= forecast=(latitude,longitude,callback)=>{
    const weather_access_key='9eb98c3e636bd3f092d5cb94c32c7108'
    const units='f'
    
    
     const weather_url=`http://api.weatherstack.com/current?access_key=${weather_access_key}&query= ${longitude} , ${latitude}&unit=${units}/`;
     request(weather_url,(error,{body})=>{
        if(error){
           
            callback('internet disconnected!',undefined);
            
        }else if(JSON.parse(body).error){
            const errorMessage=JSON.parse(body).error.info;
            callback(errorMessage,undefined);

        }else{
            const dataObj=JSON.parse(body);
            const {current}=dataObj;
            
            const {temperature,feelslike,weather_icons}=current;
            
           callback(undefined,{temperature,feelslike,weather_icons});
        }
        
       
    
     });
}

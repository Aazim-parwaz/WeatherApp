const request= require('postman-request');

module.exports= geocode=(address,callback)=>{

    const map_access_key='pk.eyJ1IjoiYWF6aW1wYXJ3YXoiLCJhIjoiY2tib25mbmphMjRwdTJxbHN4Z3Bvc3o1NCJ9.lX1myPessa45wEjPXiaaOQ'
    const map_url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${map_access_key}`;

    request(map_url,(error,response)=>{
   
        if(error){
           
            callback('internet disconnected!',undefined);
            
        }
        else if(JSON.parse(response.body).features.length===0){
            const dataObj=JSON.parse(response.body);
           
            callback(`wrong url! not able to fetch results`,undefined);
        }
        else{
            
            const dataObj=JSON.parse(response.body);
            const {features}=dataObj;
            const resultData={
                place:features[0].place_name,
                 Latitude:features[0].center[0],
                 Longitude:features[0].center[1]
                 
            }
          
            callback(undefined,resultData);
        }
        
        
    })
}

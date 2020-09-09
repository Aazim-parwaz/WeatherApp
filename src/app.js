const path=require('path');
const express=require('express');
const hbs=require('hbs');
const app=express();
const geocode=require('./utitls/geocode');
const forecast=require('./utitls/forecast')
const assetPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');


app.set('view engine','hbs')
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use('/public',express.static(assetPath));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Aazim'
    })
})

app.get('/Weather',(req,res)=>{
    
    
    if(!req.query.city){
        return res.send({
              error:'city was not mentioned'
          })
      }
    
        geocode(req.query.city,(er,data)=>{
            if(er){
                return res.send(er);
            }
          forecast(data.Latitude,data.Longitude,(er,data)=>{
             if(er){
                 return res.send(er);
             }
             res.send(data)
          });
        });
    
        
   
        
   
    
    
})

app.get('/help/',(req,res)=>{
    res.render('help',{
        title:'help',
        name:'Aazim'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        message:'Oops! Help article not found',
        returnPage:'help',
        returnTo:'Help'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        message:'Oops! Home page not availabe',
        returnPage:'',
        returnTo:'Home'
    });
})



app.listen(3000,()=>{
    console.log('App is running on port 3000');
    
})
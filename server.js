const express=require("express") ;
const app=express() ;
const port=8081 ;

//pug set 
app.set('view engine', 'pug');
app.set('views','./views');


app.use('/service',(req,res,next)=>{
    const d=new Date() ;
    const hour=d.getHours() ;
    const day=d.getDay() ;
    if((hour>=9 && hour<17) &&(day>0 && day<6))  {
      console.log("Tilme is ok !!") ;
      next() ;
    }
    else {
        console.log("Sorry,we are closed !") ;
    }
    
})
app.get('/home',(req,res)=>{ //add next to this line
    
    res.render('home')
})

app.get('/contact',(req,res)=>{
  res.render('contact')
})
app.get('/service',(req,res)=>{
  res.render('service')
})

app.listen(port,(err)=>{
  if(err) throw err 
  console.log(`Server is runnig on ${port}`) ;
})
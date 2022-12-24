// function test1(){
//     document.getElementById("test1").innerHTML="<div>this is first</div>"
// }
// function test2(){
//     document.getElementById("test2").innerHTML="<div>this is second</div>"
// }
// function test3(){
//     document.getElementById("test3").innerHTML="<div>this is third</div>"
// }

// let fetchPromise=fetch("http://localhost:8080/lmsl");
// console.log(fetchPromise)
app.get('/lmsl',(req,res)=>{
    mysqlConn.query('select * from user_details', (err,results,fields) => {
        
        if(!err){
            res.send(results);
       }else
        console.log(err);
    })
});
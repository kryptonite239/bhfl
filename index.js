const express= require("express");

const app=express();
const port=5000;
app.use(express.json())
app.post("/bfhl",(req,res)=>{
    
    req.body;
    const data=req.body.data;
    console.log(data);
    const nums=[];
    const aplha=[];
    let highest='a';
    data.map((d)=>{
        if((/[a-zA-Z]/).test(d)){
            if(d.length>1){
                res.send({
                is_success:false,
                user_id:"kailash_choudhary_20052000",
                email:"kailash_choudhary@srmap.edu.in",
                roll_number:"AP20110010485",
                error:"Cannot Enter Multiple Aplhabest in a single string"
                })
            }
            aplha.push(d);
        }
        else if(/[0-9]+/.test(d)){
            nums.push(d);
        }
        else{
            res.send({
                is_success:false,
                user_id:"kailash_choudhary_20052000",
                email:"kailash_choudhary@srmap.edu.in",
                roll_number:"AP20110010485",
                error:"Enter only numbers or aplhabets"
            })
        }
    });
    if(aplha){
        aplha.map((char)=>{
            
            if(char.toUpperCase()>highest.toUpperCase()){
                highest=char;
            }
        });
    }
    res.send({
        is_success:true,
        user_id:"kailash_choudhary_20052000",
        email:"kailash_choudhary@srmap.edu.in",
        roll_number:"AP20110010485",
        numbers:nums,
        aplhabets:aplha,
        highest_aplhabet:highest
    })
})
app.get("/bfhl",(req,res)=>{
    res.send({operation_code:1});
})
app.listen(port,()=>{
    console.log(`app listening on port: ${port}`);
});
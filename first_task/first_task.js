import express from 'express';
const app =express();

const students=[ "student1","student2","student3","student4","student5","student6","student7","student8","student9","student10"];


app.get("/students",(req,res)=>{
    let code="<ul>";
    for(let i=0;i<students.length;i++){
        const student =students[i];
        code+="<li>  "+student+"</li>";
    }

    code+="</ul>";
    res.send(code);
})

app.listen(50000);
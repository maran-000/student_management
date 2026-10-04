const form=document.getElementById("studentform")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const department=document.getElementById("department").value.trim();
    const college=document.getElementById("college").value.trim();
    const year=document.getElementById("year").value.trim();
    const city=document.getElementById("city").value.trim();
    if(name===""||email===""||phone===""||department===""||college===""||year===""||city===""){
        alert("All fields are mandatory");
        return;
    }
    const student={
        name:name,
        email:email,
        phone:phone,
        department:department,
        college:college,
        year:year,
        city:city
    };
    fetch("http://localhost:8080/students",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        alert("Student added successfully");
    })
    .catch(error => {
        console.log(error);
        alert("Something went wrong");
    })


});
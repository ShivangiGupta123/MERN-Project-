import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateClientForm() {
    const [data,setData]= useState({firstName:'' ,lastName : '',email :  '' , mobile :'' , project:''})
    const navigate=useNavigate()
  
    const handleChange = (e) => {
    e.preventDefault()
    console.log("e.target.value" , e.target.value)
    setData({...data , [e.target.name] : e.target.value})

  };
  const handleSubmit= async()=>{
    try{
        console.log("data" ,data)
        let response = axios.post('http://localhost:5000/api/v1/client' , data)
        console.log("response" , response)
        alert("client is created successfully")
        navigate('/clients')


    }
    catch(err){
        console.log("err" ,err)
    }
  }
  return (
    <div className="container border" style={{ margin: "100px" }}>
      <h3>Create Client</h3>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="firstName"
            onChange={(e) => handleChange(e)}
           
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            class="form-control"
            name="mobile"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Project
          </label>
          <input
            type="text"
            class="form-control"
            name="project"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button  type="submit" class="btn btn-primary" onClick={()=>handleSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateClientForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateClientForm() {
    const [data,setData]= useState('')
    const location = useLocation()
    console.log("location " ,location)
    console.log("location " ,location?.state)

    const navigate=useNavigate()
  
    const  getAllData = async()=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/v1/client/${location?.state}`)
            setData(response?.data?.data)
            console.log("response", response)

        }
        catch(err){
            console.log("error" , err)
        }
    }
    useEffect(()=>{
        getAllData()
    },[])

    const handleChange = (e) => {
    e.preventDefault()
    console.log("e.target.value" , e.target.value)
    setData({...data , [e.target.name] : e.target.value})

  };
  const handleSubmit= async()=>{
    try{
        console.log("data" ,data)
        let response =  axios.put(`http://localhost:5000/api/v1/client/${location?.state}` , data)
        console.log("response" , response)
        alert("client is updated successfully")
        navigate('/clients')


    }
    catch(err){
        console.log("err" ,err)
    }
  }
  return (
    <div className="container border" style={{ margin: "100px" }}>
      <h3>Update Client</h3>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="firstName"
            value={data?.firstName}
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
            value={data?.lastName}
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
            value={data?.email}
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
            value={data?.mobile}
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
            value={data?.project}
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

export default UpdateClientForm;

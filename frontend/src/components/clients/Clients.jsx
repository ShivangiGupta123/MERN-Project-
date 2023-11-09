import React, { useEffect, useState } from "react";
import  axios from 'axios'
import { useNavigate } from "react-router-dom";
function Clients() {
    const  [data , setData] =  useState([])
    const navigate=useNavigate()
    
    const  getAllData = async()=>{
        try{
            const response = await axios.get('http://localhost:5000/api/v1/client')
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
    
    const handleCreateClient  = ()=>{
      navigate('/createClient')
    }

    const handleDelete = async(id)=>{
      try{
        console.log("id", id)
        const response = await axios.delete(`http://localhost:5000/api/v1/client/${id}`)
        console.log("id" , id)
        alert('client data is deleted successfully')
        navigate('/clients')
      }
      catch(err){
        console.log("error" , err)

      }
    }
    const handleUpdate=(id)=>{
      navigate('/updateClient' , {state:id})
    }

  return (
    <div className="container my-5 border">
      <div className="d-flex flex-row-reverse my-3">
        <button type="button" className="btn btn-success" onClick={()=>handleCreateClient()}>
          Create
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            
            <th scope="col">S.No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Project</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {data?.map((item , index)=>{
              
              return(
                <>
                <tr>
                  <th scope="row">{`${index+1}`}</th>
            <td>{item?.firstName}</td>
            <td>{item?.lastName}</td>
            <td>{item?.email}</td>
            <td>{item?.mobile}</td>
            <td>{item?.project}</td>
            <td>
              <button type="button" class="btn btn-warning" onClick={()=>handleUpdate(item?._id)}>
                Edit
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger" onClick={()=>handleDelete(item?._id)}>
                Delete
              </button>
            </td>
          </tr>
                </>
              )
            })}
          
        </tbody>
      </table>
    </div>
  );
}

export default Clients;

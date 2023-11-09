const Client = require("../models/clientModel");

const createClient = async (req, res) => {
  try {
    let data = new Client(req?.body);
    await data.save();
    res
      .status(201)
      .json({
        success: true,
        message: "client is created successfully",
        data: data,
      });
  } catch (err) {
    console.log("error", err);
    res
      .status(500)
      .json({ success: false, message: err.message ?? err.message });
  }
};


const getClientList = async (req, res) => {
  try {
    let data = await Client.find();
    res
      .status(200)
      .json({ success: true, message: "List of Client Data", data: data });
  } catch (err) {
    console.log("error", err);
    res
      .status(500)
      .json({ success: false, message: err.message ?? err.message });
  }
};


const getClientIndividualData = async (req, res) => {
    try {
      let data = await Client.findById(req?.params?.id);
      if(!data){
        return res
        .status(400)
        .json({ success: false, message: "data is not available for particular id"});
      }
      res
        .status(200)
        .json({ success: true, message: "Individul  Client Data", data: data });
    } catch (err) {
      console.log("error", err);
      res
        .status(500)
        .json({ success: false, message: err.message ?? err.message });
    }
  };


const  updateClientData = async (req, res) => {
    try {
      let data = await Client.findByIdAndUpdate(req?.params?.id ,req?.body , {new :true});
      if(!data){
        return res
        .status(400)
        .json({ success: false, message: "data is not available for particular id"});
      }
      res
        .status(200)
        .json({ success: true, message: "client data is  updated successfully", data: data });
    } catch (err) {
      console.log("error", err);
      res
        .status(500)
        .json({ success: false, message: err.message ?? err.message });
    }
  };


const  deleteClientData = async (req, res) => {
    try {
      let data = await Client.findByIdAndDelete(req?.params?.id , {new :true});
      if(!data){
        return res
        .status(400)
        .json({ success: false, message: "data is not available for particular id"});
      }
      res
        .status(200)
        .json({ success: true, message: "client data is deleted successfully", data: data });
    } catch (err) {
      console.log("error", err);
      res
        .status(500)
        .json({ success: false, message: err.message ?? err.message });
    }
  };
  


module.exports = { createClient, getClientList , getClientIndividualData ,updateClientData , deleteClientData};

import React from 'react'
import Clients from './Clients'
import CreateClientForm from './CreateClientForm'

function ClientPanel() {
  return (
   <>
   <div class="container">
  <div class="row">
    <div class="col">
      <Clients/>
    </div>
    <div class="col">
     <CreateClientForm/>
    </div>
   
  </div>
</div>
   </>
  )
}

export default ClientPanel
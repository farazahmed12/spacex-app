import React, { useState } from 'react';
import './App.css';
import SpaceMission from './graphql'

interface DataType {
  mission_name: string;
    rocket: {
      rocket_name: string
    }
    links: {
      flickr_images: string
    }
    launch_site: {
      site_name_long:string
    }
    details: string
}


function App() {
  const [data, setData] = useState<DataType[]>([])

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10)
    setData(spaceMissions)
  }

  React.useEffect(() => {
    loadSpaceMission()
  
  }, [])

   return (
      <div style={{backgroundColor: "#867bbd"}}>
      <div className="container">
        <h2 className='text-center text-light py-3'>SpaceX Rockets Launch</h2>
        <div className='row'>
        {data ? (data.map((item, i) => (
          <div key={i} className="card mx-3 my-4" style={{width: "20rem"}}>
          <img src={item.links.flickr_images.length > 0 ? item.links.flickr_images[0] : 'https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{item.mission_name}</h5>
            <p className="card-text">{item.details ? item.details.substring(0, 150) : null}</p>
            
          </div>
        </div>
        ))  ) : (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
         }
        </div>
      </div>
      </div>
    ) 
  } 


export default App;

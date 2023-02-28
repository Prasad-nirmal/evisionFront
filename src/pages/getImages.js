import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const ImageList=()=> {
  let result
  const [images , setImages] = useState([]);
  useEffect(()=>{
    getImages()
  },[]) 

  const getImages=()=>{
    axios.get("http://localhost:8080/image/download/")
    .then((response)=>{
      result=response.data
      console.log(result)

      setImages(response.data)
    })
  }
  // const fetchAPI = async() =>{
  //   const response = await axios.get('http://localhost:8080/image/download')
  //   console.log(response.data);
  //   const data = await response.data;
  //   setImage(data);
  // }
  return (
   <div>
    <div className='table-responsive'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th><center>CImage</center></th>
                    <th><center>PImage</center></th>
                </tr>
            </thead>
            <tbody>
                {images.map((image)=>{
                    return(
                        <tr>
                            <td><img src={`setPreviewImg("result:image/png;base64," +image.c_image)`} /></td>
                            <td ><img src={image.p_Image}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
   </div>
  );
}

export default ImageList;

















/*{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

    // position: absolute; width: 346px; height: 40px; left: 1041px; top: 546px
    // `setPreviewImg("result:image/png;base64," +image.c_image)`
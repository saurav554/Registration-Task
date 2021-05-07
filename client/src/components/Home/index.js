import React from 'react'
import image from './image.jpg'

function Home(props){
        return (
            <div className="col-xs-1 text-center mt-5">
                <h2 className="mb-5">Welcome To Registration- Page</h2>
                <img src={image} alt="man holding sign"/>
            </div>
        )
}
    
export default Home
import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authprovider'

const Project = () => {

  const Authdata = useContext(AuthContext);
  // console.log(Authdata);
  return (
    <div className='main-container-project'>
      <h1>Project's</h1>
      <div className='project-container'>
        {/* <div className="cards-body">
          <div className="title-card">Lorem ipsum dolor sit amet.</div>
          <div className="redirect-cardevent">lorem</div>
        </div>   */}
        {
          [...Authdata].map((element,index) => {
            return (
              <div className="cards-body" key={index}>
                <div className="title-card">{element.title}</div>
                <div className="redirect-cardevent">
                  <a href={element.linkURL} target="_blank">view</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project
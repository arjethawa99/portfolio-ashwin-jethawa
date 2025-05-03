import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authprovider'

const Project = () => {

  const Authdata = useContext(AuthContext);
  // console.log(Authdata);
  return (
    <section id='project'>
      <div className='main-container-project'>
        <h1>Project's</h1>
        <div className='project-container'>
          {
            [...Authdata.DataProjectObj].map((element, index) => {
              return (
                <div className="cards-body" key={index}>
                  <div className="title-card">{element.title}</div>
                  <div className="skills-part">{"Skills:- " + element.skills}</div>
                  <div className="redirect-cardevent">
                    <a href={element.linkURL} target="_blank">view</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Project
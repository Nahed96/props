import React from 'react'
import propTypes from 'prop-types'

const Profil=(props)=>{
    return (
        <div>
          <h1>{props.name}</h1>
          <h2>{props.bio}</h2>
          <h3>{props.profession}</h3>  
          {props.children}
        </div>
    )
}

Profil.propTypes = {
    name:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    children:propTypes.node.isRequired

}

export default Profil


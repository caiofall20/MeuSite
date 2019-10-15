import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
<<<<<<< HEAD
    query 
     {
=======
    query  {
>>>>>>> 6e3ac89656767a5a8b57dbf2de2bf3ba5447231f
      site {
        siteMetadata {
          title
          position
          description
          }
        }
      }
      `)
    
      return (
        <div className="Profile-wrapper">
        
          <h1>{title}</h1>
          <h2>{position}</h2>
          <p>{description}</p>
        </div>
      )
    }

   

export default Profile
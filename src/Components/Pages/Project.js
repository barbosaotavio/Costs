import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project () {
    const{id} = useParams()   
    const [Project, setProject] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET' ,
            headers: {
                'content-Type' : 'application/json',
            },
        }).then(resp => resp.json())
          .then ((data) => {
            setProject(data)
          })
          .catch(err => console.log)

   }, [id])

    return(
    <p>{Project.name}</p>
    )
}   

export default Project
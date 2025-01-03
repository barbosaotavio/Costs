import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project () {
    const{id} = useParams()   
    const [Project, steProjact] = useState([])

    useEffect(() => {

        fetch(`http://localholst:5000/projacts/${id}`,{
            method: 'GET' ,
            headers: {
                'content-Type' : 'application/json',
            },
        }).then(resp => resp.json())
          .then ((data) => {
            steProjact(data)
          })
          .catch(err => console.log)

   }, [id])

    return(
    <p>{Project.name}</p>
    )
}   

export default Project
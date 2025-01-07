
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'


function Project () {
    const{id} = useParams()   
    const [Project, setProject] = useState([])

    useEffect(() => {

        setTimeout(()=>{
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
        },300)

   }, [id])

    return(
    <>
    {Project.name ? (
        <div>
          <Container customClass='column'>
            <div>
               <h1>Projeto: {Project.name}</h1>
               <button>Editar projeto</button>
            </div>
          </Container>
        </div>
    ) : (
        <Loading/>
    )}
    </>
    )
}   

export default Project
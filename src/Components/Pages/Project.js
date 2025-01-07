
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'


function Project () {
    const{id} = useParams()   
    const [Project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

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

   function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
   }

    return(
    <>
    {Project.name ? (
        <div>
          <Container customClass='column'>
            <div>
               <h1>Projeto: {Project.name}</h1>
               <button onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
               </button>
               {!showProjectForm ? (
                <div>
                    <p>
                        <span>Categoria:</span> {Project.category.name}
                    </p>
                    <p>
                        <span>Total de Orçamento:</span> R${Project.budget}
                    </p>
                    <p>
                        <span>Total Utilizado:</span> R${Project.cost}
                    </p>
                </div>
               ) : (
                <div>
                    <p>detalhes do projeto</p>
                </div>
               )}
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
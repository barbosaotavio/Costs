import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../Project/ProjectForm'
import { BiMessageMinus } from 'react-icons/bi'


function Project () {
    const{id} = useParams()   
    const [Project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMassage] = useState()
    const [type, setType] = useState()
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

   function editPost(Project) {
    //budget validation

    if (Project.budget < Project.cost) {
        setMassage('O orçamento não pode ser menor que o custo do projeto!')
        setType('error')
        return false
    }

    fetch(`http://localhost:5000/projects/${Project.id}`,{
        method: 'PATCH',
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify(Project),
    })
    .then(resp => resp.json())
    .then((data => {

        setProject(data)
        setShowProjectForm(false)
        setMassage('Projeto atualizado')
        setType('success')
    }))
    .catch(err => console.log(err))
   }

   function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
   }

    return(
    <>
    {Project.name ? (
        <div className={styles.projet_details}>
          <Container customClass='column'>
            {message && <Message type={type} msg={message}/> }
            <div className={styles.details_container}>
               <h1>Projeto: {Project.name}</h1>
               <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
               </button>
               {!showProjectForm ? (
                <div className={styles.project_info}>
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
                <div className={styles.project_info}>
                    <ProjectForm handleSubmit={editPost} btnText='Concluir edição ' projectData={Project}/>
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
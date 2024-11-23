import { useNavigate } from 'react-router-dom'

import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate ()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application-json',
            },
            body: JSON.stringify(project),
        }) 

        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
        })
        .catch((err) => console.log(err))
    }

    return (
       <div className={styles.newproject_container}>
        <h1>Crie seu projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
       </div>
    )
}

export default NewProject 
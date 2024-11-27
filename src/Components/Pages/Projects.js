import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import projectCard from '../Project/projectCard'

import styles from './projects.module.css'
import { useState, } from 'react'

function Project () {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message =''

    if(location.state) {
        message = location.state.message
    }

    useEffect( () => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then(resp => resp.json())
          .then(data => {
            console.log(data)
            setProjects(data)
          })
          .catch((err) => console.log(err))
    },[])

    return (
        <div className={styles.projects_container}>
        <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to='/newproject' text='Criar projeto'/>
        </div>
        {message && <Message type='success' msg={message}/>}
        <Container customClass='start'>
            <p>projetos...</p>

        </Container>
        </div>
    )
}

export default Project
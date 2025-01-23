import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../Project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}) {
    
    const [Service, sertService] = useState({})
    
    function submit() {}
    function handleChange(e) {}
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'  
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
             <Input
                type='number'
                text='Custo do serviço '  
                name='Cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
             <Input
                type='text'
                text='Descrição do serviço'  
                name='Description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}
   

export default ServiceForm
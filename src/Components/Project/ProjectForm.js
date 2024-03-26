function ProjectForm () {
    return (
        <form>
            <div>
                 <input type='text' placeholder='insira o nome do projeto' />
            </div>
            <div>
                <input type='number' placeholder='insira o orçamento total'/>
            </div>
            <div>
            <select name='category_id'>
             <option disabled>selecione a categoria</option>   
            </select>
            </div>
            <div>
                <input type='submit' value='criar projeto'/>
            </div>
            
        </form>
    )
}

export default ProjectForm
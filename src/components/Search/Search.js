import './Search.css'


function Search() {
    
    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form)
        console.log(formData);
        console.log(formData.get('search'));
        
    }
     return (
        <div className='search'>
           
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='idSearch'>Votre recherche</label>
                    <input id='idSearch' name='search' type='text' />
                </fieldset>
                <input type='submit' value="Rechercher" />
            </form>
        </div>
     )

}

export default Search;
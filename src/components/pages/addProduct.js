import "../../App.css";
import { useState } from 'react'

function AddProduct() {
    const [name, setName] = useState('')
    const [company, seTCompany] = useState('')
    const [fImage, setfImage] = useState('')
    const [file, setFile] = useState('')
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')
    const [featured, setFeatured] = useState('')
    const [produts, setProducts ] = useState([])

    const onsubmit = (e) => {
        e.preventDefault()
            if (!name) {
                alert('please name field is required')
                return
            }
            if (!company) {
                alert('please company field is required')
                return
            }
            if (!fImage) {
                alert('please fImage field is required')
                return
            }
            if (!file) {
                alert('please file field is required')
                return
            }
            if (!tags) {
                alert('please tags field is required')
                return
            }
            if (!description) {
                alert('please description field is required')
                return
            }
            if (!featured) {
                alert('please featured field is required')
                return
            }
        addProduct({name,company,fImage,file,tags,description,featured})
        setName('')
        seTCompany('')
        setfImage('')
        setFile('')
        setTags('')
        setDescription('')
        setFeatured('')
    }    

    
    const addProduct = async (product) =>{
        const res = await fetch('http://localhost:5000/games',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        setProducts ([...produts, data])
    }
    return(
        <div class="flex px-10 pt-20 pb-28">
            <fieldset className="p-5 w-8/12 border border-gray-200">
                <form onSubmit= {onsubmit}>
                    <legend className="px-4"> Add a game </legend>
                    <div className="flex w-full mb-6">
                        <div className="flex flex-col w-6/12 pr-2">
                            <label 
                                className="text-gray-200">Name:
                            </label>
                            <input  name="name"
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent"
                                value={name} 
                                onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col w-6/12 pl-2">
                            <label 
                                className="text-gray-200">Company:
                            </label>
                            <input name="company"
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent"
                                value={company} 
                                onChange={(e)=> seTCompany(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex w-full mb-6">
                        <div className="flex flex-col w-6/12 pr-2">
                            <label 
                                className="text-gray-200">Featured Image:</label>
                            <input name="fImage"
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent" 
                                value={fImage} 
                                onChange={(e)=> setfImage(e.target.value)}/>
                        </div>
                        <div className="flex flex-col w-6/12 pl-2">
                            <label 
                                className="text-gray-200">file:
                            </label>
                            <input name="file" 
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent"
                                value={file} 
                                onChange={(e)=> setFile(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-6 ">
                            <label 
                                className="text-gray-200">Tags:</label>
                            <input name="tags"
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent"
                                value={tags} 
                                onChange={(e)=> setTags(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mb-6 ">
                            <label 
                                className="text-gray-200">Description:</label>
                            <textarea 
                                name="description" 
                                value={description} 
                                onChange={(e)=> setDescription(e.target.value)}
                                className="p-1 text-gray-200 border border-gray-200 bg-transparent">
                            </textarea>
                    </div>
                    <div className="flex mb-6 justify-between">
                    <div className="flex">
                        <input type="checkbox" className="text-gray-200 bg-gray-400 mr-2 cursor-pointer"
                             name="featured"
                             checked={featured} 
                             value={featured}
                             onChange={(e)=> setFeatured(e.currentTarget.checked)}/>
                        <span className="text-gray-200 -mt-1">Set as featured</span>
                    </div>
                    <button className="p-1 w-3/12 text-gray-200 border border-gray-200 bg-transparent hover:bg-gray-700" type="submit">Save</button>
                </div>                
                </form>
            </fieldset>
            <div className="w-4/12 p-8">
                <header className="mb-6 text-lg -mt-4 font-semibold">Add a tag</header>
                <div className="flex flex-wrap">
                    <h4 className="px-2 py-1 rounded-xl border border-gray-200 text-gray-200 text-sm font-thin mr-2">Actions</h4>
                    <h4 className="px-2 py-1 rounded-xl border border-gray-200 text-gray-200 text-sm font-thin mr-2">Sport</h4>
                    <h4 className="px-2 py-1 rounded-xl border border-gray-200 text-gray-200 text-sm font-thin mr-2">Puzzle</h4>
                    <h4 className="px-2 py-1 rounded-xl border border-gray-200 text-gray-200 text-sm font-thin mr-2">Kids</h4>
                </div>
                <div className="mt-6">
                    <header className="font-semibold mb-4 text-lg">Save tag</header>
                    <form className="flex justify-between">
                        <input name="nameTag" className="w-8/12 border border-gray-200 text-gray-200 bg-transparent p-1"/>
                        <button type="submit" className="w-3/12 border border-gray-200 text-gray-200 bg-transparent hover:bg-gray-500 p-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
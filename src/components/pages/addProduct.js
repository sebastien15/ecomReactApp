import "../../App.css";

function addProduct() {

    return(
        <div class="flex px-10 pt-20 pb-28">
            <fieldset className="p-5 w-8/12 border border-gray-200">
                <legend className="px-4"> Add a game </legend>
                <div className="flex w-full mb-6">
                    <div className="flex flex-col w-6/12 pr-2">
                        <label 
                            className="text-gray-200">Name:
                        </label>
                        <input  name="name"
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent"/>
                    </div>
                    <div className="flex flex-col w-6/12 pl-2">
                        <label 
                            className="text-gray-200">Company:
                        </label>
                        <input name="company"
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent"/>
                    </div>
                </div>
                <div className="flex w-full mb-6">
                    <div className="flex flex-col w-6/12 pr-2">
                        <label 
                            className="text-gray-200">Featured Image:</label>
                        <input name="fImage"
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent" />
                    </div>
                    <div className="flex flex-col w-6/12 pl-2">
                        <label 
                            className="text-gray-200">file:
                        </label>
                        <input name="file" 
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent"/>
                    </div>
                </div>
                <div className="flex flex-col mb-6 ">
                        <label 
                            className="text-gray-200">Tags:</label>
                        <input name="tags"
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent"/>
                </div>
                <div className="flex flex-col mb-6 ">
                        <label 
                            className="text-gray-200">Description:</label>
                        <textarea 
                            name="description" 
                            className="p-1 text-gray-200 border border-gray-200 bg-transparent">
                        </textarea>
                </div>
                <div className="flex mb-6 justify-between">
                    <div className="flex">
                        <input type="checkbox" name="featured" className="text-gray-200 bg-gray-400 mr-2 cursor-pointer"/>
                        <span className="text-gray-200 -mt-1">Set as featured</span>
                    </div>
                    <button className="p-1 w-3/12 text-gray-200 border border-gray-200 bg-transparent hover:bg-gray-700">Save</button>
                </div>                
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
                        <input name="name" className="w-8/12 border border-gray-200 text-gray-200 bg-transparent p-1"/>
                        <button type="submit" className="w-3/12 border border-gray-200 text-gray-200 bg-transparent hover:bg-gray-500 p-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addProduct;
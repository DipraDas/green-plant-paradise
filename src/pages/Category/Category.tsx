const Category = () => {
    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='px-20'>
                    <div className='flex justify-between items-center mb-10'>
                        <p className='text-4xl tracking-widest'>All Categories</p>
                        <div className="flex gap-5">
                            <input
                                type="text"
                                placeholder="Enter Category Name"
                                className="input input-bordered w-full"
                            />
                            <div className='px-5 py-3 bg-[#66a15b] rounded-lg cursor-pointer w-56'>
                                <p className='text-white text-center tracking-wider'>Add Category</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="tracking-widest">Category Name</th>
                                    <th className='flex justify-end'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td className='tracking-widest'>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td className='tracking-widest'>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td className='tracking-widest'>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td className='tracking-widest'>Bonsai</td>
                                    <td className='flex justify-end gap-2'>
                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider">EDIT</button>
                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
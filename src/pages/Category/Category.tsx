import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateCategoryMutation, useDeleteCategoryMutation, useEditCategoryMutation, useGetCategoryQuery } from "../../redux/features/category/categoryApi";
import Swal from "sweetalert2";

const Category = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [createCategory] = useCreateCategoryMutation();
    const { data, error, isLoading } = useGetCategoryQuery(undefined);
    const [editCategory] = useEditCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    let categoryData = []
    if (data && data.success) {
        categoryData = data.data
    }

    const onSubmit = handleSubmit(async (data) => {
        const toastId = toast.loading('Inserting category');
        try {

            const categoryInfo = {
                name: data.name
            }
            const res = await createCategory(categoryInfo).unwrap();
            reset()
            toast.success("Inserted Successfully", { id: toastId, duration: 2000 });
        } catch (err) {
            console.log(err);

            toast.error(err.data.message, { id: toastId, duration: 2000 })
        }
    });

    const handleEditCategory = async (category) => {
        const { value: newName } = await Swal.fire({
            title: "Edit Category",
            input: 'text',
            inputLabel: 'Category Name',
            inputValue: category.name,
            showCancelButton: true,
            confirmButtonText: 'Update',
            showLoaderOnConfirm: true,
            preConfirm: (name) => {
                if (!name) {
                    Swal.showValidationMessage('Category name is required');
                    return;
                }
                return editCategory({ id: category._id, name }).unwrap().then(
                    () => name,
                    (error) => {
                        Swal.showValidationMessage(`Request failed: ${error}`);
                    }
                );
            }
        });

        if (newName) {
            Swal.fire({
                title: "Updated!",
                text: `Category has been updated to: ${newName}`,
                icon: "success"
            });
        }
    };

    const handleDetetingCategory = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const res = await deleteCategory(id).unwrap();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your category has been deleted.",
                    icon: "success"
                });
            } catch (err) {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error deleting the category.",
                    icon: "error"
                });
            }
        }
    };
    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='lg:px-20'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4'>
                        <p className='text-2xl lg:text-4xl tracking-widest px-4 md:px-0'>All Categories</p>
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter Category Name"
                                    className="input input-bordered sm:input-sm lg:input-md col-span-2"
                                    {...register("name", { required: "Name is required" })}
                                />
                                <div className='px-3 lg:px-5 py-1 lg:py-3 bg-[#66a15b] rounded-lg cursor-pointer'>
                                    <button type="submit" className='text-white text-center tracking-wider text-sm lg:text-base'>Add Category</button>
                                </div>
                            </div>
                            {errors.name && <p className="text-red-500 mt-2">{String(errors.name.message)}</p>}
                        </form>
                    </div>
                    <div className="overflow-x-auto">
                        {
                            categoryData.length ?
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className="tracking-widest">Category Name</th>
                                            <th className='flex justify-end'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categoryData.map(category => (
                                                <tr>
                                                    <th>1</th>
                                                    <td className='tracking-widest'>{category.name}</td>
                                                    <td className='flex justify-end gap-2'>
                                                        <button className="btn btn-xs bg-violet-400 text-white tracking-wider" onClick={() => handleEditCategory(category)}>EDIT</button>
                                                        <button className="btn btn-xs bg-red-500 text-white tracking-wider" onClick={() => handleDetetingCategory(category._id)}>DELETE</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table> :
                                <div>
                                    No category found
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
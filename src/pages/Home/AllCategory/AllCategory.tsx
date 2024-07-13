/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import plant3 from '../../../assets/images/product/plant-3.png';
import plant7 from '../../../assets/images/product/plant-7.png';
import { useGetCategoryQuery } from '../../../redux/features/category/categoryApi';

const AllCategory = () => {

    const { data } = useGetCategoryQuery(undefined);

    let categoryData = []
    if (data && data.success) {
        categoryData = data.data;
    }

    return (
        <div className="container mx-auto">
            <div className="px-10 lg:px-32">
                <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">ALL CATEGORIES</p>
                <img className='mx-auto mt-3 mb-16' src={plant3} />
                <div className='flex flex-wrap justify-center gap-8 mb-24'>
                    {
                        categoryData.map((category: {
                            name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        }, index: number) => (
                            <div
                                key={index}
                                className='cursor-pointer flex gap-6 w-72 bg-green-50 border border-green-200 rounded-lg py-5 justify-center items-center shadow-md  transition-all duration-300  transform hover:scale-110'
                            >
                                <img src={plant7} className='w-6' alt="" />
                                <p className='text-lg tracking-wider'>{category.name}</p>
                                <img src={plant7} className='w-6' alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default AllCategory;
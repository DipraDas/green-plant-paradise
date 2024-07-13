import plant3 from '../../../assets/images/product/plant-3.png';

const ImageGallery = () => {
    return (
        <div className="container mx-auto">
            <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">IMAGE GALLERY</p>
            <img className='mx-auto mt-3' src={plant3} alt="" />
            <div className="mt-16 mb-28 lg:px-32">
                <div className="columns-1 gap-3 lg:gap-3 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-3">
                    <img src="https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxob21lJTIwcGxhbnRzfGVufDB8fDB8fHww" alt="" />
                    <img src="https://images.unsplash.com/photo-1613384951754-2cd2baf51b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvbWUlMjBwbGFudHN8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvbnNhaXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img src="https://images.unsplash.com/photo-1467043198406-dc953a3defa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvbnNhaXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img className="h-[236px]" src="https://images.unsplash.com/photo-1614492420822-c3619c2cd1c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJvbnNhaXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img className="w-full h-[450px]" src="https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBwbGFudHN8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
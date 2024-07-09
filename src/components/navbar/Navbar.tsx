import logo from '../../assets/images/logo/green-paradise-logo.jpg';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='ps-28 pe-32 py-8'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <div style={{ maxWidth: '30%' }}>
                                    <img
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <img src={logo} className='w-40' alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className='flex border items-center bg-gray-50 rounded-full'>
                            <input
                                type="text"
                                placeholder='Search Here . . .'
                                className='rounded-full px-6 py-3 w-96 bg-gray-50 outline-none tracking-wider'
                            />
                            <div className='bg-[#66a15b] py-[14px] px-6 rounded-r-full cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="indicator">
                            <span className="indicator-item badge bg-[#66a15b] text-white">1</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
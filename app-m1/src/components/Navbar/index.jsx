import React from 'react'

const Navbar = () => {
    let Links = [
        {name: 'Home', path: '/'},
        {name: 'Tools', path: '/'},
        {name: 'Pricing', path: '/'},
        {name: 'FAQ', path: '/'},
        {name: 'Contact', path: '/'},
        {name: 'Login', path: '/'},
        {name: 'Signup', path: '/'},
    ]
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md: px-10 px-7'>
                <div className='
                px-2
                font-[Museo-300]
                '>
                    <span className='
                    text-indigo-600 text-2xl font-bold
                    '>
                        Prospectss
                        </span>
                </div>
                <ul
                    className='md:flex md:items-center'
                >
                    {
                        Links.map((link, index) => (
                            <li>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
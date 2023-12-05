import logo from '/movie-logo.png';

const menuItems = [
    {
        name: "Movies",
        link: '#'
    },
    {
        name: "Join us",
        link: '#'
    },
    {
        name: "Contact us",
        link: '#'
    },
]

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <a href="" >
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <ul className='menu'>
                        {menuItems.map(e => (
                            <li key={e.name}>
                                <a href={e.link} >{e.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="right-side">

                    </div>
                </div>
            </div>
            <div className="header-scroll">
                <div className="header-container">
                    <div className="logo">
                        <a href="" >
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <ul className='menu'>
                        {menuItems.map(e => (
                            <li key={e.name}>
                                <a href={e.link} >{e.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="right-side">

                    </div>
                </div>
            </div>
        </>

    )
}
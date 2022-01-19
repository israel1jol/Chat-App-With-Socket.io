const SideNav = ({users}) => {
    return (
        <div className="">
            <div className="navbar-nav">
                <div className="lead btn-primary text-center text-white">Active Users</div>
                {
                    users.map((user, i) => (
                        <li className="nav-item list-group-item p-2 mb-2 bg-dark text-white" key={i}>{user.name}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default SideNav
import { Link, NavLink } from 'react-router-dom';
import '@popperjs/core';
const Navbar = () => {
	return (
		<div className="container-fluid p-0 mb-3">
			<nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
				<Link href="/" className="navbar-brand d-block d-lg-none">
					<h1 className="m-0 display-5 text-uppercase">
						<span className="text-primary">News</span>Room
					</h1>
				</Link>
				<button
					type="button"
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
					id="navbarCollapse"
				>
					<div className="navbar-nav mr-auto py-0">
						<NavLink to="/home" className="nav-item nav-link ">
							Home
						</NavLink>
						<NavLink to="/category" className="nav-item nav-link">
							Categories
						</NavLink>
						<NavLink to="/single" className="nav-item nav-link">
							Single News
						</NavLink>
						{/*  test*/}
						<div className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								id="dropdownMenuLink"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</Link>

							<ul
								className="dropdown-menu rounded-0 m-0"
								aria-labelledby="dropdownMenuLink"
							>
								<li>
									<Link className="dropdown-item" href="#1">
										Menu item 1
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#2">
										Menu item 2
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" href="#3">
										Menu item 3
									</Link>
								</li>
							</ul>
						</div>
						{/* test */}
						{/* <div className="nav-item dropdown">
							<Link
								to="/"
								className="nav-link dropdown-toggle"
								data-toggle="dropdown"
								id="dropdownMenuLink"
							>
								Dropdown
							</Link>
							<div
								className="dropdown-menu rounded-0 m-0"
								aria-labelledby="dropdownMenuLink"
							>
								<Link className="dropdown-item">Menu item 1</Link>
								<Link className="dropdown-item">Menu item 2</Link>
								<Link className="dropdown-item">Menu item 3</Link>
							</div>
						</div> */}
						<Link to="/contact" className="nav-item nav-link">
							Contact
						</Link>
					</div>
					<div
						className="input-group ml-auto"
						style={{ width: '100%', maxWidth: '300px' }}
					>
						<input type="text" className="form-control" placeholder="Keyword" />
						<div className="input-group-append">
							<button className="input-group-text text-secondary">
								<i className="fa fa-search"></i>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

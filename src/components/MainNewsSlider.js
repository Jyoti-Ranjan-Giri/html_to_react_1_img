import React from 'react';

const MainNewsSlider = () => {
	return (
		<div>
			<div className="container-fluid py-3">
				<div className="container">
					<div className="row" style={{ height: '435px' }}>
						<div className="col-lg-8">
							<div
								id="carouselExampleCaptions"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-indicators">
									<button
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide-to="0"
										className="active"
										aria-current="true"
										aria-label="Slide 1"
									></button>
									<button
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide-to="1"
										aria-label="Slide 2"
									></button>
									<button
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide-to="2"
										aria-label="Slide 3"
									></button>
								</div>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="./images/news-700x435-1.jpg"
											className="d-block w-100"
											alt="..."
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>First slide label</h5>
											<p>
												Some representative placeholder content for the first
												slide.
											</p>
										</div>
									</div>
									<div className="carousel-item">
										<img
											src="./images/news-700x435-2.jpg"
											className="d-block w-100"
											alt="..."
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>Second slide label</h5>
											<p>
												Some representative placeholder content for the second
												slide.
											</p>
										</div>
									</div>
									<div className="carousel-item">
										<img
											src="./images/news-700x435-2.jpg"
											className="d-block w-100"
											alt="..."
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>Third slide label</h5>
											<p>
												Some representative placeholder content for the third
												slide.
											</p>
										</div>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleCaptions"
									data-bs-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleCaptions"
									data-bs-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span className="visually-hidden">Next</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4" style={{ height: '435px' }}>
							<nav className="navbar navbar-light bg-light">
								<div className="container-fluid">
									<span className="navbar-brand mb-0 h1">Categories</span>
									<span className="navbar-brand mb-0 lead display-1">
										View All
									</span>
								</div>
								<div
									className="position-relative overflow-hidden mb-3"
									style={{ height: '80px' }}
								>
									<img
										className="img-fluid w-100 h-100"
										src="./images/cat-500x80-1.jpg"
										style={{ objectFit: 'cover' }}
										alt=".."
									/>
									<a
										href="/"
										className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
									>
										Business
									</a>
								</div>
								<div
									class="position-relative overflow-hidden mb-3"
									style={{ height: '80px' }}
								>
									<img
										className="img-fluid w-100 h-100"
										src="./images/cat-500x80-2.jpg"
										style={{ objectFit: 'cover' }}
										alt=".."
									/>
									<a
										href="/"
										className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
									>
										Technology
									</a>
								</div>
								<div
									className="position-relative overflow-hidden mb-3"
									style={{ height: '80px' }}
								>
									<img
										class="img-fluid w-100 h-100"
										src="images/cat-500x80-3.jpg"
										style={{ objectFit: 'cover' }}
										alt="/"
									/>
									<a
										href="/"
										className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
									>
										Entertainment
									</a>
								</div>
								<div
									class="position-relative overflow-hidden"
									style={{ height: '80px' }}
								>
									<img
										className="img-fluid w-100 h-100"
										src="images/cat-500x80-4.jpg"
										style={{ objectFit: 'cover' }}
										alt=".."
									/>
									<a
										href="/"
										className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
									>
										Sports
									</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainNewsSlider;

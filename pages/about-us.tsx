import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div>
        <html>
<head>
	<title>About Us Section</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>	
<body>
	<div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="image/img one.jpg">
			</div>
		</div>
	</div>

	
</body>
</html>
    </div>
      <Footer />
    </div>
  );
};

export default Aboutus;

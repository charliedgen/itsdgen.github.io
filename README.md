<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D-Gen Digital Marketing Agency</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>D-Gen Digital Marketing Agency</h1>
        <p>Welcome to D-Gen, where we deliver cutting-edge digital solutions tailored to your needs.</p>
    </header>
    
    <section id="services">
        <h2>Our Services</h2>
        <ul>
            <li>Social Media Marketing</li>
            <li>Content Creation</li>
            <li>SEO</li>
            <li>Production</li>
            <li>Business Consulting</li>
            <li>Software Development</li>
            <li>Website Development</li>
            <li>And More...</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:itsdgen@gmail.com">itsdgen@gmail.com</a></p>
        <p>Mobile (Sri Lanka): +94740234993</p>
        <p>Mobile (UK): +447930159970</p>
        <p>Mobile (Canada): +16478564530</p>
    </section>

    <footer>
        <p>&copy; 2024 D-Gen. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>


// JavaScript for 3D moving objects
document.addEventListener('mousemove', (e) => {
    const movingObject = document.createElement('div');
    movingObject.classList.add('moving-object');
    movingObject.style.left = `${e.pageX}px`;
    movingObject.style.top = `${e.pageY}px`;
    document.body.appendChild(movingObject);
    
    // Remove the object after animation
    setTimeout(() => {
        movingObject.remove();
    }, 2000); // Adjust time if needed
});


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



/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #e0e0e0;
    background: linear-gradient(135deg, #000000, #434343);
    overflow: hidden;
    position: relative;
}

header {
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 3em;
    font-family: 'Courier New', Courier, monospace;
    text-shadow: 2px 2px 4px #000000;
}

header p {
    font-size: 1.2em;
    margin-top: 10px;
}

section {
    padding: 20px;
    text-align: center;
}

#services ul {
    list-style-type: none;
    padding: 0;
}

#services li {
    font-size: 1.2em;
    margin: 10px 0;
}

a {
    color: #1e90ff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
}

footer p {
    font-size: 1em;
}

/* 3D effect */
@keyframes move {
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

.moving-object {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    animation: move 10s infinite linear;
}




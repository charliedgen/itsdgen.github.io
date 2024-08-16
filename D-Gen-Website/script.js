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

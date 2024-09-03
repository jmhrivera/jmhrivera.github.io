// ### JavaScript (`js/portfolio.js`)
// javascript
let currentDescription = null;

function toggleDescription(index) {
    const descriptions = document.querySelectorAll('.desc-card');
    if (currentDescription !== null) {
        descriptions[currentDescription].style.display = 'none';
    }
    if (currentDescription === index) {
        currentDescription = null;
        document.getElementById('portfolio-desc').style.display = 'none';
    } else {
        descriptions.forEach((desc, idx) => {
            if (idx !== index) {
                desc.style.display = 'none';
            }
        });
        descriptions[index].style.display = 'block';
        currentDescription = index;
        document.getElementById('portfolio-desc').style.display = 'block';
    }
}
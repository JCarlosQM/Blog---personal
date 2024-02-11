// Efecto animado de los titulos 

document.addEventListener('DOMContentLoaded', function () {
    var titles = document.querySelectorAll('.formTextTitle');

    titles.forEach(function (title) {
        var spans = title.querySelectorAll('span');
        var delayIncrement = 0.1; // Time increment between each letter
        var baseDelay = 0.2; // Base time delay for the first letter

        spans.forEach(function (span, index) {
            // Apply the delay based on the index of the span
            span.style.animationDelay = `${baseDelay + (delayIncrement * index)}s`;
        });
    });
});

// Efecto al direccionar a un link

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons by their class
    var buttons = document.querySelectorAll('.styleButton');

    // Loop over each button and add a click event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default jump to the anchor
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target element
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Set focus on the title within the target element
            var titleElement = targetElement.querySelector('.formTextTitle');
            titleElement.classList.add('highlightedTitle');

            // Remove the highlight after  2 seconds
            setTimeout(function() {
                titleElement.classList.remove('highlightedTitle');
            },  2000);
        });
    });
});

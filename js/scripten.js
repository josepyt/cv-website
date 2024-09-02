document.addEventListener("DOMContentLoaded", function() {
    var abilities = document.querySelectorAll(".ability li");
    
    abilities.forEach(function(ability) {
        ability.addEventListener("mouseover", function() {
            switch (this.id) {
                case "li1":
                    this.textContent = "Good";
                    break;
                case "li2":
                    this.textContent = "Good";
                    break;
                case "li3":
                    this.textContent = "Intermediate";
                    break;
                case "li4":
                    this.textContent = "Intermediate";
                    break;
                case "li5":
                    this.textContent = "Intermediate";
            }
        });
        
        ability.addEventListener("mouseout", function() {
            switch (this.id) {
                case "li1":
                    this.textContent = "HTML";
                    break;
                case "li2":
                    this.textContent = "CSS";
                    break;
                case "li3":
                    this.textContent = "Python";
                    break;
                case "li4":
                    this.textContent = "Javascript";
                    break;
                case "li5":
                    this.textContent = "C#";
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);


            const scrollDuration = 800; 
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, scrollDuration);
                window.scrollTo(0, run);
                if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    });
});


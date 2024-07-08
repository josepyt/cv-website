document.addEventListener("DOMContentLoaded", function() {
    var abilities = document.querySelectorAll(".ability li");
    
    abilities.forEach(function(ability) {
        ability.addEventListener("mouseover", function() {
            switch (this.id) {
                case "li1":
                    this.textContent = "İyi";
                    break;
                case "li2":
                    this.textContent = "İyi";
                    break;
                case "li3":
                    this.textContent = "Orta Seviye";
                    break;
                case "li4":
                    this.textContent = "Orta Seviye";
                    break;
                case "li5":
                    this.textContent = "Orta Seviye";
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

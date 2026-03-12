document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close-btn");

    // Sahifadagi barcha kartochkalarni olish
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Modalni ochish
            modal.style.display = "block";
            
            // Rasmni manbasini olish
            const clickedImg = this.querySelector("img");
            modalImg.src = clickedImg.src;

            // Ismni olish (h3 yoki p dan)
            const nameText = this.querySelector("p")?.innerText || 
                             this.querySelector("h3")?.innerText;
            modalCaption.innerText = nameText;
            
            // Animatsiya: Rasm o'sib chiqishi uchun
            modalImg.style.transform = "scale(0.8)";
            setTimeout(() => {
                modalImg.style.transition = "transform 0.3s ease";
                modalImg.style.transform = "scale(1)";
            }, 10);
        });
    });

    // Yopish tugmasi mantiqi
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Modal atrofini (qora fonni) bosganda yopilish
    modal.onclick = (e) => {
        if (e.target === modal || e.target.classList.contains('modal-body')) {
            modal.style.display = "none";
        }
    };

    // ESC tugmasini bosganda yopilish
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modal.style.display = "none";
    });
});
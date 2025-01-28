const faqs = document.querySelectorAll(".faq");
function checkForSearchTerm() {
    const searchTerm = window.find(""); 
    if (!searchTerm) return;

    faqs.forEach((faq) => {
        const resposta = faq.querySelector(".resposta p").innerText;
        if (resposta.toLowerCase().includes(searchTerm.toLowerCase())) {
            faq.classList.add("active");  
        } else {
            faq.classList.remove("active"); 
        }
    });
}

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'f') {
        setTimeout(checkForSearchTerm, 0);  
    }
});
    
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

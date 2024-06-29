const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden');
            }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
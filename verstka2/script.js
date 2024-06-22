document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const sections = document.querySelectorAll('section');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');
            sections.forEach(section => section.classList.remove('active'));

            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add('active');
            } else {
                console.error(`Section with id ${target} not found.`);
            }
        });
    });

    if (buttons.length > 0) {
        buttons[0].classList.add('active');
        const firstTarget = buttons[0].getAttribute('data-target');
        const firstSection = document.getElementById(firstTarget);
        if (firstSection) {
            firstSection.classList.add('active');
        } else {
            console.error(`Section with id ${firstTarget} not found.`);
        }
    }
});
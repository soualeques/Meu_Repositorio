let icon_menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');

icon_menu.onclick = () =>
{
    icon_menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ============== navbar ==============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{
    sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
                {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    })
                };
        });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* close navbar */
    icon_menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* telefone */
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', () => {
  const inputValue = telefoneInput.value.replace(/\D/g, '');
  const formattedValue = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  telefoneInput.value = formattedValue;
});


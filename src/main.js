        const html = document.documentElement;
        const darkSwitchIcon = document.querySelector("#dark-switch-icon");
        const darkSwitch = document.querySelector("#dark-switch");
        const darkText = document.querySelector("#dark-text");
        let isDarkMode = false;

        // Switch theme function
        const toggleTheme = () => {
            isDarkMode = !isDarkMode;
            switchTheme()
        }

        const toDark = () => {
            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
            darkSwitch.classList.remove('bg-slate-800')
            darkSwitch.classList.add('bg-slate-100')
            localStorage.setItem('data-theme', 'dark')
            html.classList.add('dark')
            darkText.classList.add('-translate-x-7')
            darkText.innerText = 'ON'
        }

        const toLight = () => {
            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
            darkSwitch.classList.remove('bg-slate-100')
            darkSwitch.classList.add('bg-slate-800')
            localStorage.removeItem('data-theme')
            html.classList.remove('dark')
            darkText.classList.remove('-translate-x-7')
            darkText.innerText = 'FF'
            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
            setTimeout(() => {
                darkSwitchIcon.classList.remove('rotate-[360deg]')
            }, 200)
        }

        const switchTheme = () => {
            isDarkMode ? toDark() : toLight()
        }


        const dataTheme = localStorage.getItem('data-theme')

        dataTheme === 'dark' ? toDark() : toLight();


        //swiper
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: 'true',
            
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
          
            autoplay: {
                delay: 5000,
            },
          });

          // scroll reveal 
          ScrollReveal().reveal('.headline', {
            duration: 1000
          });

          ScrollReveal().reveal('.card', {
            origin: 'bottom',
            duration: 2000,
            distance: "60px",
            interval:  300
          });

          ScrollReveal().reveal('.logo', {
            distance: '60px',
            origin: 'top',
            duration: 2000
          });
document.addEventListener("DOMContentLoaded", function () {
    const dark = document.querySelector(".dark-bgc"),
        darkSucces = document.querySelector(".dark-bgc-succes"),
        privacy = document.querySelector(".privacy_container"),
        // privacyBtn = document.querySelector(".privacyPolice"),
        cancelPopupPr = document.querySelector(".privacy_container .cancel_popup"),
        forms = document.querySelectorAll("form"),
        succesPopup = document.querySelector("#successPopup"),
        cartPopup = document.querySelector(".cart_popup")

    // privacyBtn.addEventListener("click", function (e) {
    //     e.preventDefault()
    //     privacy.style.display = "block"
    //     dark.style.display = "block"
    // })

    cancelPopupPr.addEventListener("click", function (e) {
        e.preventDefault()
        privacy.style.display = "none"
        succesPopup.style.display = "none"
        dark.style.display = "none"
        darkSucces.style.display = "none"
    })

    //fade out for main container
    if (document.querySelector('.slider-images')) {
        const images1 = document.querySelectorAll('.slider-images img')

        let currentImgIndex1 = 0

        if (images1.length > 0) images1[0].classList.add('active')

        setInterval(() => {
            if (images1.length > 0) {
                images1[currentImgIndex1].classList.remove('active')
                currentImgIndex1 = (currentImgIndex1 + 1) % images1.length
                images1[currentImgIndex1].classList.add('active')
            }
        }, 3000)
    }

    //burger
    if (document.querySelector(".burger")) {
        const burger = document.querySelector(".burger"),
            menu = document.querySelector(".nav"),
            cancel = document.querySelector(".cancel"),
            listItem = menu.querySelectorAll("a")

        burger.addEventListener("click", function () {
            menu.style.right = "-10px";
            dark.style.display = "block"
            dark.style.zIndex = "2"
        })
        
        function cancelBurger() {
            menu.style.right = "-100%";
            dark.style.zIndex = "6"
            dark.style.display = "none"
            privacy.style.display = "none"
        }
        listItem.forEach(item => {
            item.addEventListener("click", cancelBurger)
        })
        cancel.addEventListener("click", function (e) {
            e.preventDefault()
            cancelBurger()
        })
        dark.addEventListener("click", cancelBurger)
    }

    //get more reviews
    let reviewsPerPage = 12,
        currentIndex = 0

    function renderReviews() {
        const containerReviews = document.querySelector('.reviews_list'),
            nextReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

        nextReviews.forEach(reviews => {
            const picture = document.createElement('picture'),
                img = document.createElement('img')
            img.src = 'img/reviews/' + `${reviews.src}` + '.jpg'
            img.alt = `${reviews.alt}`
            img.setAttribute('loading', 'lazy')
            img.addEventListener("click", function () {
                const popupImg = document.querySelector('.popup_img') 
                    srcPopup = popupImg.querySelector("img")
                    
                srcPopup.src = this.src;
                darkBg.style.display = "block"
                popupImg.style.display = "block";
            });
            picture.appendChild(img)
            containerReviews.appendChild(picture)
        })

        currentIndex += reviewsPerPage

        if (currentIndex >= reviews.length) {
            document.querySelector('#show-more-btn').style.display = 'none'
        }

    }

    document.querySelector('#show-more-btn').addEventListener('click', function(e){
        e.preventDefault()
        renderReviews()
    })

    renderReviews()


    // випадаючі блоки з інформацією
    function toggleVisibility(buttons, visibleClass, activeClass) {
        buttons.forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault()
                const descriptionMore = item.nextElementSibling
                descriptionMore.classList.toggle(visibleClass)
                item.classList.toggle(activeClass)
            })
        })
    }

    const btnReadMore = document.querySelectorAll(".readmore")

    toggleVisibility(btnReadMore, "visible", "readmore-active")

    //btn for block info
    const buttons = document.querySelectorAll('.nav a '),
        sections = document.querySelectorAll('.description-more'),
        footerBtn = document.querySelectorAll(".menu_footer a")
    let activeSection = null

    function hideAllSections() {
        sections.forEach(section => section.classList.remove('visible'))
    }

    function deactivateAllButtons() {
        buttons.forEach(button => button.classList.remove('visible'))
    }

    function deactivateAllButtons() {
        footerBtn.forEach(button => button.classList.remove('visible'))
    }

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const target = button.getAttribute('data-target')

            hideAllSections()
            deactivateAllButtons()

            const sectionToShow = document.getElementById(target)
            if (sectionToShow) {
                if (activeSection && activeSection.previousElementSibling) {
                    activeSection.previousElementSibling.classList.remove('readmore-active')
                }

                sectionToShow.classList.add('visible')
                if (sectionToShow.previousElementSibling) {
                    sectionToShow.previousElementSibling.classList.add('readmore-active')
                }

                activeSection = sectionToShow
            }
        })
    })
    footerBtn.forEach(button => {
        button.addEventListener('click', function (event) {
            const target = button.getAttribute('data-target')

            hideAllSections()
            deactivateAllButtons()

            const sectionToShow = document.getElementById(target)
            if (sectionToShow) {
                if (activeSection && activeSection.previousElementSibling) {
                    activeSection.previousElementSibling.classList.remove('readmore-active')
                }

                sectionToShow.classList.add('visible')
                if (sectionToShow.previousElementSibling) {
                    sectionToShow.previousElementSibling.classList.add('readmore-active')
                }

                activeSection = sectionToShow
            }
        })
    })

    hideAllSections()
    deactivateAllButtons()

    //succes popup
    succesPopup.style.transition = "opacity 0.5s ease"
    succesPopup.style.opacity = "0"
    succesPopup.style.zIndex = "-1"

    darkSucces.style.transition = "opacity 0.5s ease"
    darkSucces.style.opacity = "0"
    document.querySelectorAll("form[action='sendorder.php'], form[action='senddata.php'], form[action='sendcontact.php']").forEach(form => {
        form.addEventListener("submit", (e) => {
            if (validateForm(form)) {
                popupSpivpracia.style.display = "none"
                cartPopup.style.display = "none"
                succesPopup.style.display = "block"
                succesPopup.style.zIndex = "10"
                dark.style.display = "none"
                darkSucces.style.display = "block"

                setTimeout(() => {
                    succesPopup.style.opacity = "1"
                    succesPopup.style.visibility = "visible"
                    darkSucces.style.opacity = "1"
                }, 10);



                function closeSuccessPopup() {
                    succesPopup.style.opacity = "0"
                    succesPopup.style.visibility = "hidden"
                    darkSucces.style.opacity = "0"

                    setTimeout(() => {
                        darkSucces.style.display = "none"
                        succesPopup.style.display = "none"
                    }, 500)
                }
                darkSucces.addEventListener("click", closeSuccessPopup)
                const closeButton = succesPopup.querySelector(".successPopup .cancel_popup")
                closeButton.addEventListener("click", closeSuccessPopup)
            }
        })
    })

})
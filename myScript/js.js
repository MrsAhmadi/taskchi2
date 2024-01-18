$(function () {

    // js for dark
    $(document).ready(function () {
    // Check the dark mode preference from localStorage
    let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state
    if (isDarkMode) {
        enableDarkMode();
        // Check the checkbox on page load if dark mode is enabled
        $('#nightModeSwitch').prop('checked', true);
    }

    // Toggle dark mode on checkbox change
    $('#nightModeSwitch').change(function () {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        // Add a class to the body to apply dark mode styles
        $('body').addClass('dark-theme');
        // Save dark mode preference to localStorage
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        // Remove the class to disable dark mode styles
        $('body').removeClass('dark-theme');
        // Remove dark mode preference from localStorage
        localStorage.setItem('darkMode', null);
    }
});

    //     js for open box-search
    $('.setting-btn').click(function () {
        $('.box-setting').toggleClass('active')
    })

    // js for background btn-color-->
    $(document).ready(function(){
        $(".btn-color").each(function(){
            let colorValue = $(this).val();
            $(this).css("background-color", colorValue);
        });
    });

    // js for changeTheme
    $(document).ready(function(){
        $(".btn-color").click(function(){
            let colorValue = $(this).val();
            document.documentElement.style.setProperty('--main-color', colorValue);

            let colorText = $(this).attr('data-color');
            $(":root").css("--text-color", colorText);

            // ذخیره رنگ در local storage
            localStorage.setItem("mainColor", colorValue);
            localStorage.setItem("textColor",colorText );
        });

        // بازخوانی رنگ از local storage
        let storedColor = localStorage.getItem("mainColor");
        if (storedColor) {
            document.documentElement.style.setProperty('--main-color', storedColor);
        }
        let storedColorText = localStorage.getItem("textColor");
        if (storedColorText) {
            $(":root").css("--text-color", storedColorText);
        }
    });

    // js for active menu
    $('ul.nav-bar li.nav-item').click(function () {
        $('a.nav-link').removeClass('active')
        $(this).children('a.nav-link').addClass('active')

    })
    $('ul.list-collapse li').click(function () {
        $('ul.list-collapse li a').removeClass('active-two')
        $(this).children('a').addClass('active-two')
    })
    // js for login
    $('input[required], textarea[required]').on('invalid', function () {
        this.setCustomValidity('وارد کردن این قسمت الزامی است');
    });

    $('.input-group .show').click(function () {
        $('.input-group .show i').toggleClass('fa-eye-slash');
        if ($('#password').attr('type')==='password' ) {
            $('#password').attr('type','text')
        }else{
            $('#password').attr('type','password');
        }
    })

    $('input[type="password"]').on('invalid', function () {
        if (this.validity.valueMissing) {
            this.setCustomValidity("وارد کردن پسورد الزامی است");
        }
        else if (this.validity.typeMismatch) {
            this.setCustomValidity("وارد کردن پسورد الزامی است");
        }
    });

    $('.hamburger-button').on('click', function () {
        $('#sidebarMenu').toggleClass('open-sidebar');

    })
    $('main').click(function () {
        $('#sidebarMenu').removeClass('open-sidebar');
    })
    $('.closed').click(function () {
        $('#sidebarMenu').removeClass('open-sidebar');

    })


    // Filter Tables
    $(document).ready(function () {
        $("#search").on("keyup", function () {
            let value = $(this).val().toLowerCase();
            $(".table tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    // script for user_access
    $('#Decor li i').on('click', function (e) {
        e.stopPropagation();
        $(this).parent('li').children('ul').slideToggle();
        $(this).toggleClass('check-box');
    });
    $('.card-toolbar').click(function () {
        $(this).children('.menu-sub').slideToggle()
    })
    $('div.menu-sub ul>li:has(ul)').children('a').append('<i class="fa-solid fa-angle-left"></i>');

    $('#checkAll').change(function () {
        let status  =   $(this).is(':checked');
        $('.form-check-input').prop('checked',status);
    });

    $('.form-check-input').change(function () {
            //تعداد کل چک باکس ها
            let AllCheckboxCount=$('.form-check-input').length;
            //تعداد کل چک باکس هایی که تیک خورده اند
            let AllSelectedCheckboxCount= $('.form-check-input:checked').length;

            if (AllCheckboxCount===AllSelectedCheckboxCount) {
                $('#checkAll').prop('checked',true)
            }else{
                $('#checkAll').prop('checked',false)
            }
    });

    $('.btn-search').click(function () {
        $('.box-search').slideToggle()
    })

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    // js for top-button
    $('.box-btn-top button').click(function () {
        $('.btn-style').removeClass('active')
        $(this).addClass('active')
    })


    $('.datepicker').datepicker();
    $('.clockpicker').clockpicker();





})



<template>
    <section class="my-lg-14 mb-8">
        <main>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light d-none d-md-block">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Also Available on Playstore</h1>
                    <p class="lead fw-normal">Click the link to download our mobile application to get access to more
                        pharmaStep features.</p>
                    <p>&nbsp;</p>
                    <!-- Google Play button -->
                    <a href="https://play.google.com/store/apps/details?id=com.pharmastepng.meds" target="_blank"
                        class="market-btn google-btn" role="button">
                        <span class="market-button-subtitle">Download on the</span>
                        <span class="market-button-title">Google Play</span>
                    </a>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div class="d-block d-md-none flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Also Available on Playstore</h2>
                        <p class="lead">Click the link to download our mobile application to get access to more pharmaStep
                            features.</p>
                        <p>&nbsp;</p>
                        <a href="https://play.google.com/store/apps/details?id=com.pharmastepng.meds" target="_blank"
                            class="market-btn google-btn btn btn-outline-dark btn-lg" role="button">
                            <span class="market-button-subtitle">Download on the</span>
                            <span class="market-button-title text-bold">Google Play</span>
                        </a>
                    </div>
                    <div class="bg-light shadow-sm mx-auto product-device2"
                        style="width: 80%; height: 300px; border-radius: 21px 21px 0 0; padding-right: 5px;">
                    <img src="../components/images/framers.png" style=" border-radius: 8px;" width="800"/></div>
                </div>
            </div>
        </main>
    </section>
</template>


<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}


.container {
    max-width: 960px;
}

.site-header {
    background-color: rgba(0, 0, 0, .85);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

.site-header a {
    color: #8e8e8e;
    transition: color .15s ease-in-out;
}

.site-header a:hover {
    color: #fff;
    text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
    background-image: url('../components/images/farmers.png');
    position: absolute;
    right: 10%;
    bottom: -25%;
    width: 310px;
    height: 540px;
    background-color: #333;
    border-radius: 31px;
    transform: rotate(40deg);
}



.product-device::before {
    position: absolute;
    top: 10%;
    right: 10px;
    bottom: 10%;
    left: 10px;
    content: "";
    background-color: rgba(255, 255, 255, .1);
    border-radius: 5px;
}

.product-device-2 {
    top: -25%;
    right: auto;
    bottom: 0;
    left: 5%;
    background-color: #e5e5e5;
}

.flex-equal>* {
    flex: 1;
}

@media (min-width: 768px) {
    .flex-md-equal>* {
        flex: 1;
    }
}


.market-btn {
    display: inline-block;
    padding: 0.6125rem 1.25rem;
    padding-left: 2.8125rem;
    border-radius: 7px;
    border: 0.5px solid rgb(129, 127, 127); 
    -webkit-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    background-position: center left 0.75rem;
    background-color: #fff;
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    text-decoration: none;
    color: black;
}

.market-btn .market-button-title {
    display: block;
    color: #000000;
    font-weight: 500;
    font-size: 1.125rem;
}

.market-btn .market-button-subtitle {
    display: block;
    margin-bottom: -0.25rem;
    color: #585858;
    font-size: 0.75rem;
}

.market-btn:hover {
    background-color: #f7f7f7;
    text-decoration: none;
}

.google-btn {
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>



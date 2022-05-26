<template>
  <div class="surface-0 overflow-hidden">
    <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      <div
        class="
          py-2
          px-4
          mx-0
          md:mx-6
          lg:mx-8 lg:px-8
          flex
          align-items-center
          justify-content-between
          relative
          lg:static
        "
      >
        <!-- <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a> -->
        <div
          class="
            surface-0
            align-items-center
            flex-grow-1
            justify-content-between
            hidden
            lg:flex
            absolute
            lg:static
            w-full
            left-0
            px-6
            lg:px-0
            z-2
          "
          style="top: 92%"
        >
          <ul
            class="
              list-none
              p-0
              m-0
              flex
              lg:align-items-center
              select-none
              flex-column
              lg:flex-row
              cursor-pointer
            "
          >
            <li>
              <router-link to="/" class="flex align-items-center">
                <img
                  src="layout/images/logo-tts.jpg"
                  alt="TTS Logo"
                  height="65"
                  width="65"
                  class="mr-0 lg:mr-2"
                  @click="smoothScroll('#hero')"
                />
              </router-link>
            </li>
            <li>
              <a
                @click="smoothScroll('#aboveHero')"
                class="
                  flex
                  m-0
                  md:ml-5
                  px-0
                  py-3
                  text-900
                  font-medium
                  line-height-3
                  p-ripple
                "
                v-ripple
              >
                <span>Trang Chủ</span>
              </a>
            </li>
            <li>
              <router-link to="/login">
                <a
                  @click="smoothScroll('#features')"
                  class="
                    flex
                    m-0
                    md:ml-5
                    px-0
                    py-3
                    text-900
                    font-medium
                    line-height-3
                    p-ripple
                  "
                  v-ripple
                >
                  <span>Chăm sóc khách hàng</span>
                </a>
              </router-link>
            </li>
            <li>
              <a
                @click="smoothScroll('#highlight')"
                class="
                  flex
                  m-0
                  md:ml-5
                  px-0
                  py-3
                  text-900
                  font-medium
                  line-height-3
                  p-ripple
                "
                v-ripple
              >
                <span>Về chúng tôi</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#pricing')"
                class="
                  flex
                  m-0
                  md:ml-5
                  px-0
                  py-3
                  text-900
                  font-medium
                  line-height-3
                  p-ripple
                "
                v-ripple
              >
                <span>Bảng giá</span>
              </a>
            </li>
            <li class="relative">
              <a
                class="
                  flex
                  px-6
                  lg:px-5
                  py-3
                  lg:py-0
                  h-full
                  align-items-center
                  text-900
                  font-medium
                  transition-colors transition-duration-150
                  p-ripple
                "
                @click="showProduct = !showProduct"
                ><span>Sản Phẩm</span
                ><i class="pi pi-chevron-down ml-auto lg:ml-3"></i
                ><span
                  class="p-ink"
                  style="
                    height: 160px;
                    width: 160px;
                    top: -39px;
                    left: 39.175px;
                  "
                ></span
              ></a>
              <transition>
                <ul
                  class="
                    list-none
                    m-0
                    px-5
                    lg:p-0
                    py-0
                    border-round
                    shadow-0
                    lg:shadow-2 lg:absolute
                    surface-overlay
                    origin-top
                    w-full
                    lg:w-15rem
                  "
                  v-if="showProduct && showNavbar"
                >
                  <li>
                    <router-link to="/qlvt">
                      <a
                        class="
                          flex
                          p-3
                          align-items-center
                          text-900
                          hover:surface-50
                          transition-colors transition-duration-150
                          p-ripple
                        "
                        ><i class="pi pi-car text-2xl mr-2 text-900"></i
                        ><span>Phần mềm quản lý vận tải</span
                        ><span class="p-ink"></span
                      ></a>
                    </router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
          <div
            class="
              flex
              justify-content-between
              lg:block
              border-top-1
              lg:border-top-none
              surface-border
              py-3
              lg:py-0
              mt-3
              lg:mt-0
            "
          >
            <router-link to="/login">
              <Button
                label="Đăng nhập"
                class="
                  p-button-text p-button-rounded
                  border-none
                  font-light
                  line-height-2
                  text-blue-500
                "
              ></Button>
            </router-link>
            <router-link to="/register">
              <Button
                label="Đăng ký"
                class="
                  p-button-rounded
                  border-none
                  ml-5
                  font-light
                  text-white
                  line-height-2
                  bg-blue-500
                "
              ></Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div id="aboveHero"></div>

    <div class="grid py-4 px-4 lg:px-8 relative" id="hero">
      <div class="mx-4 md:mx-8 mt-0 md:mt-4">
        <h1 class="text-6xl font-bold text-gray-900 line-height-2">
          <span class="font-light block">Phần mềm quản lí vận tải</span
          >Logistics TTS SOFT
        </h1>
        <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">
          Hiệu xuất, hoàn thiện đơn hàng. Năng xuất kho, bãi. Tối ưu điều vận...
        </p>
        <router-link to="/login">
          <Button
            label="Tham gia ngay"
            class="
              p-button-rounded
              text-xl
              border-none
              mt-5
              bg-blue-500
              font-normal
              text-white
              line-height-3
              px-3
            "
          ></Button>
        </router-link>
      </div>
      <img
        src="layout/images/Transportation.jpg"
        width="609"
        class="bottom-0 image-back1"
        alt="hero screen"
        style="right: 10%"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      showProduct: false,
      lastScrollPosition: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    smoothScroll(id) {
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    },

    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.showProduct = false;
      this.lastScrollPosition = currentScrollPosition;
    },
  },

  // computed: {
  //     logoColor() {
  //         if (this.$appState.darkTheme) return 'white';
  //         return 'dark';
  //     }
  // }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.navbar {
  position: fixed !important;
  /* top: -1px; */
  left: 0;
  z-index: 9999;
  background: white;
  width: 100%;
  /* height: 87px; */
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  padding-top: 0px;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

#hero {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
  height: 700px;
  overflow: hidden;
  margin-top: 80px;
}

.image-back1 {
  border-radius: 10px 10px 0 0;
}

@media screen and (min-width: 768px) {
  #hero {
    -webkit-clip-path: ellipse(150% 87% at 93% 13%);
    clip-path: ellipse(150% 87% at 93% 13%);
    height: 530px;
  }
}

@media screen and (min-width: 1300px) {
  #hero > img {
    position: absolute;
  }

  #hero > div > p {
    max-width: 450px;
  }
}

@media screen and (max-width: 1300px) {
  #hero {
    height: 600px;
  }

  #hero > img {
    position: static;
    transform: scale(1);
    margin-left: auto;
  }

  #hero > div {
    width: 100%;
  }

  #hero > div > p {
    width: 100%;
    max-width: 100%;
  }
}
</style>

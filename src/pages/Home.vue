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

    <div class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8" id="features">
      <div class="grid justify-content-center">
        <div class="col-12 text-center mt-8 mb-4">
          <h2 class="text-900 font-normal mb-2">Các đặc tính của phần mềm</h2>
          <span class="text-600 text-2xl"
            >Lợi thế cho khách hàng sử dụng ...</span
          >
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(253, 228, 165, 0.2),
                  rgba(187, 199, 205, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(253, 228, 165, 0.2),
                  rgba(187, 199, 205, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-yellow-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
              </div>
              <h5 class="mb-2 text-900">Dễ sử dụng</h5>
              <span class="text-600"
                >Các tính năng được tối ưu theo nghiệp vụ giúp khách hàng dễ
                dàng sử dụng.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(145, 226, 237, 0.2),
                  rgba(251, 199, 145, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(253, 228, 165, 0.2),
                  rgba(172, 180, 223, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-cyan-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
              </div>
              <h5 class="mb-2 text-900">Giao diện thân thiện</h5>
              <span class="text-600"
                >Giao diện thiết kế để khách hàng thao tác tiện lợi và nhanh
                chóng.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(145, 226, 237, 0.2),
                  rgba(172, 180, 223, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(172, 180, 223, 0.2),
                  rgba(246, 158, 188, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-indigo-200
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
              </div>
              <h5 class="mb-2 text-900">Tài liệu chi tiết</h5>
              <span class="text-600"
                >Tài liệu hướng chi tiết và đầy đủ cho việc học tập phần
                mềm.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(187, 199, 205, 0.2),
                  rgba(251, 199, 145, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(253, 228, 165, 0.2),
                  rgba(145, 210, 204, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-bluegray-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
              </div>
              <h5 class="mb-2 text-900">Nội bộ hóa</h5>
              <span class="text-600"
                >Phần mềm làm giảm áp lực ghi nhớ cho nhân sự, tăng tốc độ làm
                việc và giảm thiểu sai sót
              </span>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(187, 199, 205, 0.2),
                  rgba(246, 158, 188, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(145, 226, 237, 0.2),
                  rgba(160, 210, 250, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-orange-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-star text-2xl text-orange-700"></i>
              </div>
              <h5 class="mb-2 text-900">Tối ưu hiệu xuất</h5>
              <span class="text-600"
                >Phần mềm được phát triển qua nhiều năm, với hiệu xuất tối ưu ,
                nhanh chóng.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(251, 199, 145, 0.2),
                  rgba(246, 158, 188, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(172, 180, 223, 0.2),
                  rgba(212, 162, 221, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-pink-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-calendar text-2xl text-pink-700"></i>
              </div>
              <h5 class="mb-2 text-900">Sẵn sàng đối ứng 24/7</h5>
              <span class="text-600"
                >Chúng tôi luôn hỗ trợ và đối ứng cho các nghiệp vụ bổ xung từ
                khách hàng.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(145, 210, 204, 0.2),
                  rgba(160, 210, 250, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(187, 199, 205, 0.2),
                  rgba(145, 210, 204, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-teal-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
              </div>
              <h5 class="mb-2 text-900">Sẵn sàng sử dụng</h5>
              <span class="text-600"
                >Chúng tôi có những hệ thống sẵn sàng sử dụng luôn cho các doanh
                nghiệp cần tối ưu chi phí.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(145, 210, 204, 0.2),
                  rgba(212, 162, 221, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(251, 199, 145, 0.2),
                  rgba(160, 210, 250, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-blue-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-database text-2xl text-blue-700"></i>
              </div>
              <h5 class="mb-2 text-900">Công nghệ tiên tiến</h5>
              <span class="text-600"
                >Sử dụng công nghệ điện toán đám mây để lưu trữ dữ liệu khách
                hàng, thống kê và báo cáo trên nền tảng số.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
          <div
            style="
              height: 160px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(160, 210, 250, 0.2),
                  rgba(212, 162, 221, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(246, 158, 188, 0.2),
                  rgba(212, 162, 221, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-purple-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-lock text-2xl text-purple-700"></i>
              </div>
              <h5 class="mb-2 text-900">Bảo mật</h5>
              <span class="text-600"
                >Hệ thống bảo mật 3 lớp, bảo vệ doanh nghiệp trước mọi mối đe
                dọa trên nền tảng số.</span
              >
            </div>
          </div>
        </div>

        <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
          <div
            style="
              height: 180px;
              padding: 2px;
              border-radius: 10px;
              background: linear-gradient(
                  90deg,
                  rgba(187, 199, 205, 0.2),
                  rgba(246, 158, 188, 0.2)
                ),
                linear-gradient(
                  180deg,
                  rgba(145, 226, 237, 0.2),
                  rgba(160, 210, 250, 0.2)
                );
            "
          >
            <div class="p-3 surface-card h-full" style="border-radius: 8px">
              <div
                class="
                  flex
                  align-items-center
                  justify-content-center
                  bg-red-200
                  mb-3
                "
                style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
              >
                <i class="pi pi-fw pi-car text-2xl text-red-700"></i>
              </div>
              <h5 class="mb-2 text-900">Quản lý sức khỏe xe</h5>
              <span class="text-600"
                >Phần mềm quản lý hồ sơ sức khỏe, lịch sử sửa chữa của đội xe,
                quản lý xuất nhập tồn thiết bị, phụ tùng đối với các doanh
                nghiệp có xưởng sửa chữa riêng.</span
              >
            </div>
          </div>
        </div>

        <div
          id="ceo"
          class="col-12 mt-8 mb-8 p-2 md:p-8"
          style="
            border-radius: 20px;
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.6),
                rgba(255, 255, 255, 0.6)
              ),
              radial-gradient(
                77.36% 256.97% at 77.36% 57.52%,
                #efe1af 0%,
                #c3dcfa 100%
              );
          "
        >
          <div
            class="
              flex flex-column
              justify-content-center
              align-items-center
              text-center
              px-3
              py-3
              md:py-0
            "
          >
            <h3 class="text-gray-900 mb-2">Mr Hasegawa</h3>
            <span class="text-gray-600 text-2xl">CEO TTS-SOFT</span>
            <p
              class="
                text-gray-900
                sm:line-height-2
                md:line-height-4
                text-2xl
                mt-4
              "
              style="max-width: 800px"
            >
              "Kể từ khi tốt nghiệp năm 1986, tôi đã hoạt động trong lĩnh vực
              CNTT và phát triển các chương trình nhúng. Năm 2007, tôi đã dành 7
              năm onsite tại Việt Nam với đơn đặt hàng làm việc của riêng mình.
              Khi đó, nền công nghệ của Nhật Bản rất phát triển, nhưng có ít
              nhân sự trẻ. Việt Nam lại có nhiều nhân sự trẻ và chăm chỉ nhưng
              công nghệ của Việt Nam vẫn kém hơn so với Nhật Bản. Tôi nghĩ rằng
              nếu kết hợp công nghệ Nhật Bản với nhân sự trẻ tiềm năng Việt Nam
              để tạo ra những sản phẩm tuyệt vời. Vì vậy tôi đã rời công ty và
              thành lập công ty của riêng mình..”
            </p>
            <img
              src="layout/images/hasegawa.jpg"
              class="mt-4"
              style="height: 24rem"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8" id="highlight">
      <div class="text-center">
        <h2 class="text-900 font-normal mb-2">Sứ mệnh công ty</h2>
        <span class="text-600 text-2xl">TTS-SOFT</span>
      </div>

      <div class="grid mt-8 pb-2 md:pb-8">
        <div
          class="
            flex
            justify-content-center
            col-12
            lg:col-6
            bg-purple-100
            p-0
            flex-order-1
            lg:flex-order-0
          "
          style="border-radius: 8px"
        >
          <img src="layout/images/1.jpg" class="w-11" alt="sứ mệnh" />
        </div>

        <div
          class="
            col-12
            lg:col-6
            my-auto
            flex flex-column
            lg:align-items-end lg:text-right
            align-items-center
            text-center
          "
        >
          <!-- <div class="flex align-items-center justify-content-center bg-purple-200" style="width:4.2rem; height:4.2rem; border-radius: 10px;">
                        <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                    </div> -->
          <h2 class="line-height-1 text-900 text-4xl font-normal">
            Tokyo Technology Solutions
          </h2>
          <span
            class="text-700 text-2xl line-height-3 ml-0 md:ml-2"
            style="max-width: 650px"
            >Sứ mệnh của Tokyo Technology Solutions Việt Nam là biến tài năng và
            nhiệt huyết của người Việt nam cùng kinh nghiệm và công nghệ của các
            kỹ sư Nhật Bản thành những dịch vụ công nghệ thông tin chất lượng
            cao, giá thành hợp lý. Tokyo Technology Solution không chỉ gia công
            các giải pháp phần mềm cho thị trường Nhật mà còn cung cấp những sản
            phẩm, dịch vụ uy tín cho thị trường Việt nam.</span
          >
        </div>
      </div>

      <div class="grid my-8 pt-2 md:pt-8">
        <div
          class="
            col-12
            lg:col-6
            my-auto
            flex flex-column
            lg:align-items-start
            align-items-center
          "
        >
          <div
            class="flex align-items-center justify-content-center bg-yellow-200"
            style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
          >
            <i class="pi pi-fw pi-car text-5xl text-yellow-700"></i>
          </div>
          <h2 class="line-height-1 text-900 text-4xl font-normal">
            Logistics TTS_SOFT
          </h2>
          <span
            class="text-700 text-2xl line-height-3 mr-0 md:mr-2"
            style="max-width: 650px"
            >TTS-SOFT phát triển mảng Logistics từ năm 2019, tới nay với số vốn
            hàng chục tỷ đồng cung cấp các giải pháp cho nhiều loại hình khách
            hàng. Trước mắt mục tiêu công ty hướng tới thị trường ngách với các
            doanh nghiệp vận tải.</span
          >
        </div>

        <div
          class="
            flex
            justify-content-end
            flex-order-1
            sm:flex-order-2
            col-12
            lg:col-6
            bg-yellow-100
            p-0
          "
          style="border-radius: 8px"
        >
          <img src="layout/images/2.jpg" class="w-11 pt-4" alt="Logistics" />
        </div>
      </div>
    </div>

    <div class="py-4 px-4 lg:px-8 my-2 md:my-4" id="pricing">
      <div class="text-center">
        <h2 class="text-900 font-normal mb-2">Bảng giá</h2>
        <span class="text-600 text-2xl"
          >Chúng tôi có các gói phần mềm tương ứng với nhu cầu của từng doanh
          nghiệp...</span
        >
      </div>

      <div class="grid justify-content-between mt-8 md:mt-0">
        <div class="col-12 lg:col-4 p-0 md:p-3">
          <div
            class="p-3 flex flex-column border-200 hover:border-cyan-200"
            style="border: 2px solid; border-radius: 10px"
          >
            <h3 class="text-900 text-center">Miễn phí</h3>
            <img
              src="layout/images/asset-tier-1.svg"
              class="w-10 h-10 mx-auto"
              alt=""
            />
            <div class="my-5 text-center">
              <span class="text-5xl font-bold mr-2 text-900">0 Đồng</span>
              <span class="text-600">/ tháng</span>
              <Button
                label="Đăng ký"
                class="
                  block
                  mx-auto
                  mt-4
                  p-button-rounded
                  border-none
                  ml-3
                  font-light
                  text-white
                  line-height-2
                  bg-blue-500
                "
              ></Button>
            </div>
            <Divider class="w-full bg-surface-200"></Divider>
            <ul class="my-5 list-none p-0 flex text-900 flex-column">
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Chức năng quản lý vận tải</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Hỗ trợ tới 50 tài khoản nhân viên</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Sẵn sàng nâng cấp lên gói cao hơn</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
          <div
            class="p-3 flex flex-column border-200 hover:border-cyan-200"
            style="border: 2px solid; border-radius: 10px"
          >
            <h3 class="text-900 text-center">Cơ bản</h3>
            <img
              src="layout/images/asset-tier-2.svg"
              class="w-10 h-10 mx-auto"
              alt=""
            />
            <div class="my-5 text-center">
              <span class="text-5xl font-bold mr-2 text-900">10.000.000 đ</span>
              <span class="text-600">/ tháng</span>
              <Button
                label="Đăng ký"
                class="
                  block
                  mx-auto
                  mt-4
                  p-button-rounded
                  border-none
                  ml-3
                  font-light
                  text-white
                  line-height-2
                  bg-blue-500
                "
              ></Button>
            </div>
            <Divider class="w-full bg-surface-200"></Divider>
            <ul class="my-5 list-none p-0 flex text-900 flex-column">
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Chức năng quản lý vận tải</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Chức năng nâng cao đặc thù cho doanh nghiệp</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Tài khoản nhân viên không giới hạn</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Cơ sở dữ liệu riêng biệt</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Bảo mật cao cấp</span>
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Không quảng cáo</span>
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Sẵn sàng nâng cấp tính năng</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Hỗ trợ 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
          <div
            class="p-3 flex flex-column border-200 hover:border-cyan-200"
            style="border: 2px solid; border-radius: 10px"
          >
            <h3 class="text-900 text-center">Nâng cao</h3>
            <img
              src="layout/images/asset-tier-3.svg"
              class="w-10 h-10 mx-auto"
              alt=""
            />
            <div class="my-5 text-center">
              <span class="text-5xl font-bold mr-2 text-900">50.000.000 đ</span>
              <span class="text-600">/ tháng</span>
              <Button
                label="Liên hệ"
                class="
                  block
                  mx-auto
                  mt-4
                  p-button-rounded
                  border-none
                  ml-3
                  font-light
                  text-white
                  line-height-2
                  bg-blue-500
                "
              ></Button>
            </div>
            <Divider class="w-full bg-surface-200"></Divider>
            <ul class="my-5 list-none p-0 flex text-900 flex-column">
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Chức năng quản lý vận tải</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Chức năng nâng cao đặc thù cho doanh nghiệp</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Các tính năng cao cấp</span>
              </li>

              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Tài khoản nhân viên không giới hạn</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Cơ sở dữ liệu lớn và riêng biệt</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Bảo mật cao cấp nhiều lớp</span
                >
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Không quảng cáo</span>
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">Băng thông lớn</span>
              </li>
              <li class="py-2">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3"
                  >Nhân viên hỗ trợ đặc biệt</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 px-4 mx-0 mt-8 lg:mx-8" id="contact">
      <div class="grid justify-content-between">
        <div class="col-12 md:col-2" style="margin-top: -1.5rem">
          <div
            class="
              flex flex-wrap
              align-items-center
              justify-content-center
              md:justify-content-start md:mb-0
              mb-3
            "
          >
            <router-link to="/">
              <img
                :src="'layout/images/logo-tts.jpg'"
                alt="footer sections"
                width="100"
                height="100"
                class="mr-2"
                @click="smoothScroll('#hero')"
              />
            </router-link>
            <!-- <h4 class="font-medium text-3xl text-900">TTS SOFT</h4> -->
          </div>
        </div>

        <div class="col-12 md:col-7">
          <div class="grid text-center md:text-left">
            <div class="col-12 md:col-12" style="text-align: right">
              <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                © 2022 - Tokyo Technology Software
              </h4>
              <router-link to="/login">
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  >Chăm sóc khách hàng</a
                >
              </router-link>
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                @click="smoothScroll('#ceo')"
                >Lời nhắn gửi</a
              >
            </div>
            <!--                         
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                            <a class="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                        </div>
        
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Events<img src="layout/images/new-badge.svg" class="ml-2"/></a>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                            <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                        </div>
        
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                            <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                            <a class="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                        </div> -->
          </div>
        </div>
      </div>
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
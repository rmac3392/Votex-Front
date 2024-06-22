<template>
  <div class="h-full px-60 pt-60">
    <div class="h-[10%] text-3xl font-semibold text-primary">
      Identification Card
    </div>
    <div class="flex items-center justify-center h-[90%]">
      <div class="w-1/2 h-full">
        <div class="flex h-[90%] items-center justify-center">
          <div
            class="bg-white z-10 flex items-end rounded-xl h-64 w-[28rem] shadow-[rgba(0,_0,_0,_0.35)_0px_2px_15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="rounded-b-xl"
              viewBox="0 0 1440 320"
            >
              <defs>
                <linearGradient
                  id="customGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="20%" stop-color="rgba(175, 179, 198, 1)" />
                  <stop offset="100%" stop-color="rgba(85, 82, 150, 1)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#customGradient)"
                fill-opacity="1"
                d="M0,0L80,48C160,96,320,192,480,202.7C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div
            class="text-medium text-gray-800 absolute z-20 items-end rounded-xl h-64 w-[28rem] p-3"
          >
            <div class="h-[23%] flex justify-center">
              <div class="flex h-full w-full">
                <div class="flex items-center justify-center w-[20%] h-full">
                  <img class="h-full" src="../assets/CSPS_LOGO.png" alt="" />
                </div>
                <div class="w-[60%] flex flex-col items-center justify-center">
                  <div class="h-full">
                    <div
                      class="flex items-center justify-center h-1/4 text-sm font-semibold"
                    >
                      <div class="">UNIVERSITY OF CEBU</div>
                    </div>
                    <div class="flex items-center justify-center h-1/4 text-xs">
                      <div class="">Sanciangko St. Riverside Cebu City</div>
                    </div>
                    <div
                      class="flex items-center justify-center h-1/4 text-sm font-semibold"
                    >
                      <div class="">COLLEGE OF COMPUTER STUDIES</div>
                    </div>
                    <div class="flex items-center justify-center h-1/4 text-xs">
                      <div class="">
                        Bachelor of Science in Computer Science
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center w-[20%] h-full">
                  <img class="h-full" src="../assets/ccs.png" alt="" />
                </div>
              </div>
            </div>
            <div class="h-[10%] flex">
              <div class="flex items-center justify-center w-1/3">
                <div class="text-sm tracking-[0.3rem] font-semibold">
                  20229464
                </div>
              </div>
              <div class="w-2/3"></div>
            </div>
            <div class="flex h-[55%]">
              <div class="w-1/3 h-full border-black border">
                <img
                  class="h-full w-full"
                  src="../assets/GradPic.jpeg"
                  alt=""
                />
              </div>
              <div class="w-2/3 pl-12">
                <div class="absolute h-[55%] w-[45%] opacity-25 z-10">
                  <img src="../assets/UC.png" class="max-h-full max-w-full" alt="" />
                </div>

                <div class="h-full">
                  <div class="h-[25%] flex">
                    <div class="w-1/2 h-full">
                      <div class=""></div>

                      <div
                        class="text-xs flex items-center justify-start italic"
                      >
                        <div>Last Name</div>
                      </div>
                      <div
                        class="text-sm font-semibold flex items-center justify-start"
                      >
                        <div>MACAWILI</div>
                      </div>
                    </div>
                    <div class="w-1/2 h-full">
                      <div
                        class="text-xs flex items-center justify-start italic"
                      >
                        <div>Suffix</div>
                      </div>
                      <div
                        class="text-sm font-semibold flex items-center justify-start"
                      >
                        <div>Jr.</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="h-[12.5%] text-xs flex items-center justify-start italic"
                  >
                    First Name
                  </div>
                  <div
                    class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                  >
                    <div>RYAN JAMES</div>
                  </div>
                  <div
                    class="h-[12.5%] text-xs flex items-center justify-start italic"
                  >
                    <div>Middle Name</div>
                  </div>
                  <div
                    class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                  >
                    <div>CASQUEJO</div>
                  </div>
                  <div
                    class="h-[12.5%] text-xs flex items-center justify-start italic"
                  >
                    Date of Birth
                  </div>
                  <div
                    class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                  >
                    DECEMBER 30, 2001
                  </div>
                </div>
              </div>
            </div>
            <div class="h-[12%] mt-1">
              <div class="flex flex-col items-start justify-center">
                <div
                  class="leading-3 h-1/2 text-xs flex items-center justify-start italic"
                >
                  Address
                </div>
                <div
                  class="leading-3 h-1/2 text-sm font-semibold lex items-center justify-start"
                >
                  409-N SANCIANGKO ST. RIVERSIDE CEBU CITY, CEBU
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-start justify-center font-medium text-2xl h-[10%]"
        >
          Front
        </div>
      </div>
      <div class="w-1/2 h-full">
        <div class="flex h-[90%] items-center justify-center">
          <div
            class="bg-white z-10 flex items-end rounded-xl h-64 w-[28rem] shadow-[rgba(0,_0,_0,_0.35)_0px_2px_15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="rounded-b-xl"
              viewBox="0 0 1440 320"
            >
              <defs>
                <linearGradient
                  id="customGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop offset="20%" stop-color="rgba(175, 179, 198, 1)" />
                  <stop offset="100%" stop-color="rgba(85, 82, 150, 1)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#customGradient)"
                fill-opacity="1"
                d="M0,0L80,48C160,96,320,192,480,202.7C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="absolute z-10 items-end rounded-xl h-64 w-[28rem] p-3">
            <div class="h-full">
              <div class="flex h-[85%]">
                <div
                  class="flex items-center justify-start w-1/2  h-full"
                >
                  <div
                    class="absolute flex justify-center items-center h-[100%] w-[47%] opacity-25 z-10"
                  >
                    <img
                      src="../assets/UC.png"
                      class="max-h-full max-w-full "
                      alt=""
                    />
                  </div>

                  <div class="h-[65%] w-[85%]">
                    <div class="h-full">
                      <div
                        class="h-[12.5%] text-xs flex items-center justify-start italic"
                      >
                        Gender
                      </div>
                      <div
                        class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                      >
                        <div>MALE</div>
                      </div>

                      <div
                        class="h-[12.5%] text-xs flex items-center justify-start italic"
                      >
                        Mobile no.
                      </div>
                      <div
                        class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                      >
                        <div>09914417687</div>
                      </div>

                      <div
                        class="h-[12.5%] text-xs flex items-center justify-start italic"
                      >
                        Email
                      </div>
                      <div
                        class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                      >
                        <div>ryanjamesmacawili@gmail.com</div>
                      </div>

                      <div
                        class="h-[12.5%] text-xs flex items-center justify-start italic"
                      >
                        Status
                      </div>
                      <div
                        class="h-[12.5%] text-sm font-semibold flex items-center justify-start"
                      >
                        <div>SINGLE</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 h-full border border-black">
                  <img
                    class="h-full w-full"
                    src="../assets/qrcode_localhost.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="flex items-center justify-center pt-5 h-[15%]">
                <div
                  class="h-[12.5%] text-sm font-medium flex items-center justify-start italic"
                >
                  If found, please return to the department office
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-start justify-center font-medium text-2xl h-[10%]"
        >
          Back
        </div>
        <!-- <div class="bg-red-400 absolute z-10 items-end rounded-xl h-64 w-[28rem]"></div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// const formData = ref({
//   first_name : '',
//   middle_name : '',
//   last_name : '',
//   suffix: '',
//   birthdate: '',
//   gender: '',
//   status: '',
//   religion: '',

//   city_address: '',
//   provincial_address: '',
//   email: '',
//   birthplace: '',
//   mobile_no: '',
//   student_id: 0,
//   year: 1,
//   department: '',
//   course: '',
//   student_id_img: '',
//   study_load: '',

//   password: '',
//   sq1: '',
//   ans1: '',
//   sq2: '',
//   ans2: '',
//   sq3: '',
//   ans3: '',
// });


</script>
<!-- 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 -->

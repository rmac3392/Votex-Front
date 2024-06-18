<template>
  <div class="flex bg-white h-screen">
    <div class="bg-primary w-1/4 h-full">
      <div class="text-secondary text-semibold text-2xl h-full">
        <div class="h-1/5 flex justify-center items-end">
          <div><img src="../assets/logo.png" alt="" /></div>
        </div>
        <div class="h-4/5 text-2xl flex justify-center py-16">
          <ol
            class="relative text-gray-500 border-s border-white dark:text-gray-400"
          >
            <li :class="currentView === 0 ? 'active-li' : 'general-li'">
              <span
                :class="
                  currentView === 0
                    ? 'active-span'
                    : isVisited[0] == true
                    ? 'visited-span'
                    : 'general-span'
                "
              >
                <CheckIcon v-if="isVisited[0] === true" class="h-12" />
                <div v-else>1</div>
              </span>
              <h3 :class="currentView === 0 ? 'active-h3' : 'general-h3'">
                Personal Information
              </h3>
              <p class="text-sm">Step 1</p>
            </li>
            <li :class="currentView === 1 ? 'active-li' : 'general-li'">
              <span
                :class="
                  currentView === 1
                    ? 'active-span'
                    : isVisited[1] == true
                    ? 'visited-span'
                    : 'general-span'
                "
              >
                <CheckIcon v-if="isVisited[1] === true" />
                <div v-else>2</div>
              </span>
              <h3 :class="currentView === 1 ? 'active-h3' : 'general-h3'">
                Contact Details
              </h3>
              <p class="text-sm">Step 2</p>
            </li>
            <li :class="currentView === 2 ? 'active-li' : 'general-li'">
              <span
                :class="
                  currentView === 2
                    ? 'active-span'
                    : isVisited[2] == true
                    ? 'visited-span'
                    : 'general-span'
                "
              >
                <CheckIcon v-if="isVisited[2] === true" />
                <div v-else>3</div>
              </span>
              <h3 :class="currentView === 2 ? 'active-h3' : 'general-h3'">
                School Documents
              </h3>
              <p class="text-sm">Step 3</p>
            </li>
            <li :class="currentView === 3 ? 'active-li' : 'general-li'">
              <span
                :class="
                  currentView === 3
                    ? 'active-span'
                    : isVisited[3] == true
                    ? 'visited-span'
                    : 'general-span'
                "
              >
                <CheckIcon v-if="isVisited[3] === true" />
                <div v-else>4</div>
              </span>
              <h3 :class="currentView === 3 ? 'active-h3' : 'general-h3'">
                Security Login
              </h3>
              <p class="text-sm">Step 4</p>
            </li>
            <li :class="currentView === 4 ? 'active-li' : 'general-li'">
              <span :class="currentView === 4 ? 'active-span' : 'general-span'">
                <div>5</div>
              </span>
              <h3 :class="currentView === 4 ? 'active-h3' : 'general-h3'">
                Confirm
              </h3>
              <p class="text-sm">Step 5</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="w-3/4 h-full">
      <div class="h-[65%] ">
        <Step1View v-if="currentView === 0" class="" />
        <Step2View v-if="currentView === 1" class="" />
        <Step3View v-if="currentView === 2" class="" />
        <Step4View v-if="currentView === 3" class="" />
        <Step5View v-if="currentView === 4" class="" />
      </div>
      <div class="flex h-[35%] px-60 pb-60">
        <div class="w-1/2 flex justify-start">
          <button
            v-if="currentView !== 0"
            class="w-1/4 h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
            type="submit"
            @click="prev"
          >
            <div class="flex items-center justify-start p-1">
              <div class="">
                <mdicon class="" name="chevron-left" :width="35" :height="35" />
              </div>
              <div class="">Prev</div>
            </div>
          </button>
        </div>

        <div class="w-1/2 flex justify-end">
          <button
            class="w-1/4 h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
            type="submit"
            @click="next"
          >
            <div
              v-if="currentView !== 4"
              class="flex items-center justify-end p-1"
            >
              <div class="">Next</div>
              <div class="">
                <mdicon
                  class=""
                  name="chevron-right"
                  :width="35"
                  :height="35"
                />
              </div>
            </div>
            <div v-else>Register</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { CheckIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import router from "../route.js";

import Step1View from "../registerView/Step1View.vue";
import Step2View from "../registerView/Step2View.vue";
import Step3View from "../registerView/Step3View.vue";
import Step4View from "../registerView/Step4View.vue";
import Step5View from "../registerView/Step5View.vue";

let currentView = ref(0);
let isVisited = [false, false, false, false, false];

const prev = () => {
  if (currentView.value !== 0) {
    isVisited[currentView.value - 1] = false;
    currentView.value--;
    console.log(currentView.value);
  }
};

const next = () => {
  if (currentView.value !== 4) {
    isVisited[currentView.value] = true;
    currentView.value++;
    console.log(currentView.value);
  } else {
    router.push("/");
  }
};
</script>

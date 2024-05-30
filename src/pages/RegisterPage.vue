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
            <li :class="currentView === 0 ? 'active-li' :'general-li'">
              <span :class="currentView === 0 ? 'active-span' : isVisited[0]==true?  'visited-span': 'general-span'">
                <CheckIcon v-if="isVisited[0]===true " class="h-12"/>
                <div v-else>1</div>
              </span>
              <h3 :class="currentView === 0 ? 'active-h3' : 'general-h3'">
                Personal Information
              </h3>
              <p class="text-sm">Step 1</p>
            </li>
            <li :class="currentView === 1 ? 'active-li' : 'general-li'">
              <span :class="currentView === 1 ? 'active-span' : isVisited[1]==true?  'visited-span': 'general-span'">
                <CheckIcon v-if="isVisited[1]===true "/>
                <div v-else>2</div>
              </span>
              <h3 :class="currentView === 1 ? 'active-h3' : 'general-h3'">
                Contact Details
              </h3>
              <p class="text-sm">Step 2</p>
            </li>
            <li :class="currentView === 2 ? 'active-li' : 'general-li'">
              <span :class="currentView === 2 ? 'active-span' : isVisited[2]==true?  'visited-span': 'general-span'">
                <CheckIcon v-if="isVisited[2]===true "/>
                <div v-else>3</div>
              </span>
              <h3 :class="currentView === 2 ? 'active-h3' : 'general-h3'">
                School Documents
              </h3>
              <p class="text-sm">Step 3</p>
            </li>
            <li :class="currentView === 3 ? 'active-li' : 'general-li'">
              <span :class="currentView === 3 ? 'active-span' : isVisited[3]==true?  'visited-span': 'general-span'">
                <CheckIcon v-if="isVisited[3]===true "/>
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

            <!-- <li class="ms-6">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Confirmation</h3>
              <p class="text-sm">Step details here</p>
            </li> -->
          </ol>
        </div>
      </div>
    </div>
    <div class="w-3/4 h-full">
      <div class="h-[80%] bg-red-400 px-40 pt-32">
        <Step1View v-if="currentView === 0" class="" />
        <Step2View v-if="currentView === 1" class="" />
        <Step3View v-if="currentView === 2" class="" />
        <Step4View v-if="currentView === 3" class="" />
        <Step5View v-if="currentView === 4" class="" />
      </div>
      <div class="h-[20%] bg-blue-400 px-40 pb-32">
        <button
          class="dc-btn dc-btn-primary"
          @click="
            if (currentView != 0) {
              isVisited[currentView-1] = false;
              currentView--;
              console.log(isVisited[currentView+1]);
            }
          "
        >
          Prev
        </button>
        
        <button
          class="dc-btn dc-btn-primary"
          @click="
            if (currentView != 4) {
              isVisited[currentView] = true;
              currentView++;
              console.log(isVisited[currentView-1]);
            }
            else{
              $router.push('/')
            }
          "
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Step1View from "../registerView/Step1View.vue";
import Step2View from "../registerView/Step2View.vue";
import Step3View from "../registerView/Step3View.vue";
import Step4View from "../registerView/Step4View.vue";
import Step5View from "../registerView/Step5View.vue";
import { CheckIcon } from "@heroicons/vue/24/solid";

let currentView = ref(0);
let isVisited = [false,false,false,false,false];




</script>

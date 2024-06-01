<template>
  <div class="h-full bg-white">
    <div class="h-[10%] text-3xl font-semibold text-primary">
      Personal Information
    </div>
    <div class="flex flex-col justify-center h-[90%] space-y-4">
      <div class="">
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="First Name"
          required
        />
      </div>
      <div class="flex gap-3">
        <input
          type="text"
          id="middle_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
          placeholder="Middle Name"
          required
        />
        <input
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          id="suffix"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
          placeholder="Suffix"
        />
      </div>
      <div class="flex gap-3 w-full">
        <input
          type="date"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary w-full block p-2.5"
          placeholder="Birthdate (mm-dd-yyyy)"
          required
        />
      </div>
      <div class="flex gap-3">
        <div
          class="bg-gray-50 border flex border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary gap-2 p-2.5"
        >
          <div class="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Male</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Female</label
            >
          </div>
        </div>
        <div class="flex gap-3 w-full">
          <select
            name=""
            id=""
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
            placeholder="Civil Status"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widow">Widow</option>
          </select>
        </div>
      </div>
      <div class="flex">
        <select
            name=""
            id=""
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
            placeholder="Civil Status"
          >
            <option value="">Roman Catholic</option>
            <option value="">Islam</option>
            <option value="">Seventh Day Adventist</option>
            <option value="">Bible Baptist</option>
            <option value="">Others</option>
          </select>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<template>
  <div class="h-full bg-white">
    <div class="h-[10%] text-3xl font-semibold text-primary">
      Contact Details
    </div>
    <div class="flex flex-col justify-center h-[90%] space-y-3">
      <div class="gap-3">
        <input
          type="text"
          id="city_address"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="City Address"
          required
        />
      </div>
      <div class="flex gap 3">
        <input
          type="text"
          id="provincial_address"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Provincial Address"
          required
        />
      </div>
      <div class="flex gap 3">
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Email"
          required
        />
      </div>
      <div class="flex gap 3">
          <input
            type="text"
            id="birthplace"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
            placeholder="Birthplace"
            required
          />
        </div>
        <div class="flex gap-3">
          <input
              type="number"
              id="mobile_number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary w-full block p-2.5"
              placeholder="Mobile No."
              required
            />
        </div>
    </div>
  </div>
</template>
<script setup></script>

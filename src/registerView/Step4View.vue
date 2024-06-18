<template>
  <div class="h-full bg-white px-60 pt-60">
    <div class="h-[10%] text-3xl font-semibold text-primary">
      Security Login
    </div>
    <div class="flex flex-col justify-center h-[90%] space-y-3">
      <div class="gap-3">
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Password"
          required
        />
      </div>
      <div class="gap-3">
        <input
          type="password"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Verify Password"
          required
        />
      </div>

      <div class="flex gap-3">
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Security Question #1"
          required
        />
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
          placeholder="Answer"
          required
        />
      </div>

      <div class="flex gap-3">
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Security Question #2"
          required
        />
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
          placeholder="Answer"
          required
        />
      </div>

      <div class="flex gap-3">
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block w-full p-2.5"
          placeholder="Security Question #3"
          required
        />
        <input
          type="text"
          id="verify_password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:primary block p-2.5"
          placeholder="Answer"
          required
        />
      </div>

    </div>
  </div>
</template>
<script setup></script>

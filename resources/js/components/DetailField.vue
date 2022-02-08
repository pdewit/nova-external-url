<template>
  <panel-item :field="field">
    <template slot="value">
      <div v-if="field.value">
        <a
          class="no-underline dim text-primary font-bold"
          :href="field.value"
          target="_blank"
          v-if="linkText.slice(-3) === 'pdf'"
        >
          <div class="flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2 text-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"
              ></path>
            </svg>
            <span>{{ linkText }}</span>
          </div>
          <span class="text-sm no-underline text-60">{{ field.value }}</span>
        </a>
        <a
          class="no-underline dim text-primary font-bold"
          :href="field.value"
          :download="linkText"
          v-else
        >
          <div class="flex items-center">
            <span>{{ linkText }}</span>
          </div>
          <span class="text-sm no-underline text-60">{{ field.value }}</span>
        </a>
      </div>
      <p v-else>&mdash;</p>
    </template>
  </panel-item>
</template>

<script>
export default {
  props: ["resource", "resourceName", "resourceId", "field"],

  computed: {
    linkText() {
      return this.field.linkText ? this.field.linkText : "External Link";
    },
  },
};
</script>

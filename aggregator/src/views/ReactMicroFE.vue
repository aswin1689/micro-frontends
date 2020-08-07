<template>
  <div>
    <MicroFrontEnd history="{}" :host="url" name="ReactApp" />
  </div>
</template>
<script>
import MicroFrontEnd from "../components/MicroFrontEnd";

export default {
  name: "ReactMicroFE",
  components: {
    MicroFrontEnd,
  },
  data() {
    return {
      url: process.env.VUE_APP_REACT_CHILD_HOST,
    };
  },
};
</script>

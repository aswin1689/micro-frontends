<template>
  <div>
    <MicroFrontEnd history="{}" :host="url" name="VueApp" />
  </div>
</template>
<script>
import MicroFrontEnd from "../components/MicroFrontEnd";

export default {
  name: "VueMicroFE",
  components: {
    MicroFrontEnd,
  },
  data() { 
    return { 
        url: process.env.VUE_APP_VUE_CHILD_HOST, 
    }
}
};
</script>

<script>
import feather from "feather-icons";
import ContactDetails from "@/components/contact/ContactDetails.vue";

export default {
  components: {
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "dylan.loya@proton.me",
          icon: "mail",
        },
        {
          id: 2,
          name: "06 42 34 78 55",
          icon: "phone",
        },
        {
          id: 3,
          name: "https://github.com/Didiloy",
          icon: "github",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

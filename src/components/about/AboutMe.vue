<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I am a student at the University of Poitiers in L3 Computer Science. Passionate about the world of information technology, I am a motivated and dedicated person in everything I do. I like to deepen the knowledge acquired in class by personal projects and discover new things in the same way.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left flex items-center">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>

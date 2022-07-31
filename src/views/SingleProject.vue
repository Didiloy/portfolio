<script>
import feather from "feather-icons";
import projects from "../data/projects";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

export default {
  name: "Projects",
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },
  data: () => {
    return {
      selectedProject: {},
    };
  },
  created() {
    this.selectedProject = projects.filter((p) => p.title === this.name)[0];
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
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="selectedProject.singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="selectedProject.projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="selectedProject.projectInfo" />
  </div>
</template>

<style scoped></style>

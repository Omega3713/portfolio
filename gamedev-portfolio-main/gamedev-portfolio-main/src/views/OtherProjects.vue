<template>
  <div>
    <h1>Other Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are some other projects I've worked on, either solo or with others. They showcase my skills in software development, web applications, and more.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>

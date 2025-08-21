<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      I'm <strong>An Aspiring Game Developer</strong>, and a recent graduate of Queen Mary University of London with a first class degree in Computer Science.
      <br />I have a passion for creating, whether it's through programming, game design, or other creative outlets, and I love learning new skills and technologies.
      <br />As I find my place in the industry, I am continuously honing my skills through personal projects and collaborations, many of which are showcased in my portfolio.
      <br />I am currently seeking opportunities in game development or software engineering, where I can contribute my skills and passion for creating engaging experiences.
      <br />
      <br />Feel free to <router-link to="/contact">contact me</router-link> if you have any questions or if you'd like to discuss potential opportunities. 
      <br />
      <br />My other interests include playing and writing music and martial arts.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Laurence-Dunbar-CV-(2025).pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Laurence Dunbar" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Experience</h2>

      <h3>President - Queen Mary Video and Card Gaming Society</h3>
      <h4>Jun 2023 - Jun 2025</h4>

      <ul>
        <li>Organised events for 50+ attendees, including large tournaments and inter university competitions</li>
        <li>Managed sponsorship communications, representing the society with professionalism</li>
        <li>Led committee meetings, developed term strategies, and ensured team cohesion</li>
      </ul>


      <h3>President - Queen Mary Kendo Club</h3>
      <h4>Jun 2024 - Jun 2025</h4>

      <ul>
        <li>Coordinated weekly training and national tournament participation</li>
        <li>Managed a society budget of over £1,000, delegating responsibilities effectively</li>
        <li>Represented the society at university fairs and networking events</li>
      </ul>

      <h3>Welfare Representative - Queen Mary Game Development Society</h3>
      <h4>Jun 2024 - Jun 2025</h4>

      <ul>
        <li>Ensured a safe, inclusive atmosphere during events for 30+ members</li>
        <li>Liaised with other societies and organisations to foster collaboration</li>
        <li>Point of contact for welfare related issues and concerns</li>
      </ul>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="Python" :rate="5" />
        <SkillRate name="Java" :rate="5" />
        <SkillRate name="JavaScript" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Leadership" :rate="5" />
        <SkillRate name="Teamwork" :rate="5" />
        <SkillRate name="Communication" :rate="5" />
        <SkillRate name="Problem-solving" :rate="5" />
        <SkillRate name="Adaptability" :rate="5" />
        <SkillRate name="Creativity" :rate="5" />
        
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Queen Mary University of London (Sep 2022 - Jul 2025)</h3>
      <h4>BSc Computer Science (First Class)</h4>
      <div>Tackled various topics including Machine Learning, Software Development and Game Development</div>

      <h3>Greenford High School (Sep 2015 - Jun 2022)</h3>
      <h4>GCSE and A Level</h4>
      <div>10x GCSEs, achieving grades of 7-9 including Computer Science(9), Maths (8), Physics (8), English Literature and English Language(9)</div>
      <div>A Level Maths (A) A Level Computer Science (A) A Level Further Maths (B)</div>


    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
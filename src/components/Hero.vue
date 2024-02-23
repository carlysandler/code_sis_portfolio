<template>
  <div v-fade-slide class="hero">
    <div class="hero__wrapper">
      <div class="hero-header__wrapper">
        <div class="hero-header-me__wrapper">
          <h1>Carly Sandler.</h1>
          <h2>Full Stack Software Engineer</h2>
          <h2 style="margin-top: 4px">Technical Product Manager</h2>
        </div>
        <div class="hero-header-info-outer__wrapper">
          <div class="hero-header-info-inner__wrapper">
            <h6>
            I create art that is both aesthetically pleasing and
              emotionally resonant. I also design user interfaces that
              are intuitive and user-friendly.
            </h6>
          </div>
          <div class="hero-header-links__wrapper">
            <div v-for="item in socialLinks" class="hero-header-link">
              <a :href="item.link" target="_blank">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-content__wrapper">
        <div class="hero-content">
          <div class="background-img__wrapper">
            <v-img
              sizes="calc(100vw - 32px)"
              aspect-ratio="64/7"
              :src="contentImage1"
              cover
              :style="{ borderRadius: imageContentBorderRadius }"
            >
            </v-img>
          </div>
        </div>
        <div class="hero-content-two">
          <div class="background-video__wrapper">
            <video
              :src="contentVideo1"
              :style="{ borderRadius: imageContentBorderRadius }"
              loop
              muted
              playsinline
              autoplay
            ></video>
          </div>
          <div class="hero-content-three">
            <div class="background-img__wrapper-2">
              <v-img
                sizes="max(100vw - 264px, 0px)"
                aspect-ratio="64/7"
                :src="contentImage2"
                cover
                :style="{ borderRadius: imageContentBorderRadius }"
              >
              </v-img>
            </div>
          </div>
        </div>
        <div class="hero-content" style="order: 2">
          <div class="background-img__wrapper">
            <v-img
              sizes="calc(100vw - 32px)"
              aspect-ratio="64/7"
              :src="contentImage3"
              cover
              :style="{ borderRadius: imageContentBorderRadius }"
            >
            </v-img>
          </div>
        </div>
        <div class="hero-content-two" style="order: 3">
          <div class="hero-content-three">
            <div class="background-img__wrapper-2">
              <v-img
                sizes="max(100vw - 572px, 0px)"
                aspect-ratio="64/7"
                :src="contentImage4"
                cover
                :style="{ borderRadius: imageContentBorderRadius }"
              >
              </v-img>
            </div>
          </div>
					<div class="background-video__wrapper-2">
	            <video
	              :src="contentVideo2"
	              :style="{ borderRadius: imageContentBorderRadius }"
	              loop
	              muted
	              playsinline
	              autoplay
	            ></video>
	          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import contentImage1 from '@/assets/contentImage1.png'
import contentVideo1 from '@/assets/contentVideo1.mp4'
import contentImage2 from '@/assets/contentImage2.webp'
import contentImage3 from '@/assets/contentImage3.webp'
import contentImage4 from '@/assets/contentImage4.webp'
import contentVideo2 from '@/assets/contentVideo2.mp4'
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'Hero',
  setup() {
    const socialLinks = [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/carlysandler/'
      },
      {
        name: 'Github',
        link: 'https://github.com/carlysandler'
      },
      {
        name: 'Medium',
        link: ''
      }
    ]
    const { smAndDown, md, lg } = useDisplay()

    const imageContentBorderRadius = computed(() => {
      if (smAndDown.value) return '24px'
      else if (md) return '32px'
      else return '40px'
    })

    return {
      socialLinks,
      contentImage1,
      imageContentBorderRadius,
      contentVideo1,
      contentImage2,
      contentImage3,
      contentImage4,
      contentVideo2
    }
  }
})
</script>

<style scoped lang="scss">
.hero {
  gap: 0px;
  padding: $padding-hero-xs;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    padding: $padding-hero-sm-md;
    gap: 64px;
  }

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    padding: $padding-hero-lg;
  }

  @media (min-width: map-get($grid-breakpoints, 'xl')) {
    padding: $padding-hero-xl-and-up;
  }
}

.hero__wrapper {
  gap: 40px;
  padding: 0;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    gap: 56px;
  }

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    width: 1280px;
  }
}

.hero-header__wrapper {
  opacity: 1;
  transform: perspective(1200px);
  align-items: start;
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 24px;
  height: min-content;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  position: relative;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    flex-direction: row;
    gap: 32px;
    padding: 0 0 8px;
  }
}

.hero-header-me__wrapper {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  transform: none;
  flex-shrink: 0;
  flex: none;
  height: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;

  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    width: 70%;
  }

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    width: 50%;
  }

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    width: 55%;
  }

  > h1 {
    font-weight: 700;
    text-align: start;
    line-height: 1.2em;
    letter-spacing: 0.0em;
    font-size: 4em;
    margin: 0;
    padding: 0;

    @media (min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 4.5em;
    }
  }


  > h2 {
    font-weight: 300;
    text-align: start;
    line-height: 1.2em;
    letter-spacing: -0.0em;
    font-size: 1.6em;
    margin: 0;
    padding: 0;


    @media (min-width: map-get($grid-breakpoints, 'md')) {
      font-size: 2em;
    }
  }
}

.hero-header-info-outer__wrapper {
  align-self: unset;
  display: flex;
  flex: none;
  gap: 24px;
  height: auto;
  width: 100%;
  align-items: start;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 0;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    align-self: stretch;
    gap: 30px;
    width: 1px;
    flex: 1 0 0px;
  }
}

.hero-header-info-inner__wrapper {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: none;
  width: 100%;
  flex: none;
  height: auto;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;

  > h6 {
    padding: 6px 0 0 0;
    margin: 0;
    font-size: 1.4em;
    text-align: start;
    letter-spacing: -0.03em;
    line-height: 1.2em;
    font-weight: 500;
    @media (min-width: map-get($grid-breakpoints, 'md'))  {
      font-size: 1.5em;
      
    }
  }
}
.hero-header-links__wrapper {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  height: min-content;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 100%;
}
.hero-header-link {
  flex: none;
  height: auto;
  position: relative;
  width: auto;
  overflow: hidden;
  > a {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    height: auto;
    justify-content: center;
    overflow: hidden;
    padding: 2px 10px;
    position: relative;
    text-decoration: none;
    width: auto;
    border-width: 1px;
    border-style: solid;
    color: var(--v-theme-text-disabled);
    border-radius: 100px;
    opacity: 1;
    &:hover {
      background-color: #FFCAFF;
    }
  }
}
.hero-content__wrapper {
  gap: 8px;
  align-items: start;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    gap: 16px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    gap: 24px;
  }
}
.hero-content {
  height: 80px;
  order: 0;
  opacity: 1;
  transform: perspective(1200px);
  flex: none;
  position: relative;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 120px;
    order: initial;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 140px;
  }
}

.hero-content-two {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 80px;
  order: 1;
  flex: none;
  position: relative;
  width: 100%;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  position: relative;
  gap: 8px;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 120px;
    order: initial;
    gap: 16px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 140px;
    gap: 24px;
  }
}
.background-img__wrapper {
  position: absolute;
  border-radius: inherit;
  inset: 0px;
}
.v-img {
  display: block;
  width: 100%;
  height: 100%;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
}
.background-video__wrapper {
  opacity: 1;
  transform: perspective(1200px);
  height: 80px;
  width: 80px;
  flex: none;
  position: relative;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 100%;
    width: 134px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    width: 160px;
  }

  > video {
    cursor: auto;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0);
    object-position: 50% 50%;
  }
}
.hero-content-three {
  opacity: 1;
  transform: perspective(1200px);
  flex: 1 0 0px;
  position: relative;
  height: 80px;
  border-radius: 24px;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 120px;
    border-radius: 32px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 140px;
    border-radius: 40px;
  }
}
.background-img__wrapper-2 {
  position: absolute;
  border-radius: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.background-video__wrapper-2 {
  opacity: 1;
  transform: perspective(1200px);
  height: 80px;
  flex: 1 0 50%;
  position: relative;
  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 100%;
    width: 468px;
    flex: 0 0 auto;
  }
   @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 140px;
  }
  > video {
    cursor: auto;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0);
    object-position: 50% 50%;
  }
}




</style>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

defineProps<{ msg: string }>()
let coverIndex = ref<number>(0)

onMounted(() => {
  setInterval(() => {
    let index = coverIndex.value
    index++
    if (index > 2) coverIndex.value = 0
    else coverIndex.value = index
  }, 3000)

  setInterval(() => {
    let index = carouselIndex.value
    index++
    if (index > 4) carouselIndex.value = 0
    else carouselIndex.value = index
  }, 5000)
})
let carouselIndex = ref<number>(0)

const open = (url: string) => {
  window.open(url, '_blank')
}

let divElement = document.createElement('div')
divElement.className = 'mouse'
divElement.style.height = '60px'
divElement.style.width = '60px'
divElement.style.transform = 'translateX(-50%) translateY(-50%)'
divElement.style.borderRadius = '100%'
divElement.style.backgroundColor = 'rgba(255,243,181,.7)'
divElement.style.position = 'fixed'
divElement.style.pointerEvents = 'none'

const newsAni2 = async (e: any) => {
  await sleep(120)
  let mouse = document.querySelector('.mouse')
  if (mouse) mouse.remove()
  divElement.style.top = e.pageY + 'px'
  divElement.style.left = e.pageX + 'px'
  divElement.style.opacity = dotOpacity.value + ''
  let news = document.querySelector('#news-container')
  if (news) news.prepend(divElement)
}

let dotOpacity = ref<number>(1)

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
</script>

<template>
  <div class="index">
    <div class="main">
      <div class="container">
        <div class="left">
          <div class="cover-list">
            <div :class="[coverIndex===2?'select':'']" @click="coverIndex = 2">
              <img src="../assets/image/tab-02_on.jpg" alt=""/>
              <img src="../assets/image/tab-02_off.jpg" alt=""/>
            </div>
            <div :class="[coverIndex===1?'select':'']" @click="coverIndex = 1">
              <img src="../assets/image/tab-01_on.jpg" alt=""/>
              <img src="../assets/image/tab-01_off.jpg" alt=""/>
            </div>
            <div :class="[coverIndex===0?'select':'']" @click="coverIndex = 0">
              <img src="../assets/image/tab-00_on.jpg" alt=""/>
              <img src="../assets/image/tab-00_off.jpg" alt=""/>
            </div>
          </div>
          <div class="left-title">
            <img :class="[coverIndex ===2?'show':'hide']" src="../assets/image/catch-02_pc.png" alt="">
            <img :class="[coverIndex ===1?'show':'hide']" src="../assets/image/catch-01_pc.png" alt="">
            <img :class="[coverIndex ===0?'show':'hide']" src="../assets/image/catch-00_pc.png" alt="">
          </div>
        </div>
        <div class="center">
          <div class="images">
            <div :class="[coverIndex===2?'show':'hide']">
              <img src="../assets/image/img_main-02.jpg" alt="">
            </div>
            <div :class="[coverIndex===1?'show':'hide']">
              <img src="../assets/image/img_main-01.jpg" alt="">
            </div>
            <div :class="[coverIndex===0?'show':'hide']">
              <img src="../assets/image/img_main-00.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="billing">
          <div>
            <img src="../assets/image/billing_01.png" alt="">
            <img src="../assets/image/billing_02.png" alt="">
            <img src="../assets/image/billing_03.png" alt="">
            <img src="../assets/image/billing_04.png" alt="">
          </div>
        </div>
        <div class="logo">
          <img src="../assets/image/top_logo.png" alt="">
        </div>
        <div class="time">
          <img src="../assets/image/onair.png" alt="">
        </div>
        <div class="carousel ">
          <div class="images">
            <img :class="carouselIndex === 0?'show':'hide'" src="../assets/image/bnr_himekuri.jpg"
                 @click="open('https://lycoris-recoil.com/special/himekuri/')" alt=""/>
            <img :class="carouselIndex === 1?'show':'hide'" src="../assets/image/bnr_official_tw.jpg"
                 @click="open('https://twitter.com/lycoris_recoil')" alt=""/>
            <img :class="carouselIndex === 2?'show':'hide'" src="../assets/image/bnr_onair.jpg"
                 @click="open('https://lycoris-recoil.com/onair/')" alt=""/>
            <img :class="carouselIndex === 3?'show':'hide'" src="../assets/image/bnr_radio.jpg"
                 @click="open('https://lycoris-recoil.com/radio/')" alt=""/>
            <img :class="carouselIndex === 4?'show':'hide'" src="../assets/image/bnr_cafe.jpg"
                 @click="open('https://lycoris-recoil.com/cafe_lyco_reco/')" alt=""/>
          </div>
          <div class="index">
            <div class="dots">
              <div :style="{'background-color': carouselIndex === 0?'#00b4aa':'white'}"
                   @click="carouselIndex = 0"></div>
              <div :style="{'background-color': carouselIndex === 1?'#00b4aa':'white'}"
                   @click="carouselIndex = 1"></div>
              <div :style="{'background-color': carouselIndex === 2?'#00b4aa':'white'}"
                   @click="carouselIndex = 2"></div>
              <div :style="{'background-color': carouselIndex === 3?'#00b4aa':'white'}"
                   @click="carouselIndex = 3"></div>
              <div :style="{'background-color': carouselIndex === 4?'#00b4aa':'white'}"
                   @click="carouselIndex = 4"></div>
            </div>
          </div>
        </div>
        <div class="another">
          <div class="container">
            <img src="../assets/image/bnr_shiori.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="news">
    <div class="title">
      <img src="../assets/image/ttl_news.png" alt=""/>
    </div>
    <div id="news-container" @mousemove="newsAni2" @mouseleave="dotOpacity = 0" @mouseenter="dotOpacity = 1">
      <div class="news-content">
        <span>2022.08.12</span>
        <span>OnAir</span>
        <span>第7話 放送時間変更（ABCテレビ、メ～テレ）</span>
      </div>
      <div class="news-content">
        <span>2022.08.11</span>
        <span>Info</span>
        <span>#07「Time will tell」予告動画 公開！</span>
      </div>
      <div class="news-content">
        <span>2022.08.11</span>
        <span>Info</span>
        <span>公式Twitterフォロワー200,000人突破記念プレゼント</span>
      </div>
    </div>
  </div>
  <div class="video"></div>
</template>

<style scoped lang="scss">
.index {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;

  .main {
    display: flex;
    margin: 0 auto 80px;

    > .container {
      display: flex;
      margin-right: 0.667%;
      width: 62.083%;

      > .left {
        max-width: 85px;

        > .cover-list {
          width: 100%;
          margin-bottom: 24px;
          position: relative;
          z-index: 10;

          > .select {
            img:nth-child(2) {
              opacity: 0 !important;
              transition: all 1s;
            }
          }

          > div {
            display: flex;
            width: 131.176%;
            position: relative;

            &:hover {
              img:nth-child(2) {
                opacity: .5;
                transition: all 1s;
              }
            }

            > img {
              width: 100%;
              opacity: 1;
              transition: all 1s;

              &:nth-child(2) {
                position: absolute;
              }
            }
          }
        }

        > .left-title {
          position: relative;
          margin: 0 auto;
          width: 70.588%;

          > img {
            position: absolute;
          }

          > .show {
            opacity: 1;
            transition: all .6s;
          }

          > .hide {
            opacity: 0;
            transition: all .4s;
          }
        }
      }

      > .center {
        flex: 1 1 0;

        > .images {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;

          > div {
            width: 100%;
            position: absolute;
            top: 0;

            img {
              width: 100%;
            }
          }

          .show {
            animation: image-show ease 2s forwards;
            position: relative;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
          }

          .hide {
            z-index: 1;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 200% 100%, 0% -100%);
            transition: all 1s;
          }

          @keyframes image-show {
            0% {
              transform: scale(1.1);
            }

            100% {
              transform: scale(1);
            }
          }
        }
      }
    }

    > .content {
      display: flex;
      padding-top: 2.8%;
      flex: 1 1 0;
      flex-direction: column;

      > .billing {
        display: flex;
        justify-content: center;
        //padding-bottom: 62px;
        padding-bottom: 57px;

        > div {
          width: 49%;
          max-width: 334px;
          position: relative;

          img {
            width: 100%;
          }

          > img:not(:first-child) {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            margin: 0 auto;
          }
        }
      }

      > .logo {
        margin: 0 auto;
        width: 92%;
        max-width: 624px;

        img {
          width: 100%;
        }
      }

      > .time {
        //margin: 24px auto 0;
        margin: 19px auto 24px auto;
        width: 92%;
        max-width: 624px;

        img {
          width: 100%;
        }
      }

      > .carousel {
        margin: 21px auto 20px auto;
        width: 92%;
        max-width: 400px;

        > .images {
          display: flex;
          overflow: hidden;
          position: relative;

          img {
            width: 100%;
          }

          img:first-child {
            position: relative;
          }

          img:not(:first-child) {
            position: absolute;
            left: 0;
          }

          > .show {
            transform: translateX(0);
            animation: ani-show 1s;
            transition: all 1s;
          }

          > .hide {
            transform: translateX(-110%);
            transition: all 1s;
          }

          @keyframes ani-show {
            0% {
              transform: translateX(110%);
            }
            100% {
              transform: translateX(0);
            }
          }

        }

        > .index {
          margin-top: 6px;

          > .dots {
            display: flex;
            justify-content: center;

            > div {
              border: 2px solid #00b4aa;
              border-radius: 100%;
              height: 6px;
              width: 6px;

              &:not(:first-child) {
                margin-left: 6px;
              }
            }
          }
        }
      }

      > .another {
        > .container {
          margin: 30px auto 0;
          width: 92%;
          max-width: 400px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}

.news {
  position: relative;
  margin: 0 auto;
  width: 90%;
  max-width: 1500px;
  padding-bottom: 92px;

  > .title {
    padding-bottom: 30px;
  }

  > #news-container {
    position: relative;

    > .news-content {
      padding: 31px 0;
      border-top: 1px solid #ccc;

      &:last-child {
        border-bottom: 1px solid #ccc;
      }

      span {
        cursor: pointer;
        transition: all .3s;
      }

      &:hover {
        span:nth-child(1) {
          color: #f0555a;
          transition: all .3s;
        }

        span:nth-child(2) {
          background-color: #f0555a;
          transition: all .3s;
        }
      }

      span:nth-child(1) {
        color: #00b4aa;
        margin-right: 12px;
      }

      span:nth-child(2) {
        padding: 2px 12px;
        color: #fff;
        background-color: #00b4aa;
        margin-right: 32px;
      }
    }
  }
}

.video {
  height: 1000px;
  background: url("../assets/image/bg_tw.jpg") repeat left top;
}
</style>

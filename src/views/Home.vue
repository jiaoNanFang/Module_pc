<template>
  <div class="home_area">
    <Button style="margin: 100px auto; width: 100%;" @click="findPage">此按钮为element-ui按需加载组件，点击发请求</Button>
    <!--图片裁剪上传-->
    <Cropper :imageUrl="imageUrl" :isRound="false" :aspectRatio="1" :confirmFn="cropperFn"></Cropper>
    <img :src="url" alt="">
    <!--video-->
    <Video :videoUrl=src :videoPoster="poster"></Video>
    <!--轮播-->
    <div class="home_swiper">
      <!--轮播//插件-->
      <div id="bigOne_swiper" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/home/ceshi1.jpeg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/home/ceshi2.jpeg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/home/ceshi3.jpeg" alt="">
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" style="color: #fff;"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next" style="color: #fff;"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <!--分页-->
    <pagination :total = 'total' v-model="dataForm.page" @jumpPage =handleJumpPage />
    <!--内容区-->
    <div class="home_content">
      <!--疾病百科-->
      <div class="home_disease">
        <!--头部-->
        <div class="home_disease_header">
          <div class="disease_header_text">
            <span>疾病</span>
            <div></div>
            <span>百科</span>
          </div>
          <div class="english_name">
            <div></div>
            <span>english_name</span>
            <div></div>
          </div>
        </div>
        <!--导航-->
        <div class="home_disease_nav">
          <ul class="disease_navList">
            <li>最新</li>
            <li>内科</li>
            <li>外科</li>
            <li>妇产科</li>
            <li>儿科</li>
          </ul>
          <div class="disease_rightBut">
            <div>更多>></div>
          </div>
        </div>
        <!--card-->
        <div class="disease_card">
          <!--左-->
          <div class="disease_card_left">
            <!--图片区-->
            <div class="card_left_img">
              <div class="img_list">
                <img src="../assets/images/home/beijing1.jpeg" alt="">
                <div>孩子不吃饭怎么办</div>
              </div>
              <div class="img_list">
                <img src="../assets/images/home/beijing2.jpg" alt="">
                <div>打一顿就好了</div>
              </div>
              <div class="img_list">
                <img src="../assets/images/home/beijing3.jpg" alt="">
                <div>如果不行</div>
              </div>
              <div class="img_list">
                <img src="../assets/images/home/beijing4.jpg" alt="">
                <div>那就打两顿</div>
              </div>
            </div>
            <!--列表区-->
            <div class="card_left_text">
              <div class="text_list">
                <div class="item_list">
                  <span>孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭？</span>
                  <div>2013-03-13</div>
                </div>
              </div>
              <div class="text_list">
                <div class="item_list">
                  <span>孩子为什么不吃饭？</span>
                  <div>2013-03-13</div>
                </div>
              </div>
            </div>
          </div>
          <!--中-->
          <div class="disease_card_center">
            <!--热门问答-->
            <div class="card_center_question">
              <div class="item_question">
                <div>肝炎的早期症状有哪些呢？</div>
                <span>肝炎流行季节或流行地区以及家中有急性肝炎患者时应高度警惕、时时提防。少数人在发病前曾有过类似“感冒”的症状少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似少数人在发病前曾有过类似</span>
              </div>
            </div>
            <!--问题列表-->
            <div class="card_hot_topic">
              <div class="hot_topic_list">
                <div class="item_topic_list">
                  <div class="hot_topic_text">
                    <div class="mask_box"></div>
                    <div class="Topic_text">没有钱的症状是什么？</div>
                  </div>
                  <div class="hot_topic_time">2020-03-16</div>
                </div>
              </div>
              <div class="hot_topic_list">
                <div class="item_topic_list">
                  <div class="hot_topic_text">
                    <div class="mask_box"></div>
                    <div class="Topic_text">没有钱的症状是什么？</div>
                  </div>
                  <div class="hot_topic_time">2020-03-16</div>
                </div>
              </div>
              <div class="hot_topic_list">
                <div class="item_topic_list">
                  <div class="hot_topic_text">
                    <div class="mask_box"></div>
                    <div class="Topic_text">没有钱的症状是什么？</div>
                  </div>
                  <div class="hot_topic_time">2020-03-16</div>
                </div>
              </div>
              <div class="hot_topic_list">
                <div class="item_topic_list">
                  <div class="hot_topic_text">
                    <div class="mask_box"></div>
                    <div class="Topic_text">没有钱的症状是什么？</div>
                  </div>
                  <div class="hot_topic_time">2020-03-16</div>
                </div>
              </div>
            </div>
            <!--列表区-->
            <div class="card_center_text">
              <div class="text_list">
                <div class="item_list">
                  <span>孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭孩子为什么不吃饭？</span>
                  <div>2013-03-13</div>
                </div>
              </div>
              <div class="text_list">
                <div class="item_list">
                  <span>孩子为什么不吃饭？</span>
                  <div>2013-03-13</div>
                </div>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="disease_card_right">
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <div class="item_list">
              <div class="GraphicText_list">
                <div class="item_GraphicText_list">
                  <div class="GraphicImg">
                    <img src="../assets/images/home/beijing2.jpg" alt="">
                  </div>
                  <div class="textTime">
                    <div>没有心脏病的人也会出现心源性猝死吗，这是为什么呢？没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗没有心脏病的人也会出现心源性猝死吗</div>
                    <span>2020-03-12</span>
                  </div>
                </div>
              </div>
              <div class="hot_list">
                <div class="item_hot_list">
                  <div class="joint_box">
                    <img src="" alt="">
                  </div>
                  <div class="hot_text">冠心病的早期症状有哪些？怎么预防</div>
                </div>
              </div>
            </div>
            <!--查看更多-->
            <div class="handle_more">查看更多>>>></div>
          </div>
        </div>
      </div>
      <!--科普视频-->
      <div class="home_KpVideo">
        <!--头部-->
        <div class="home_KpVideo_header">
          <div class="KpVideo_header_text">
            <span>科普</span>
            <div></div>
            <span>视频</span>
          </div>
          <div class="english_name">
            <div></div>
            <span>POPULAR  SCIENCE  VIDEO</span>
            <div></div>
          </div>
        </div>
        <!--导航-->
        <div class="home_KpVideo_nav">
          <ul class="KpVideo_navList">
            <li>最新</li>
            <li>最热</li>
            <li>特邀</li>
            <li>疾病</li>
            <li>健康</li>
          </ul>
          <div class="KpVideo_rightBut">
            <div>更多>></div>
          </div>
        </div>
        <!--card区-->
        <div class="home_KpVideo_Card">
          <div class="KpVideo_Card_list">
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
            <div class="item_Card_list">
              <div class="card_img">
                <img src="../assets/images/home/ceshi1.jpeg" alt="">
                <div>怎么直观排除还是不是自</div>
              </div>
              <div class="card_name">
                <div>张毅</div>
                <span>北京协和医院副主任医师</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   import Swiper from 'swiper'
   import { Button,Calendar } from 'element-ui';
   import Video from '../components/video/index'
   import pagination from '../components/pagination/index'
   import Cropper from '../components/upLoadImg/upLoad'
  export default {
    name: "Home",
    components:{
      Button,
      Calendar,
      Video,
      pagination,
      Cropper,
    },
    data() {
      return {
        src:'http://vjs.zencdn.net/v/oceans.mp4',
        poster:'https://b-gold-cdn.xitu.io/v3/static/img/bg.1f516b3.png',
        total:10,
        dataForm:{
          page:1,
          size:10,
        },
        QiniuData:{},   // 使用七牛上传  根据项目不同改变
        compileTime:'', // 时间戳
        QiniuUrl:'', // 七牛地址
        imageUrl:'',
        url:'',
      }
    },
    methods:{
      // 初始化头部轮播
      _initSwiper() {
        let mySwiper = new Swiper('#bigOne_swiper', {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
          autoplayDisableOnInteraction: false,
        })
      },
      // 请求模板
      findPage(){
        this.$api.home.findPage() .then(()=>{
          alert('请求完成，看Network')
        })
      },
      // 分页
      handleJumpPage(value){
        console.log(value, '分页id');
      },
      // 图片裁剪拼接
      beforeAvatarUpload(file,ext) {
        this.getTodayTime();
        // 拼接时间戳
        this.QiniuData.key = `doctor_img_${this.compileTime}`
      },
      // 拼接时间
      getTodayTime() {
        var date = new Date();//实例一个时间对象；
        var year = date.getFullYear();//获取系统的年；
        var month = date.getMonth()+1;//获取系统月份，由于月份是从0开始计算，所以要加1
        var day = date.getDate();//获取系统日
        var hour = date.getHours();//获取系统时间
        var minute = date.getMinutes(); //分
        var second = date.getSeconds();//秒
        this.compileTime = year+'_'+month+'_'+day+'_'+hour+'_'+minute+'_'+second
      },
      // 字符串转base64
      encode(str){
        // 对字符串进行编码
        var encode = encodeURI(str);
        // 对编码的字符串转化base64
        var base64 = btoa(encode);
        return base64;
      },
      // 图片裁剪上传返回
      cropperFn(data, ext){
        console.log(data);
        this.$message({
          message: '裁剪成功 下一步请求后台',
          type: 'success'
        })
        this.url = data

        return
        let this_ = this
        let datas = data
        this.beforeAvatarUpload(data,ext)
        this.$nextTick(()=>{
          this.QiniuData.file = data
          var pic = data.split(',')[1];
          // 转base64
          let keys = this.encode(this.QiniuData.key)
          // 拼接七牛地址
          var url =this.QiniuUrl+'/putb64/-1/key/'+keys
          var xhr = new XMLHttpRequest();
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
          xhr.setRequestHeader("Authorization",  'UpToken '+this.QiniuData.token );
          xhr.send(pic);
          xhr.onreadystatechange=function(){
            if (xhr.readyState==4){
              this_.imageUrl = datas
              this_.dataForm.headPhoto = JSON.parse(xhr.response).key
            }
          }
        })
      }
    },
    mounted() {
      this._initSwiper()
    },
  }
</script>
<style lang="stylus" >
  div{
    box-sizing border-box
  }
  input{
    border:none
    &:focus {
      outline: none;
      background:none;
      border:0
    }
  }
  // 梦开始的地方
  .home_area{
    width 100%
    height 100%
    // 轮播区
    .home_swiper{
      width 1200px
      margin 0 auto
      // 轮播
      .swiper-container {
        margin-top 20px
        width:100%
        height 350px
        .swiper-slide{
          cursor: pointer
        }
        img{
          width 100%
          height 100%
        }
      }
    }
    // 内容区
    .home_content{
      width 1200px
      margin 0 auto
      // 疾病百科
      .home_disease{
        padding-top 80px
        .home_disease_header{
          .disease_header_text{
            display flex
            align-items center
            justify-content center
            >span{
              font-size 36px
              color #000
              font-weight 700
            }
            >div{
              width: 20px
              height: 20px
              border 1px solid #5bb7e2
              transform rotate(45deg)
              margin  0 20px
            }
          }
          .english_name{
            margin-top 20px
            display flex
            align-items center
            justify-content space-between
            >div{
              height: 1px
              background #dcdcdc
              flex 1
            }
            >span{
              font-size 20px
              color: #BCBCBC
              font-weight 700
              margin 0 20px
            }
          }
        }
        .home_disease_nav{
          margin-top 40px
          display flex
          justify-content space-between
          align-items center
          .disease_navList{
            display flex
            >li{
              cursor: pointer
              padding 11px 14px
              box-sizing border-box
              color: #4f4f4f
              border 1px solid #797979
              border-radius 4px
              margin-right 15px
              &:hover{
                border 1px solid #0d83f8
                background #0d83f8
                color: #fff
              }
              &.active{
                border 1px solid #0d83f8
                background #0d83f8
                color: #fff
              }
            }
          }
          .disease_rightBut{
            cursor: pointer
            display flex
            align-items center
            justify-content center
            width: 84px
            height: 26px
            border 1px solid #1083F8
            >div{
              color: #1083F8
              font-size 16px
            }
          }
        }
        .disease_card{
          margin-top 30px
          display flex
          justify-content space-between
          .disease_card_left{
            padding-right 2px
            width:395px
            //height 400px
            .card_left_img{
              display flex
              justify-content space-between
              flex-wrap wrap
              .img_list{
                position relative
                margin-bottom 12px
                cursor: pointer
                >img{
                  width: 195px
                  height: 135px
                }
                >div{
                  position absolute
                  left:0
                  bottom:3px
                  width: 195px
                  height: 30px
                  background rgba(0,0,0,0.5)
                  color: #fff
                  font-weight 700
                  line-height 30px
                  /*省略号*/
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  text-align: center
                }
              }
            }
            .card_left_text{
              .text_list{
                cursor: pointer
                height 50px
                background #f2f2f2
                margin-bottom 14px
                padding 0 10px
                &:last-child{
                  margin-bottom 0
                }
                .item_list{
                  height 50px
                  display flex
                  align-items center
                  justify-content space-between
                  >span{
                    width 70%
                    color: #5E5E5E
                    font-size:14px
                    font-weight 700
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  >div{
                    color: #868686
                    font-size 12px
                  }
                }
              }
            }
          }
          .disease_card_center{
            width:395px
            height 400px
            padding 0 2px
            .card_center_question{
              .item_question{
                >div{
                  font-weight: 700;
                  font-size: 16px;
                  margin-bottom 12px
                  color: #333
                  cursor: pointer
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                >span{
                  font-size: 14px;
                  line-height: 22px;
                  color: #333
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                }
              }
            }
            .card_hot_topic{
              margin-top 20px
              .hot_topic_list{
                padding 14px 10px
                border-top 1px dashed #eee
                cursor: pointer
                .item_topic_list{
                  width 100%
                  display flex
                  justify-content space-between
                  align-items center
                  .hot_topic_text{
                    display flex
                    align-items center
                    .mask_box{
                      width: 10px;
                      height: 10px;
                      border-radius 50%
                      background #bcbcbc
                      margin-right 8px
                    }
                    .Topic_text{
                      color: #5E5E5E
                      font-size 14px
                      font-weight:700
                      width 250px
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                  .hot_topic_time{
                    color: #868686
                    font-size 12px
                  }
                }
                .hot_topic_text{
                  display flex
                  align-items center
                  .mask_box{
                    width: 10px;
                    height: 10px;
                    border-radius 50%
                    background #bcbcbc
                    margin-right 8px
                  }
                  .Topic_text{
                    color: #5E5E5E
                    font-size 14px
                    font-weight:700
                    width 250px
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
                .hot_topic_time{
                  color: #868686
                  font-size 12px
                }
              }
            }
            .card_center_text{
              margin-top 14px
              .text_list{
                cursor: pointer
                height 50px
                background #f2f2f2
                margin-bottom 14px
                padding 0 10px
                &:last-child{
                  margin-bottom 0
                }
                .item_list{
                  height 50px
                  display flex
                  align-items center
                  justify-content space-between
                  >span{
                    width 70%
                    color: #5E5E5E
                    font-size:14px
                    font-weight 700
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  >div{
                    color: #868686
                    font-size 12px
                  }
                }
              }
            }
          }
          .disease_card_right{
            width:395px
            padding-left 2px
            .item_list{
              cursor: pointer
              &:nth-child(-n+3){
                .GraphicText_list{
                  display flex
                }
                .hot_list{
                  display  none
                }
              }
              .GraphicText_list{
                margin-bottom 16px
                display none
                flex 1
                .item_GraphicText_list{
                  display flex
                  .GraphicImg{
                    >img{
                      width: 101px
                      height: 70px
                      margin-right 15px
                    }
                  }
                  .textTime{
                    height: 70px
                    display flex
                    flex-direction column
                    justify-content space-around
                    >div{
                      color: #5E5E5E
                      font-size 14px
                      text-overflow: -o-ellipsis-lastline;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      line-height 18px
                    }
                    >span{
                      color: #868686
                      font-size 12px
                    }
                  }
                }
              }
              .hot_list{
                margin-bottom 17.3px
                .item_hot_list{
                  display flex
                  align-items center
                  .joint_box{
                    >img{
                      vertical-align middle
                    }
                  }
                  .hot_text{
                    font-size: 14px;
                    color: #5E5E5E;
                    margin-left 12px
                    width: 100%
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }
            }
            .handle_more{
              cursor: pointer
              width: 100%
              height:34px
              background #f2f2f2
              display flex
              align-items center
              justify-content center
              color: #1083F8
            }
          }
        }
      }
      // 科普视频
      .home_KpVideo {
        padding-top 80px
        .home_KpVideo_header{
          .KpVideo_header_text{
            display flex
            align-items center
            justify-content center
            >span{
              font-size 36px
              color #000
              font-weight 700
            }
            >div{
              width: 20px
              height: 20px
              border 1px solid #5bb7e2
              transform rotate(45deg)
              margin  0 20px
            }
          }
          .english_name{
            margin-top 20px
            display flex
            align-items center
            justify-content space-between
            >div{
              height: 1px
              background #dcdcdc
              flex 1
            }
            >span{
              font-size 20px
              color: #BCBCBC
              font-weight 700
              margin 0 20px
            }
          }
        }
        .home_KpVideo_nav{
          margin-top 40px
          display flex
          justify-content space-between
          align-items center
          .KpVideo_navList{
            display flex
            >li{
              cursor: pointer
              padding 11px 14px
              box-sizing border-box
              color: #4f4f4f
              border 1px solid #797979
              border-radius 4px
              margin-right 15px
              &:hover{
                border 1px solid #0d83f8
                background #0d83f8
                color: #fff
              }
              &.active{
                border 1px solid #0d83f8
                background #0d83f8
                color: #fff
              }
            }
          }
          .KpVideo_rightBut{
            cursor: pointer
            display flex
            align-items center
            justify-content center
            width: 84px
            height: 26px
            border 1px solid #1083F8
            >div{
              color: #1083F8
              font-size 16px
            }
          }
        }
        .home_KpVideo_Card{
          margin-top 40px
          .KpVideo_Card_list{
            display flex
            flex-wrap wrap
            .item_Card_list{
              width: 224px;
              height: 225px;
              display flex
              flex-direction column
              justify-content space-between
              padding-bottom 20px
              margin-bottom 30px
              margin-right 20px
              cursor: pointer
              &:nth-child(5n){
                margin-right 0px
              }
              &:hover{
                box-shadow:0 2px 6px 1px #eee;
              }
              .card_img{
                display flex
                flex-direction column
                >img{
                  width: 224px
                  height: 120px
                }
                >div{
                  margin-top 15px
                  padding 0 15px
                  font-size: 16px;
                  color: #5E5E5E;
                  text-overflow: -o-ellipsis-lastline;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  line-height 20px
                }
                &:after{
                  content ''
                  width 100%
                  height 1px
                  border-top:1px dashed  #eee
                  margin-top 5px
                }
              }

              .card_name{
                padding 0 15px
                display flex
                justify-content space-between
                align-items center
                >div{
                  width 30%
                  font-weight: 700;
                  font-style: normal;
                  font-size: 14px;
                  color: #5E5E5E;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                >span{
                  display block
                  font-size: 12px;
                  color: #5E5E5E;
                  width 70%
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  text-align: right
                }
              }
            }
          }
        }
      }
    }
  }


</style>



<!--图片裁切上传-->
<!--<ImgCropper :isShowBtn="false" ref="imgcropper" :confirmFn="cropperImgSucc" :aspectRatio="1"-->
<!--:isRound="true"></ImgCropper>-->


<template>
  <article ref="container" id="image-ecropper-input-container" >
    <Button v-show="isShowBtn" type="primary" @click="chooseImg">{{imageUrl?'修改':'点击上传裁剪图片'}}<i class="el-icon-upload el-icon--right"></i>
    </Button>
    <Dialog  title="裁切图片" :visible.sync="showCropper" size="large" width="50%" top="15px" :modal="false" >
      <div class="croppercontainer">
        <img @load="startCropper()" class="image-preview" :src="imgData">
      </div>
      <span slot="footer" class="dialog-footer">
        <Button @click="showCropper = false">取 消</Button>
        <Button type="primary" @click="confirmCropper()">确 定</Button>
      </span>
    </Dialog>

    <input accept="image/jpg,image/jpeg,image/png" type="file" style="display: none" @change="fileChange($event)"
           ref="file">
  </article>
</template>

<script>
  import Cropper from 'cropperjs'
  import 'cropperjs/dist/cropper.min.css'
  import {Dialog,Button} from 'element-ui'

  export default{
    props: {
      confirmFn: Function, // 点击确认后的回调 参数: imgData-base64的数据
      aspectRatio: { // 长宽比例 9/9
        type: Number,
        default: 9 / 9
      },
      isRound: { // 是否圆形裁切
        type: Boolean,
        default: false
      },
      isShowBtn: { // 是否显示上传按钮
        isShowBtn: Boolean,
        default: true
      },
      compress: { //  压缩比例
        type: Number,
        default: 1.0
      },
      imgType: { // 图片类型 jpg|png|gif
        type: String,
        default: 'jpg'
      },
      modalState: {
        type: Boolean,
        default: true
      },
      imageUrl: {
        type: String,
      }
    },
    components:{
      Button,
      Dialog,
    },
    data () {
      return {
        showCropper: false,
        imgData: '',
        finalRatio: null,
        cropper: null,
        imageType: void 0,
        ext: void 0,
      }
    },
    watch: {
      'showCropper'(val) {
        if (!val) {
          this.cropper.destroy()
          this.imgData = null
        }
      },
      'aspectRatio'(val) {
        this.finalRatio = val || 16 / 9
      }
    },
    created () {
      this.finalRatio = this.aspectRatio || 16 / 9
    },
    methods: {
      // 选择图片
      chooseImg () {
        this.$refs.file.click()
      },
      // 文件切换选中
      fileChange (e) {
        let file = e.target.files[0]
        if (!file)
          return

        let _this = this
        let reader = new window.FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          var ext = 'jpg'
          var exts = file.name.split('.')
          if (exts.length > 0 && (exts.length - 1) > 0) {
            ext = exts[(exts.length - 1)]
          }
          if (ext == 'gif') {
            _this.confirmFn(reader.result, `.${ext}`)
            return false
          }
          _this.$nextTick(() => {
            _this.imgData = this.result
            _this.$refs.file.value = null
            _this.showCropper = true
            _this.imageType = file.type
            _this.ext = '.' + ext
          })
        }
      },
      // 确定裁剪尺寸
      confirmCropper () {
        this.showCropper = false
        this.confirmFn && this.confirmFn(this.cropper.getCroppedCanvas().toDataURL(`${this.imageType}`, this.compress), this.ext)
        this.imgData = null
      },
      startCropper () {
        let image = this.$refs.container.querySelector('.image-preview')
        let _this = this
        this.cropper = new Cropper(image, {
          aspectRatio: this.finalRatio,
          scalable: false,
          zoomable: false,
          viewMode: 1,
          ready() {
            // 是否需要原型裁切
            if (_this.isRound) {
              [..._this.$refs.container.querySelectorAll('.cropper-view-box,.cropper-face')].map(item => {
                item.style['border-radius'] = '50%'
              })
            }
          }
        })
      }
    },
  }
</script>


<style  scoped >
  #image-ecropper-input-container  .dialog-footer {
    /*float: right !important;*/
    text-align: right !important;
  }
  .croppercontainer  img {
    max-height: 720px;
  }
</style>

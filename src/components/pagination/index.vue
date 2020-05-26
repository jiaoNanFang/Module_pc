
<!--分页器-->

<template>
  <div class="pagination">
    <div class="pager-wrapper" ref="pager">
      <div class="pager-box">
        <a class="pager-prev" :class="{'pager-disabled':prevDisable}" href="javascript:;" @click="jumpPrev()">上一页</a>
        <template v-for="i in total">
          <span v-if="i==pageNo" class="pager-curr">
                    <em class="pager-em"></em><em>{{i}}</em>
                </span>
          <a v-else-if="pageNo<5&&(i)<6" href="javascript:;" @click="jump(i)">
            {{i}}
          </a>
          <a v-else-if="total<7||i==1||i==total||(pageNo-2<=i&&i<=pageNo+2)" href="javascript:;" @click="jump(i)">
            {{i}}
          </a>
          <template v-else>
            <span v-if="pageNo<5&&i==6" class="pager-spr">…</span>
            <span v-if="pageNo==4&&i==7" class="pager-spr">…</span>
            <span v-if="pageNo>4&&i==pageNo-3" class="pager-spr">…</span>
            <span v-if="pageNo>4&&i==pageNo+3" class="pager-spr">…</span>
          </template>
        </template>
        <a class="pager-next" :class="{'pager-disabled':nextDisable}" href="javascript:;" @click="jumpNext()">下一页</a>
      </div>
      <div class="pager-input">
        <input type="text" v-model="jumpPage">
        <a class="pager-btn-go" href="javascript:;" @click="Go()">GO</a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "index",
    model:{ //通过v-model传过来的参数
      prop: 'pageNo',
      event: 'jumpPage'
    },
    props:{
      total:{
        type: Number,
        default: 1
      },
      pageNo:{ //通过v-model传过来的参数
        type: Number,
        default: 1
      }
    },
    data(){
      return {
        jumpPage:'' //避免操作props参数
      }
    },
    computed: {
      prevDisable: function(){ //“上一页”按钮是否可点
        if(this.pageNo > 1){
          return false;
        }else{
          return true
        }
      },
      nextDisable: function(){ //“下一页”按钮是否可点
        if(this.pageNo < this.total && this.total > 1){
          return false;
        }else{
          return true;
        }
      },
    },
    methods: {
      jumpPrev: function(){ //点击上一页
        if(this.pageNo == 1){
          return ;
        }else{
          this.$emit('jumpPage',this.pageNo-1);
          this.$emit('on-jump',this.pageNo-1);
        }
      },
      jumpNext: function(){ //点击下一页
        if(this.pageNo == this.total){
          return ;
        }else{
          this.$emit('jumpPage',this.pageNo+1); //修改当前页码
          this.$emit('on-jump',this.pageNo+1); //跳转
        }
      },
      jump: function(id){ //直接跳转
        if(id>this.total){
          id=this.total;
        }
        this.jumpPage = '';
        this.$emit('jumpPage',id); //修改当前页码
        this.$emit('on-jump',id); //跳转
      },
      Go: function(){
        if(this.jumpPage==''){ //判空处理
          return ;
        }else if(/^\d*$/.test(parseInt(this.jumpPage))){ //填写数字才能跳转
          this.jump(parseInt(this.jumpPage));
          this.jumpPage = '';
        }else{
          this.jumpPage = '';
          return ;
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  a{
    border none
    text-decoration:none;
    &:link {
      text-decoration: none;
    }
    /*已经访问过的链接*/
    &:visited {
      text-decoration: none;
    }
    /*鼠标划过(停留)的链接*/
    &:hover {
      text-decoration: none;
    }
    /* 正在点击的链接*/
    &:active {
      text-decoration: none;
    }
  }
  .pagination{
    display flex
    justify-content center
    .pager-wrapper{
      margin 0 auto
      display flex
      align-items center
      .pager-box{
        display flex
        align-items center
        >a{
          padding 10px 10px
          width: 10px
          height: 10px
          border 1px solid #eee
          margin-right 10px
          display flex
          justify-content center
          align-items center
          font-size 14px
          color: #333
        }
        .pager-prev , .pager-next{
          color: #333
          font-size 14px
          width: 50px
          height: 10px
          &.pager-disabled{
            background #eee
          }
        }
        .pager-curr{
          display flex
          align-items center
          justify-content center
          padding 10px 10px
          width: 10px
          height: 10px
          border none
          color: #fff
          font-size 14px
          margin-right 10px
          background #c62626
        }
        .pager-spr{
          padding 10px 10px
          width: 10px
          height: 10px
          margin-right 10px
          display flex
          align-items center
          justify-content center
        }
      }
      .pager-input{
        display flex
        >input{
          border 1px solid #eee
          width: 30px
          height: 30px
          box-sizing border-box
        }
        >a{
          margin-left 10px
          width: 30px
          height: 30px
          border 1px solid #eee
          margin-right 10px
          display flex
          justify-content center
          align-items center
          font-size 14px
          color: #333
          box-sizing border-box
        }
      }
    }
  }
</style>



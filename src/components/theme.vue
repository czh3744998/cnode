<template>
  <div id="main">
    <div id="sidebar">
      <div class="panel">
        <div class="header">
          <span class="col_fade">Markdown 语法参考</span>
        </div>
        <div class="inner">
          <ol>
            <li><tt>### 单行的标题</tt></li>
            <li><tt>**粗体**</tt></li>
            <li><tt>`console.log('行内代码')`</tt></li>
            <li><tt>```js\n code \n```</tt> 标记代码块</li>
            <li><tt>[内容](链接)</tt></li>
            <li><tt>![文字说明](图片链接)</tt></li>
          </ol>
          <span><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
        </div>
      </div>

      <div class="panel">
        <div class="header">
          <span class="col_fade">话题发布指南</span>
        </div>
        <div class="inner">
          <ol>
            <li>尽量把话题要点浓缩到标题里</li>
            <li>代码含义和报错可在 <a href="http://segmentfault.com/t/node.js">SegmentFault</a> 提问</li>
          </ol>
        </div>
      </div>

    </div>


    <div id="content">
      <div class="panel">
        <div class="header">
          <ol class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>

            <li class="active">发布话题</li>

          </ol>
        </div>
        <div class="inner post">



          <form id="create_topic_form"  method="post" v-on:submit.prevent="setdata">

            <fieldset>
              <span class="tab-selector">选择版块：</span>
              <select name="tab" id="tab-value">
                <option value="">请选择</option>

                <option value="share">分享</option>


                <option value="ask">问答</option>


                <option value="job">招聘</option>


                <option value="dev">客户端测试</option>


              </select>
              <span id="topic_create_warn"></span>
              <textarea autofocus="" class="span9" id="title" name="title" rows="1" placeholder="标题字数 10 字以上" v-model="title"></textarea>

              <textarea name="" id="" cols="84" rows="15" v-model="mesg"></textarea>
              <input type="submit" style="width: 80px;height: 40px;background: deepskyblue;color: white;border: 0;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;" @click="setdata()">
              <input type="hidden" id="topic_tags" name="topic_tags" value="">
              <input type="hidden" name="_csrf" value="1CVIhDL7-gQ9O3eloknUNerIONFOHycmtH0I">
            </fieldset>
          </form>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
    export default {
        name: "theme",
      data(){
          return{
            mesg:"",
            title:""
          }
      },
      // watch:{
      //     $route(){
      //       this.setdata()
      //     }
      // },
      // created(){
      //     this.setdata()
      // },
      methods:{
          setdata(){
            this.$axios.post(" https://cnodejs.org/api/v1/topics",{
              accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7",
              title:this.title,
              tab:"dev",
              content:this.mesg
            }).then(res=>{
              console.log(res)
              this.$route.push({ name: 'user', params: { userId: 123 }})
            }).catch(error=>{
              console.log(error)
            })

          }
      }
    }
</script>


<style scoped lang="scss">
                             #main {
                               width: 90%;
                               max-width: 1400px;
                               min-width: 960px;
                               margin: 15px auto;
                               min-height: 400px;
                             }

  #footer, #main {
    position: relative;
  }
  #sidebar {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }
  #sidebar .panel {
    font-size: 13px;
  }
  .panel {
    margin-bottom: 13px;
  }
  #sidebar .header {
    color: #51585c;
    border-radius: 3px 3px 0 0;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .header .col_fade {
    color: #444;
  }
  .col_fade {
    color: #ababab;
  }
  #sidebar .inner ol {
    margin: 4px 0;
    list-style: none;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  #sidebar .panel {
    font-size: 13px;
  }
  .panel .inner a {
    color: #778087;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  #content {
    padding: 0;
    margin-right: 305px;
  }
  .panel {
    margin-bottom: 13px;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
  }
  .breadcrumb, .pagination ul, .span-common {
    box-shadow: none;
  }
  .breadcrumb {
    padding: 8px 15px;
    margin: 0 0 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .breadcrumb, .typeahead {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
  }
  .breadcrumb>.active {
    color: #999;
  }
  .breadcrumb>li, .navbar .brand {
    text-shadow: none;
  }
  .breadcrumb>li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff;
  }
  dd, dt, li {
    line-height: 20px;
  }
  .panel .inner.post, .panel .inner.reply, .panel .inner.topic, .panel .inner.userinfo {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  .panel .header.topic_header, .panel .inner {
    background-color: #fff;
  }
  form, textarea {
    margin-bottom: 0;
  }
  form {
    margin: 0 0 20px;
  }
  select {
    width: 220px;
    border: 1px solid #ccc;
  }
  input[type=file], select {
    height: 30px;
    line-height: 30px;
  }
  option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  textarea#title {
    width: 98%;
    border: none;
    resize: none;
    height: 20px;
  }
  .markdown-text>:last-child, .preview>:last-child, textarea#title {
    margin-bottom: 1em;
  }
  #create_topic_form textarea.editor, #edit_reply_form textarea.editor {
    height: 400px;
  }
  textarea.editor {
    width: 98%;
    line-height: 2em;
    height: 200px;
    resize: vertical;
    font-size: 15px;
    padding: .5em;
    border: none;
  }ditor-toolbar a {
    display: inline-block;
    text-align: center;
    text-decoration: none!important;
    color: #2c3e50!important;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .eicon-bold, .eicon-code, .eicon-contract, .eicon-fullscreen, .eicon-image, .eicon-info, .eicon-italic, .eicon-link, .eicon-music, .eicon-ordered-list, .eicon-play, .eicon-preview, .eicon-question, .eicon-quote, .eicon-redo, .eicon-undo, .eicon-unordered-list {
    font-family: icomoon;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  .editor-toolbar a {
    display: inline-block;
    text-align: center;
    text-decoration: none!important;
    color: #2c3e50!important;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .editor-toolbar i.separator {
    display: inline-block;
    width: 0;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #fff;
    color: transparent;
    text-indent: -10px;
    margin: 0 6px;
  }
  .editor-toolbar a {
    display: inline-block;
    text-align: center;
    text-decoration: none!important;
    color: #2c3e50!important;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .editor-toolbar a {
    display: inline-block;
    text-align: center;
    text-decoration: none!important;
    color: #2c3e50!important;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .editor-toolbar i.separator {
    display: inline-block;
    width: 0;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #fff;
    color: transparent;
    text-indent: -10px;
    margin: 0 6px;
  }
  .editor-toolbar i.separator {
    display: inline-block;
    width: 0;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #fff;
    color: transparent;
    text-indent: -10px;
    margin: 0 6px;
  }
  .CodeMirror {
    height: 450px;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
    z-index: 6;
  }
  .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-scrollbar-filler {
    background-color: #fff;
  }
  .CodeMirror-scroll {
    margin-bottom: -30px;
    margin-right: -30px;
    padding-bottom: 30px;
    padding-right: 30px;
    height: 100%;
    outline: 0;
    position: relative;
  }
  .CodeMirror-scroll {
    overflow: auto;
  }
  .editor-statusbar {
    border-top: 1px solid #ece9e9;
    padding: 8px 10px;
    font-size: 12px;
    color: #959694;
    text-align: right;
  }
  .editor-statusbar span {
    display: inline-block;
    min-width: 4em;
    margin-left: 1em;
  }
  .editor-statusbar span {
    display: inline-block;
    min-width: 4em;
    margin-left: 1em;
  }
  .editor-statusbar {
    border-top: 1px solid #ece9e9;
    padding: 8px 10px;
    font-size: 12px;
    color: #959694;
    text-align: right;
  }
  .editor-statusbar span {
    display: inline-block;
    min-width: 4em;
    margin-left: 1em;
  }
  .editor-statusbar {
    border-top: 1px solid #ece9e9;
    padding: 8px 10px;
    font-size: 12px;
    color: #959694;
    text-align: right;
  }
  .editor_buttons {
    margin-top: 10px;
  }
  input, input:focus, textarea, textarea:focus {
    box-shadow: 0 0 2px rgba(60,60,60,.5);
  }
  input, textarea {
    background: hsla(0,0%,0%,0);
  }
  body, input, p, textarea {
    font-size: 14px;
    word-break: break-word;
  }

  .uneditable-input, input, textarea {
    margin-left: 0;
  }
  input, input:focus, textarea, textarea:focus {
    box-shadow: 0 0 2px rgba(60,60,60,.5);
  }
  input, textarea {
    background: hsla(0,0%,0%,0);
  }
  textarea#title {
    width: 98%;
    border: none;
    resize: none;
    height: 20px;
  }
  .markdown-text>:last-child, .preview>:last-child, textarea#title {
    margin-bottom: 1em;
  }

  .editor-toolbar {
    position: relative;
    opacity: .6;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .CodeMirror {
    height: 450px;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
  }


</style>

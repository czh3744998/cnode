<template>
  <div class="panel">
    <div class="header">
      <ul class="breadcrumb">
        <li><a href="/">主页</a><span class="divider">/</span></li>
        <li class="active">注册新账号</li>
      </ul>
    </div>
    <div class="inner">
      <form id="signin_form" class="form-horizontal" action="/auth/github/create" method="post">
        <input type="hidden" name="_csrf" value="BJzEVCmu-UCh9AXvfyFS4f7F0YB68PwjorJY">
        <input type="hidden" name="isnew" value="1">

        <div class="control-group">
          <label class="control-label">通过 GitHub 帐号</label>

          <div class="controls">
            <input type="submit" class="span-info" value="注册新账号">
          </div>
        </div>
      </form>

      <form id="signin_form" class="form-horizontal" action="/auth/github/create" method="post">
        <div class="control-group">
          <label class="controls">或者</label>
        </div>
        <div class="control-group">
          <label class="control-label" for="name">用户名</label>

          <div class="controls">
            <input class="input-xlarge" id="name" name="name" size="30" type="text">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="pass">密码</label>

          <div class="controls">
            <input class="input-xlarge" id="pass" name="pass" size="30" type="password">
          </div>
        </div>
        <input type="hidden" name="_csrf" value="BJzEVCmu-UCh9AXvfyFS4f7F0YB68PwjorJY">

        <div class="form-actions">
          <input type="submit" class="span-primary" value="关联旧账号">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "signup"
    }
</script>

<style scoped lang="scss">
  .panel{
    width: 825px;
    height: 1650px;
    margin: 0 auto;
  .header{
    width: 100%;
    height: 40px;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  .breadcrumb{
    list-style-type: none;
    display: flex;
  .active{
    margin-left: 14px;
    color: #999
  }
  }
  }
  }
  .panel .inner>form.form-horizontal {
    margin-top: 40px;
  }
  form {
     margin: 0 0 20px;
   }
  .form-horizontal .control-label {
    float: left;
    width: 160px;
    padding-top: 5px;
    text-align: right;
  }
  button, input, label, select, textarea {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .span-info {
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
  }
  .form-horizontal .controls {
    margin-left: 180px;
  }
  .form-horizontal .control-group {
    margin-bottom: 20px;
  }
  .form-horizontal .form-actions {
    padding-left: 180px;
  }
  .form-actions {
    border-top: none;
    background-color: #fff;
  }
  .span-primary {
    border-radius: 3px;
    background-color: #08c;
    border: none;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
</style>

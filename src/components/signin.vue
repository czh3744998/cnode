<template>
  <div class="panel">
    <div class="header">
      <ul class="breadcrumb">
        <li><a href="/">主页</a><span class="divider">/</span></li>
        <li class="active">登录</li>
      </ul>
    </div>
    <div class="inner">

      <form id="signin_form" class="form-horizontal" action="/signin" method="post">
        <div class="control-group">
          <label class="control-label" for="name">用户名</label>

          <div class="controls">
            <input class="input-xlarge" id="name" name="name" size="30" type="text">
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="pass">&nbsp;&nbsp;&nbsp;密码</label>

          <div class="controls">
            <input class="input-xlarge" id="pass" name="pass" size="30" type="password">
          </div>
        </div>
        <input type="hidden" name="_csrf" value="yFCVS9qC-0VvGdWi_2ROv3fhUI-A2Ly_y8bU">

        <div class="form-actions">
          <input type="submit" class="span-primary" value="登录">
          <a href="/auth/github">
            <span class="span-info">
              通过 GitHub 登录
            </span>
          </a>
          <a id="forgot_password" href="/search_pass">忘记密码了?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "signin"
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
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    line-height: 2em;
  }
  form {
    margin: 0 0 20px;
  }
  .control-group{
    display: flex;
    padding-left: 155px;
  }
  .form-horizontal .control-group {
    margin-bottom: 20px;
  }
  .form-horizontal .form-actions {
    padding-left: 180px;
  }

  .span-primary {
    border-radius: 3px;
    background-color: #08c;
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
    border: none;
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

</style>

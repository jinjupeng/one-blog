<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">

      <el-form-item
      label="头像上传"
      prop="image"
      >
        <el-upload
        list-type="picture"
          class="avatar-uploader"
          action="http://127.0.0.1:8080/upload/image"
          on-success="(res, file)=>handleImageUploadSuccess(res,file,'image')"
          >
          <img v-if="form.image" :src="form.image" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { uploadImage } from  '@/api/upload'
  export default {
    data() {
      return {
        form: {
          image: ''
        }
      };
    },
    methods: {
      handleImageUploadSuccess(res, file, index) {
        if (res.code === 20000) {
          this.form[index] = res.data
        } else {
          this.$message.console.error(res.message);

        }
      },
      onSubmit() {
        uploadImage(this.form).then(response => {
          if(response.code === 20000) {
            this.$message({
              message: '上传成功',
              type: 'success'
            })
          }
          else {
            this.$message({
              message: '上传失败',
              type: 'error'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

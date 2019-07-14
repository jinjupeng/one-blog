import request from '@/utils/request'

export function uploadImage(form) {
  return request({
    url: '/upload/image',
    method: 'post',
    form
  })
}

export function uploadVideo(form) {
  return request({
    url: '/upload/video',
    method: 'post',
    form
  })
}
  export function uploadFile(form) {
    return request({
      url: 'upload/file',
      method: 'post',
      form
    })
  }


/**/
import request from '@/utils/request'

// 上传视频
export function postVideo(form) {
  return request.post('/video/create', form)
}

// 获取视频详情
// export function getVideo(id) {
//   return request.post('/video', id)
// }

// 视频播放列表
export function getVideos() {
  return request.get('/videos')
}

import axios from 'axios';
// 创建视频
// const postVideo = form => axios.post('/api/video/create', form).then(res => res.data);

// 读视频详情
const getVideo = id => axios.get(`/api/video/${id}`).then(res => res.data);

// 读取视频列表
// const getVideos = () => axios.get('/api/v1/videos').then(res => res.data);

/***/
export {
  // getVideos,
  getVideo,
  // postVideo,
};


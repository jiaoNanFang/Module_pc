
import axios from '../ajax'
// 所有轮播
export const findPage = function (params) {
  return axios({
    url:'/data/filter?page=1&size=10&categoryId=39',
    method:'get',
    params
  })
}

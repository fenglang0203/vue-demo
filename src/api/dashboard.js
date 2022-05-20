import request from '@/utils/request'

export function changeType(type) {
  return request({
    url: '/api/changeType',
    method: 'get',
    params: { type: type }
  })
}
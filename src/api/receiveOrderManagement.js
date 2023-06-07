import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ReceiveOrder/GetReceiveOrderList',
    method: 'get',
    params: params,
  })
}

export function getItemList(data) {
  return request({
    url: '/ReceiveOrder/GetReceiveOrderItemList',
    method: 'get',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/Materials/AddOrUpdate',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/ReceiveOrder/Delete',
    method: 'post',
    data,
  })
}

export function DeleteReceiveOrderItems(data) {
  return request({
    url: '/ReceiveOrder/DeleteReceiveOrderItems',
    method: 'post',
    data,
  })
}

//禁入
export function updateForbidInbound(data) {
  return request({
    url: '/PlainLocations/UpdateForbidInbound',
    method: 'post',
    data,
  })
}

//禁出
export function updateupForbidOutbound(data) {
  return request({
    url: '/PlainLocations/UpdateupForbidOutbound',
    method: 'post',
    data,
  })
}

//新建收货单
export function Add0rUpdateAPI(data) {
  return request({
    url: '/ReceiveOrder/Add0rUpdate ',
    method: 'post',
    data,
  })
}

//输入框模糊查询
export function getLikeMaterialsList(params) {
  return request({
    url: '/ReceiveOrder/GetLikeMaterialsList',
    method: 'get',
    params: params,
  })
}
//获取供应商
export function getCargoOwnerOptionsApi(params) {
  return request({
    url: '/ReceiveOrder/GetCargoOwnerOptions',
    method: 'get',
    params,
  })
}
//上架
export function GroundingAPI(data) {
  return request({
    url: '/ReceiveOrder/GroundingAPI ',
    method: 'post',
    data,
  })
}
//获取入库口
export function getrkLocationCodeListApi(params) {
  return request({
    url: '/PlainLocations/GetrkLocationCodeList',
    method: 'get',
    params,
  })
}

//API统一管理
// 引入二次封装的axios（带有请求、响应拦截器）
import requests from './ajax'
import mockRequest from './mockAjax'
import * as url from 'url'

//三级联动接口
// /api/product/getBaseCategoryList   get   无参数

// 获取商品分类列表数据
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取mock的banner数据
export const reqBannerList = () => mockRequest.get('/banner')

// 获取mock的floor数据
export const reqFloorList = () => mockRequest.get('/floor')

// 获取搜索模块数据(post,需要带参数)
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'post', data: params })

// 获取商品详情
export const reqGoodsInfo = skuId => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqGetCode = phone => requests({ url: `/user/passport/code/${phone}`, method: 'get' })
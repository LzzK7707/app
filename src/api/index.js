//API统一管理
// 引入二次封装的axios
import requests from './requsets'
import mockRequest from './mock'

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
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })

// 获取验证码
export const reqGetCode = phone =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })

// 注册账号
export const reqRegisterAccount = (phone, password, code) =>
  requests({
    url: '/user/passport/register',
    method: 'post',
    data: {
      phone,
      password,
      code
    }
  })

//登录
export const reqUserLogin = data =>
  requests({
    url: `/user/passport/login`,
    method: 'post',
    data
  })

// 获取用户的信息
// export const reqGetUserInfo = () => requests.get('/user/passport/auth/getUserInfo')

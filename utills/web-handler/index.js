import { CART_PRODUCTS, CATEGORY_LIST, FURNITURE_LIST, LAPTOPS_LIST, PRODUCT_LIST, TOPS_LIST } from "./route"

const { default: axios } = require("axios")

const webHandler = (route, method, success, error) => {
    axios(route, { method })
        .then((data) => {
            success(data)
        })
        .catch((e) => {
            error(e)
        })
}

const getProductList = (success, error) => {
    webHandler(PRODUCT_LIST, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}

const getCategoryList = (success, error) => {
    webHandler(CATEGORY_LIST, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}

const getFurnitureList = (success, error) => {
    webHandler(FURNITURE_LIST, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}

const getTopsList = (success, error) => {
    webHandler(TOPS_LIST, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}

const getLaptopsList = (success, error) => {
    webHandler(LAPTOPS_LIST, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}
const getCartProducts = (success, error) => {
    webHandler(CART_PRODUCTS, 'GET', (data) => {
        success(data)
    }, (e) => {
        error(e);
    })
}

export {
    getProductList,
    getCategoryList,
    getFurnitureList,
    getTopsList,
    getLaptopsList,
    getCartProducts,
}
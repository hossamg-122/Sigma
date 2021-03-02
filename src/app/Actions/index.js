import Types from "./Types";
import requester from "../Apis/requester";

export const GET_FEED_PRODS = () => {
  return async function (dispatch) {
    const params = { pageNumber: 1 };

    await requester
      .get("/product/getfeed", { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_FEED_PRODS,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_LABELED_PRODS = () => {
  return async function (dispatch) {
    await requester
      .get("/product/Label")
      .then((response) => {
        dispatch({
          type: Types.GET_LABELED_PRODS,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_SLIDER_PRODS = () => {
  return async function (dispatch) {
    await requester
      .get("/content/sliders")
      .then((response) => {
        dispatch({
          type: Types.GET_SLIDER_PRODS,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_PRODUCT_BY_ID = (productId) => {
  return async function (dispatch) {
    const params = { productId };
    await requester
      .get(`/product/details`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_PRODUCT_BY_ID,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const WRITE_REVIEW = (data) => {
  return async function (dispatch) {
    await requester.post(`review/addreview`, data).then((response) => {
      requester
        .get(`/product/details?productId=${data.ProductId}`)
        .then((response) => {
          dispatch({
            type: Types.GET_PRODUCT_BY_ID,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Error",
              body: err.message, kind:"error"
            },
          });
        });
    });
  };
};

export const GET_SUBCATEGORIES_BY_ID = (categoryId) => {
  return async function (dispatch) {
    const params = { categoryId: categoryId };
    await requester
      .get(`/subcategory/get`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_SUBCATEGORIES_BY_ID,
          payload: { subs: response.data, categoryID: categoryId },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_CATEGORIES = () => {
  return async function (dispatch) {
    await requester
      .get(`/category/get`)
      .then((response) => {
        response.data.map((category) => {
          const params = { categoryId: category.id };
          requester
            .get(`/subcategory/get`, { params: params })
            .then((response) => {
              dispatch({
                type: Types.GET_SUBCATEGORIES_BY_ID,
                payload: { subs: response.data, categoryID: category.id },
              });
            })
            .catch((err) => {
              dispatch({
                type: Types.NOTIFY,
                payload: {
                  title: "Error",
                  body: err.message, kind:"error"
                },
              });
            });
        });
        dispatch({
          type: Types.GET_CATEGORIES,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const SIGN_UP = (signUpFormData, onSuccess, onFailure) => {
  return async function (dispatch) {
    await requester
      .get(`/client/register/isemailvalid`, { params: signUpFormData })
      .then((response) => {
        if (response.data === true) {
          requester
            .get(`/client/register/ismobilevalid`, { params: signUpFormData })
            .then((response) => {
              if (response.data === true) {
                requester
                  .post(`/client/register/all`, signUpFormData)
                  .then((response) => {
                    if ((response.status = 200)) {
                      var formData = signUpFormData;
                      delete formData.password;
                      formData.avatar = null;
                      var payload = {
                        id: response.data,
                        info: formData,
                      };
                      window.localStorage.setItem(
                        "clientInfo",
                        JSON.stringify(payload)
                      );
                      onSuccess();
                      dispatch({
                        type: Types.SIGN_IN,
                        payload: payload,
                      });
                    }
                  })
                  .catch(function (error) {
                    if (error.response) {
                      dispatch({
                        type: Types.NOTIFY,
                        payload: {
                          title: "Notification",
                          body: `invalid data, ${error.response.data.message}`,
                          kind:"error"
                        },
                      });
                    }
                  });
              } else {
                dispatch({
                  type: Types.NOTIFY,
                  payload: {
                    title: "Notification",
                    body: "this mobile number is Already used",
                    kind:"error"
                  },
                });
              }
            })
            .catch((err) => {
              dispatch({
                type: Types.NOTIFY,
                payload: {
                  title: "Error",
                  body: err.message, kind:"error"
                },
              });
            });
        } else {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Notification",
              body: "this email is already used",
              kind:"error"
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error",

          },
        });
      });
  };
};

export const SOCIAL_SIGN_UP = (
  signUpFormData,
  platform,
  onSuccess,
  onFailure
) => {
  return async function (dispatch) {
    await requester
      .get(`/client/register/isemailvalid`, { params: signUpFormData })
      .then((response) => {
        if (response.data === true) {
          requester
            .post("/client/register/social", signUpFormData)
            .then((resp) => {
              var userData = {
                id: resp.data.clientId,
                info: signUpFormData,
              };
              onSuccess();
              dispatch({
                type: Types.SIGN_IN,
                payload: userData,
              });
              window.localStorage.setItem(
                "clientInfo",
                JSON.stringify(userData)
              );
            })
            .catch((err) => {
              dispatch({
                type: Types.NOTIFY,
                payload: {
                  title: "Error",
                  body: err.message, kind:"error"
                },
              });
            });
        } else {
          requester
            .get(
              `/client/hasSocialAuthentication?type=${platform}&token=${signUpFormData.token}`
            )
            .then((response) => {
              var clientId = response.data.clientId;
              var userData = {
                id: clientId,
                info: signUpFormData,
              };
              window.localStorage.setItem(
                "clientInfo",
                JSON.stringify(userData)
              );
              onSuccess();
              dispatch({
                type: Types.SIGN_IN,
                payload: userData,
              });
            })
            .catch((err) => {
              dispatch({
                type: Types.NOTIFY,
                payload: {
                  title: "Error",
                  body: err.message, kind:"error"
                },
              });
            });
        }
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const SIGN_IN = (loginFormData, onSuccess, onFailure) => {
  return async function (dispatch) {
    await requester
      .get(`/client/checkClientIdByEmail`, { params: loginFormData })
      .then(async (response) => {
        await requester
          .get(`/client/info`, { params: { clientId: response.data.clientId } })
          .then((info) => {
            var payload = {
              id: response.data.clientId,
              info: info.data,
            };
            window.localStorage.setItem("clientInfo", JSON.stringify(payload));
            onSuccess();
            dispatch({
              type: Types.SIGN_IN,
              payload: payload,
            });
          })
          .catch((err) => {
            dispatch({
              type: Types.NOTIFY,
              payload: {
                title: "Error",
                body: err.message, kind:"error"
              },
            });
          });
      })
      .catch(function (error) {
        if (error.response) {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Notification",
              body: `invalid data, ${error.response.data.message}`,
              kind:"error"
            },
          });
        }
      });
  };
};

export const LOCAL_SIGN_IN = () => {
  return async function (dispatch) {
    var payload = JSON.parse(window.localStorage.getItem("clientInfo"));
    dispatch({
      type: Types.SIGN_IN,
      payload: payload,
    });
  };
};

export const Get_ORDER_TRACKING = (orderId) => {
  return async function (dispatch) {
    const params = { orderId };
    await requester
      .get(`/order/Track`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.Get_ORDER_TRACKING,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const Get_ALL_ORDERS = (clientId) => {
  return async function (dispatch) {
    const params = { clientId };
    await requester
      .get(`/order/orders`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.Get_ALL_ORDERS,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_ALL_PRODUCTS_IN_CART = (clientId) => {
  return async function (dispatch) {
    const params = { clientId };
    await requester
      .get(`/cart/getAllProduct`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_ALL_PRODUCTS_IN_CART,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const REMOVE_PRODUCT_FROM_CART = (clientId, cartProductId) => {
  return async function (dispatch) {
    await requester
      .patch(`/cart/delete?cartProductId=${cartProductId}`)
      .then((response) => {
        requester
          .get(`/cart/getAllProduct?clientId=${clientId}`)
          .then((response) =>
            dispatch({
              type: Types.GET_ALL_PRODUCTS_IN_CART,
              payload: response.data,
            })
          );
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const UPDATE_QTY = (clientId, cartProductId, quantity) => {
  return async function (dispatch) {
    await requester
      .patch(`/cart/update?cartProductId=${cartProductId}&quantity=${quantity}`)
      .then((response) => {
        requester
          .get(`/cart/getAllProduct?clientId=${clientId}`)
          .then((response) =>
            dispatch({
              type: Types.GET_ALL_PRODUCTS_IN_CART,
              payload: response.data,
            })
          );
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const UPDATE_USER_INFO = (clientId, data) => {
  return async function (dispatch) {
    await requester
      .put(`/client/update?clientId=${clientId}`, data)
      .then((response) => {
        dispatch({
          type: Types.SIGN_IN,
          payload: { id: clientId, info: data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const UPDATE_USER_AVATAR = (clientId, data) => {
  return async function (dispatch) {
    await requester
      .patch(`/client/changeavatar?id=${clientId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        requester.get(`/client/info?clientId=${clientId}`).then((info) => {
          var payload = {
            id: clientId,
            info: info.data,
          };
          window.localStorage.setItem("clientInfo", JSON.stringify(payload));
          dispatch({
            type: Types.SIGN_IN,
            payload: payload,
          });
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const GET_ALL_CARDS = (clientId) => {
  return async function (dispatch) {
    await requester
      .get(`/client/cards/cards?clientId=${clientId}`)
      .then((response) =>
        dispatch({
          type: Types.GET_ALL_CARDS,
          payload: response.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const GET_CLIENT_LOCATIONS = (clientId) => {
  return async function (dispatch) {
    await requester.get(`/location/get?clientId=${clientId}`).then((response) =>
      dispatch({
        type: Types.GET_CLIENT_LOCATIONS,
        payload: response.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};
export const ADD_LOCATION = (data) => {
  return async function (dispatch) {
    await requester.post(`/location/post`, data).then((response) => {
      requester
        .get(`/location/get?clientId=${data.ClientId}`)
        .then((response) => {
          dispatch({
            type: Types.GET_CLIENT_LOCATIONS,
            payload: response.data,
          });

          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Notification",
              body: "location Added Successfully",
              kind:"success"
            },
          });
          window.location.reload();
        })
        .catch((err) => {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Error",
              body: err.message, kind:"error"
            },
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};
export const GET_ORDER_ITEMS = (orderId) => {
  return async function (dispatch) {
    const params = { orderId };
    await requester
      .get(`/order/orderItems`, { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_ORDER_ITEMS,
          payload: { prods: response.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const PLACE_ORDER = (data, onSuccess) => {
  return async function (dispatch) {
    await requester.post(`/order/placeOrder`, data).then((response) => {
      dispatch({
        type: Types.PLACE_ORDER,
      });
      window.localStorage.setItem("orderId", response.data.orderId);
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};
export const ADD_CARD = (data) => {
  return async function (dispatch) {
    await requester.post(`/client/cards/add`, data).then((response) => {
      requester
        .get(`/client/cards/cards?clientId=${data.clientId}`)
        .then((response) => {
          dispatch({
            type: Types.GET_ALL_CARDS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Error",
              body: err.message, kind:"error"
            },
          });
        });
    });
  };
};
export const ADD_PRODUCT_TO_CART = (data) => {
  return async function (dispatch) {
    await requester.post(`/cart/post`, data).then((response) => {
      requester
        .get(`/cart/getAllProduct?clientId=${data.ClientId}`)
        .then((response) =>
          dispatch({
            type: Types.GET_ALL_PRODUCTS_IN_CART,
            payload: response.data,
          })
        )
        .catch((err) => {
          dispatch({
            type: Types.NOTIFY,
            payload: {
              title: "Error",
              body: err.message, kind:"error"
            },
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};
export const UPDATE_CART = (data) => {
  return async function (dispatch) {
    await requester.put(`/client/cards/update`, data).then((response) => {
      dispatch({
        type: Types.UPDATE_CART,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};

export const GET_CAT_PRODS = (catId) => {
  return async function (dispatch) {
    const params = {
      categoryId: catId,
      pageNumber: 0,
    };
    await requester
      .get("/product/category", { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_CAT_PRODS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_SUB_CAT_PRODS = (subCatId) => {
  return async function (dispatch) {
    const params = {
      subcategoryId: subCatId,
      pageNumber: 0,
    };
    await requester
      .get("/product/subcategory", { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_SUB_CAT_PRODS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const GET_GROUP_PRODS = (subCatId, groupId) => {
  return async function (dispatch) {
    const params = {
      subCategoryId: subCatId,
      pageNumber: 0,
      GroupId: groupId,
    };
    await requester
      .get("/product/Group", { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_GROUP_PRODS,
          payload: response.data,
          groupId: groupId,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const GET_MORE_GROUP_PRODS = (
  subCatId,
  groupId,
  pageNumberToRequest,
  alreadyLoadedFromNextPage
) => {
  return async function (dispatch) {
    const params = {
      GroupId: groupId,
      subCategoryId: subCatId,
      pageNumber: pageNumberToRequest,
    };
    await requester
      .get("/product/Group", { params: params })
      .then((response) => {
        var newProds = response.data.splice(alreadyLoadedFromNextPage);
        dispatch({
          type: Types.GET_MORE_GROUP_PRODS,
          payload: newProds,
          groupId: groupId,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};
export const GET_GROUPS = (subCatId) => {
  return async function (dispatch) {
    const params = {
      subcategoryId: subCatId,
    };
    await requester
      .get("/group/GetGroupsBySupCategory", { params: params })
      .then((response) => {
        dispatch({
          type: Types.GET_GROUPS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_MORE_CAT_PRODS = (
  catId,
  pageNumberToRequest2,
  alreadyLoadedFromNextPage2
) => {
  return async function (dispatch) {
    const params = {
      categoryId: catId,
      pageNumber: pageNumberToRequest2,
    };
    await requester
      .get("/product/category", { params: params })
      .then((response) => {
        var newProds = response.data.splice(alreadyLoadedFromNextPage2);
        dispatch({
          type: Types.GET_MORE_CAT_PRODS,
          payload: newProds,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const GET_MORE_SUB_CAT_PRODS = (
  subCatId,
  pageNumberToRequest,
  alreadyLoadedFromNextPage
) => {
  return async function (dispatch) {
    const params = {
      subcategoryId: subCatId,
      pageNumber: pageNumberToRequest,
    };
    await requester
      .get("/product/subcategory", { params: params })
      .then((response) => {
        var newProds = response.data.splice(alreadyLoadedFromNextPage);
        dispatch({
          type: Types.GET_MORE_SUB_CAT_PRODS,
          payload: newProds,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: err.message, kind:"error"
          },
        });
      });
  };
};

export const LOG_OUT = () => {
  return async function (dispatch) {
    dispatch({ type: Types.LOG_OUT });
  };
};

export const GET_COMM_DATA = () => {
  return async function (dispatch) {
    requester.get("/content/social").then((response) => {
      dispatch({
        type: Types.GET_COMM_DATA,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};

export const NEWS_SUBSCRIBE = (email, success, failure) => {
  return async function (dispatch) {
    requester
      .post(`/content/newsletter?email=${email}`)
      .then((response) => {
        success();
      })
      .catch((error) => {
        failure(error.message);
        
        dispatch({
          type: Types.NOTIFY,
          payload: {
            title: "Error",
            body: error.message,
            kind :"error"
          },
        });
      });
  };
};

export const CHAT_USER = (user) => {
  return async function (dispatch) {
    dispatch({
      type: Types.CHAT_USER,
      payload: user,
    });
  };
};

export const HELP = (data, success) => {
  return async function (dispatch) {
    await requester.post(`/content/help`, data).then(() => {
      success();
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};

export const GET_ALL_PRODS = () => {
  return async function (dispatch) {
    await requester.get(`/product/getProducts`).then((response) => {
      dispatch({
        type: Types.GET_ALL_PRODS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.NOTIFY,
        payload: {
          title: "Error",
          body: err.message, kind:"error"
        },
      });
    });
  };
};

export const NOTIFY = (payload) => {
  return async function (dispatch) {
    dispatch({
      type: Types.NOTIFY,
      payload: payload,
    });
  };
};

export const CLEAR_CURRENT_PROD = () => {
  return async function (dispatch) {
    dispatch({
      type: Types.CLEAR_CURRENT_PROD,
    });
  };
};

import $ from 'jquery';
import store from '../store'
export default ({
    state: {
        id: "",
        username: "",
        token: "123",
        is_login: false,
        score: 0,
        ph: 100,
        gameState: 'wait',  //wait,over,ing
        caishen_x: 0,
        present: [],
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.is_login = user.is_login;
        },
        updateToken(state, token) {
            state.token = token;
        },
        logOut(state) {
            state.token = "";
            state.id = "";
            state.username = "";
            state.photo = "";
            state.is_login = false;
        },

    },
    actions: {
        submitScore(context) {
            $.ajax({
                type: "post",
                url: `${store.state.config.url}/user/bestscore`,
                data: JSON.stringify({
                    score: context.state.score
                }),
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success(resp) {
                    alert("ajax成功")
                    console.log(resp)
                },
                error(resp) {
                    alert("ajax出错")
                    console.log(resp)
                }
            });

        },
        login(context, data) {
            $.ajax({
                type: "post",
                url: `${store.state.config.url}/problems/list`,
                data: JSON.stringify({
                    "name": "asd",
                    "pageNum": "1",
                    "pageSize": "5"
                }),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success(resp) {
                    alert("ajax成功")
                    console.log(resp)
                    if (resp.message === "success") {
                        localStorage.setItem("token", resp.token);
                        context.commit("updateToken", resp.token);
                        data.success(resp);
                    } else {
                        data.error(resp);
                    }
                },
                error(resp) {
                    alert("ajax出错")
                    data.error(resp);
                }
            });
        },

        getInfo(context, data) {
            $.ajax({
                url: `${store.state.config.url}/user/account/info/`,
                type: "get",
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
                success(resp) {
                    if (resp.message === "success") {
                        context.commit("updateUser", {
                            ...resp,   //解构
                            is_login: true,
                        })
                        data.success(resp)
                    } else {
                        data.error(resp)
                    }
                },
                error(resp) {
                    data.error(resp)
                }
            })
        },
        logOut(context) {
            localStorage.removeItem("token");
            context.commit("logOut");
        }
    },
    modules: {
    }
})

import { changeType } from '@/api/dashboard'
import { Message } from 'element-ui';

const dashboard = {
    namespaced: true,
    state: {
        typeList: [],  // 型号列表，如果是动态从后端拿的需要更新
        // 初始化写死，后面异步请求更新
        param1: [
            {
                id: 1,
                label: "一级 1",
                children: [
                    {
                        id: 4,
                        label: "二级 1-1",
                        children: [
                            {
                                id: 9,
                                label: "三级 1-1-1",
                            },
                            {
                                id: 10,
                                label: "三级 1-1-2",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                label: "一级 2",
                children: [
                    {
                        id: 5,
                        label: "二级 2-1",
                    },
                    {
                        id: 6,
                        label: "二级 2-2",
                    },
                ],
            },
        ],
        param2: [],
    },
    getters: {
        typeList: (state) => {
            return state.typeList;
        },
        param1: (state) => {
            return state.param1;
        },
        param2: (state) => {
            return state.param2;
        },
    },
    mutations: {
        setTypeList: (state, data) => {
            state.typeList = data;
        },
        setParam1: (state, data) => {
            // 这里要对异步请求的数据做格式化，再赋值给param1
            state.param1 = data;
        },
        setParam2: (state, data) => {
            // 这里要对异步请求的数据做格式化，再赋值给param1
            state.param2 = data;
        },
    },
    actions: {
        changeType({ state, commit }, payload) {
            // const request = {};
            return new Promise((resolve, reject) => {
                changeType(payload.type).then(response => {
                    if (!response) return
                    const { status, data } = response;
                    if (status === 200) {
                        if (data && data.data) {
                            resolve(data.data)
                            commit('setParam1', data.data);
                            commit('setParam2', data.data);
                            if (payload && payload.callback) payload.callback()
                        } else {
                            commit('setParam1', []);
                            commit('setParam2', []);
                            if (payload && payload.callback) payload.callback()
                        }
                    }
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    }
};

export default dashboard
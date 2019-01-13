export default {
    state: {//全局公共仓库，可以在这里面放你想存放的用户信息
        age: 18
    },
    mutations: {//这里是真正对state中的数据进行操作的地方，啦啦啦
        CHANGE_AGE(state, num) {
            state.age = num;
        },
        ADD_AGE(state) {
            state.age++;
        },
        REDUCE_AGE(state) {
            state.age--;
        }

    },
    actions: {//这里的每个方法都会通过commit将其传递到上面的mutations里面去，commit的方法和上面的mutations是一一对应的
        /**
         * @description 改变年龄
         * @param {*} param0 
         * @param {*} num 传来的参数
         */
        _changeAge({ commit }, num) {
            commit('CHANGE_AGE', num)
        },
        /**
         * @description age ++
         * @param {*} param0 
         */
        _addAge({ commit }) {
            commit('ADD_AGE')
        },
        /**
         * @description age--
         * @param {*} param0 
         */
        _reduceAge({ commit }) {
            commit('REDUCE_AGE')
        }
    }
}
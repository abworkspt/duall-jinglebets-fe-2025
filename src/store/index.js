import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            started: false,
            postalurl: 'https://postaisjinglebet.betclic.pt/#/merrychristmas/',
            crteatevideos: 'https://betclic-jinglebets-stage-680619908f3a.herokuapp.com/create',
            cmsapi: 'https://postaisjinglebet.betclic.pt/abcms/wp-json/abw',
            messagee: {
                title: '',
                msg: '',
                rem:'',
                pid: '',
                uniqueid: '',
                shareurl: '',
                code: ''
            }
        }
    },

    getters: {
        AppMessage(state) { return state.messagee; },
        AppPostalURL(state) { return state.postalurl; },
        AppVideosApi(state) { return state.crteatevideos; },
        AppCMSApi(state) { return state.cmsapi; },
        AppStarted(state) { return state.started; }
    },

    actions: {       

        setMessage({ commit }, data) {
            commit('setMessage', data);
        },

        setPID({ commit }, data) {
            commit('setPID', data);
        },

        setShareURL({ commit }, data) {
            commit('setShareURL', data);
        },

        setStarted({ commit }, data) {
            commit('setStarted', data);
        }
    },

    mutations: {       
        setMessage(state, data) {
            state.messagee.title = data.title;
            state.messagee.msg = data.msg;
            state.messagee.rem = data.rem;
            state.messagee.uniqueid = data.uniqueid;
            state.messagee.code = data.code;
        },
        
        setPID(state, data) {
            state.messagee.pid = data.pid;
        },

        setShareURL(state, data) {
            state.messagee.shareurl = data.url;
        }, 

        setStarted(state, data) {
            state.started = data;
        }, 
    }
});

export default store;
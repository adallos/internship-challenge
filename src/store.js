import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appts: [],
        appt: {},
        nextTenAppts: [],
        fetchStart: 20,
        selectedAppt: '',
        modalVisibility: false
    },
    getters: {
        getAppts(state) {
            return state.appts
        },
        getSelectedAppt(state) {
            return state.appt
        },
        getFetchStart(state) {
            return state.fetchStart
        },
        getModalVisibility(state) {
            return state.modalVisibility
        }
    },
    mutations: {
        increaseFetchLimit(state) {
            return state.fetchStart += 20
        },
        setAppts(state, appts) {
            return state.appts = appts
        },
        setSidebarAppt(state, appt) {
            return state.appt = appt
        },
        setModalVisible(state, isVisible) {
            return state.modalVisibility = isVisible
        }
    },
    actions: {
        fetchAppts({ commit }, payload) {
            let d = new Date()
            let currentTime = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + (d.getDate())).slice(-2)} ${('0' + (d.getHours() + 1)).slice(-2)}:${('0' + (d.getMinutes())).slice(-2)}:${('0' + (d.getSeconds() + 1)).slice(-2)}`

            db.collection("appts")
                .where("appointmentStart", ">=", currentTime)
                .orderBy("appointmentStart", "asc")
                .limit(payload)
                .get()
                .then(snapshot => {
                    const nextTenAppts = []
                    snapshot.forEach(document => {
                        let appt = document.data()
                        appt.id = document.id;
                        nextTenAppts.push(appt)
                    })
                    commit('setAppts', nextTenAppts)
                    commit('setSidebarAppt', nextTenAppts[0]);
                })
        },

        fetchNextTen(context) {
            context.commit('increaseFetchLimit')
        },

        commitClickedAppt({ commit }, clickedAppt) {
            commit('setSidebarAppt', clickedAppt)
        },

        toggleModal({ commit }, isVisible) {
            commit('setModalVisible', isVisible)
        }
    },
})
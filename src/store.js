import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appts: [],
        appt: {},
        nextTenAppts: [],
        fetchStart: 15,
        selectedAppt: '',
        modalVisibility: false,
        isForm: false,
        confirmationModal: false,
        actionType: ''
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
        },
        getActionType(state) {
            return state.actionType
        },
        getFieldsToForm(state) {
            return state.isForm
        }
    },
    mutations: {
        increaseFetchLimit(state) {
            return state.fetchStart += 15
        },
        setAppts(state, appts) {
            return state.appts = appts
        },
        setSidebarAppt(state, appt) {
            return state.appt = appt
        },
        setModalVisible(state, isVisible) {
            return state.modalVisibility = isVisible
        },

        setFieldsToForm(state, isForm) {
            return state.isForm = !state.isForm;
        },

        actionType(state, actionType) {
            return state.actionType = actionType;
        }
    },
    actions: {
        fetchByMonth({ commit }, payload) {

        },
        fetchAppts({ commit }, payload) {
            let d = new Date()
            let currentTime = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + (d.getDate())).slice(-2)} ${('0' + (d.getHours() + 1)).slice(-2)}:${('0' + (d.getMinutes())).slice(-2)}:${('0' + (d.getSeconds() + 1)).slice(-2)}`
            console.log(currentTime);

            db.collection("appts")
                .where("appointmentStart", ">", currentTime)
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
        },

        toggleEdition({ commit }, isEditable) {
            commit('setFieldsToForm', isEditable)
        },

        toggleAction({ commit }, actionType) {
            commit('actionType', actionType)
        },

        updateStatus({ commit, state }, newStatus) {
            db.collection("appts").doc(state.appt.id).update({
                status: newStatus
            }).then(() => {
                alert(`Appointment ${newStatus} ${state.appt.status} sucessfully`)
            })
        },
    },
})
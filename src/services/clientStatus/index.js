const SET_PROJECT = 'SET_PROJECT';
const SET_PROJECT_ORIGIN = 'SET_PROJECT_ORIGIN';
const SET_RELEASE = 'SET_RELEASE';
const SET_RELEASE_INDEX = 'SET_RELEASE_INDEX';
const SET_RELEASE_INITIAL_DATE = 'SET_RELEASE_INITIAL_DATE';
const SET_RELEASE_FINAL_DATE = 'SET_RELEASE_FINAL_DATE';
const SET_RETROSPECTIVE_CREATED_STATUS = 'SET_RETROSPECTIVE_CREATED_STATUS';
const SET_REVISION_CREATED_STATUS = 'SET_REVISION_CREATED_STATUS';

const clientStatus = {
  state() {
    return {
      projectId: null,
      isProjectFromGitHub: false,
      releaseId: null,
      releaseIndex: 0,
      releaseInitialDate: null,
      releaseFinalDate: null,
      isRetrospectiveCreated: false,
      isRevisionCreated: false,
    };
  },
  mutations: {
    [SET_PROJECT](state, id) {
      state.projectId = id;
    },

    [SET_PROJECT_ORIGIN](state, status) {
      state.isProjectFromGitHub = status;
    },

    [SET_RELEASE](state, id) {
      state.releaseId = id;
    },

    [SET_RELEASE_INDEX](state, index) {
      state.releaseIndex = index;
    },

    [SET_RELEASE_INITIAL_DATE](state, date) {
      state.releaseInitialDate = date;
    },

    [SET_RELEASE_FINAL_DATE](state, date) {
      state.releaseFinalDate = date;
    },

    [SET_RETROSPECTIVE_CREATED_STATUS](state, status) {
      state.isRetrospectiveCreated = status;
    },

    [SET_REVISION_CREATED_STATUS](state, status) {
      state.isRevisionCreated = status;
    },
  },
  actions: {
    setProject({ commit }, projectId) {
      commit(SET_PROJECT, projectId);
    },

    setProjectOrigin({ commit }, isProjectFromGitHub) {
      commit(SET_PROJECT_ORIGIN, isProjectFromGitHub);
    },

    setRelease({ commit }, releaseId) {
      commit(SET_RELEASE, releaseId);
    },

    setReleaseIndex({ commit }, releaseIndex) {
      commit(SET_RELEASE_INDEX, releaseIndex);
    },

    setReleaseInitialDate({ commit }, releaseInitialDate) {
      commit(SET_RELEASE_INITIAL_DATE, releaseInitialDate);
    },

    setReleaseFinalDate({ commit }, releaseFinalDate) {
      commit(SET_RELEASE_FINAL_DATE, releaseFinalDate);
    },

    setRetrospectiveCreatedStatus({ commit }, isRetrospectiveCreated) {
      commit(SET_RETROSPECTIVE_CREATED_STATUS, isRetrospectiveCreated);
    },

    setRevisionCreatedStatus({ commit }, isRevisionCreated) {
      commit(SET_REVISION_CREATED_STATUS, isRevisionCreated);
    },
  },
};
export default clientStatus;

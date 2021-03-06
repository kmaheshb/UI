import {
    FETCH_ALL_FEATURES_BEGIN,
    FETCH_ALL_FEATURES_SUCCESS,
    FETCH_ALL_FEATURES_ERROR,
    SAVE_FEATURES_BEGIN,
    SAVE_FEATURES_SUCCESS,
    SAVE_FEATURES_ERROR,
    UPDATE_FEATURE,
    RESET_FEATURES
} from '../actions/types'
import { EILSEQ } from 'constants';

const initialState = {
    features : {
        list: [],
        default: [],
        isFetching: false,
        isSaving: false,
    }
}

const updateFeature = (features, update) => {
    var newFeatures = [];
    features.map(f => {
        if (f.name === update.name)
            newFeatures.push(Object.assign( {}, update))
        else
            newFeatures.push(Object.assign( {}, f))
    })
    return newFeatures;
}

const resetFeature = (currentFeatures, defaultFeatures, featureName) => {
    var newFeatures = [];
    currentFeatures.map(f => {
        if (f.name === featureName)
            newFeatures.push(Object.assign( {}, defaultFeatures.find(x=> x.name === featureName)))
        else
            newFeatures.push(Object.assign( {}, f))
    })
    return newFeatures;
}

const FeatureReducer = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_ALL_FEATURES_BEGIN:
            return { ...state, features: { ...state.features, isFetching: true }};
        case FETCH_ALL_FEATURES_SUCCESS:
            return { ...state, features: { ...state.features, list: action.payload, default: action.payload, isFetching: false }};
        case FETCH_ALL_FEATURES_ERROR:
            return { ...state, features: { ...state.features, isFetching: true }};

        case SAVE_FEATURES_BEGIN:
            return { ...state, features: { ...state.features, isSaving: true }};

        case SAVE_FEATURES_SUCCESS:
            return { ...state, features: { ...state.features, list: action.payload, default: action.payload, isSaving: false }}

        case SAVE_FEATURES_ERROR:
            return { ...state, features: { ...state.features, isSaving: false }};

        case UPDATE_FEATURE:
            return { ...state, features: { ...state.features, list: updateFeature(state.features.list, action.payload) }}
        
        case RESET_FEATURES:
            return { ...state, features: { ...state.features, list: resetFeature(state.features.list, state.features.default, action.payload) }}

        default:
            return state;
    }    

    return state;
}

export default FeatureReducer;
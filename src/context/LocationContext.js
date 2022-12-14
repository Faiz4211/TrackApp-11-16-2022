import CreateDataContext from '../context/CreateDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'start_recording':
            return { ...state, recording: true }
        case 'stopr_recording':
            return { ...state, recording: false }
        case 'add_location':
            return { ...state, locations: [...state.location, action.payload] }
        case 'change_name':
            return { ...state, name: action.payload }
        default:
            return state;
    }
};

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' })

};

const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name })
}
const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' })
};
const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }
};

export const { Context, Provider } = CreateDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: '', recording: false, locations: [], currentLocation: null }
);
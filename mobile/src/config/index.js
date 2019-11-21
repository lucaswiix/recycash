import Constants from "expo-constants";

const { manifest } = Constants;

export default config = { 
    API: `http://${manifest.debuggerHost.split(':').shift()}:3333/api/rest`
};
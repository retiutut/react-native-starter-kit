// This is an example model
import initState from '../store/ganglionData';

export default {
  //namespace: 'example',

  /**
   *  Initial state
   */
  state: {
    debugData: initState.debugData,
  },

  /**
   * Reducers
   */
  reducers: {
    replaceDebugData(state, payload) {
      return {
        ...state,
        debugData: payload,
      };
    },
  },

  /**
   * Effects/Actions
   */
  effects: () => ({
    /*
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.example.increment(payload);
    },
    */
    /**
    * Get Recipes
    *
    * @return {Promise}
    */
    getDebugData() {
      //if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise(resolve => FirebaseRef.child('recipes')
        .on('value', (snapshot) => {
          const data = snapshot.val() || [];
          this.replaceDebugData(data);
          return resolve();
        })).catch((err) => { throw err.message; });
    },
  })
};

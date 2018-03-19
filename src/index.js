import FieldObject from "./components/field-object";

const LibraryModule = {
  FieldObject,

  install(Vue) {
    // Register components with vue
    Vue.component("field-object", FieldObject);
  }
};

// Export library
export default LibraryModule;

// Export components
export { FieldObject };

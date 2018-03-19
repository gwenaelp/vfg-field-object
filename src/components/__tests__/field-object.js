import Vue from "vue";
import FieldObject from "../field-object";

describe("field-object.vue", () => {
  const Constructor = Vue.extend(FieldObject);
  const vm = new Constructor({
    propsData: {
      value: {},
      schema: {},
      model: {
        field1: "value1"
      },
      disabled: false,
      options: {}
    }
  }).$mount();
  test("should have 1 table", () => {
    expect(vm.$el.querySelectorAll("table").length).toEqual(1);
  });
  test("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});

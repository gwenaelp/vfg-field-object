import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("FieldObject", module).add("Object with a schema", () => {
  return {
    data: function() {
      return {
        model: {
          object: {
            field: "value1"
          }
        },
        schema: {
          fields: [
            {
              type: "object",
              label: "Object field",
              model: "object",
              schema: {
                fields: [
                  {
                    type: "input",
                    inputType: "number",
                    label: "Label",
                    model: "number"
                  },
                  {
                    type: "input",
                    inputType: "text",
                    label: "Field",
                    model: "field"
                  }
                ]
              }
            }
          ]
        }
      };
    },

    template: `
      <div>
        <h1>Form</h1>
        <vue-form-generator :schema="schema" :model="model"></vue-form-generator>
        <h1>Generated Value</h1>
        <pre>{{model.object}}</pre>
        <h1>Schema</h1>
        <pre>{{schema}}</pre>
      </div>
    `
  };
});

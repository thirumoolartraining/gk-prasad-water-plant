module.exports = {
  rules: {
    "no-raw-dialog": {
      create(ctx) {
        return {
          JSXOpeningElement(node) {
            if (node.name.name === "Dialog") {
              ctx.report({
                node,
                message:
                  "Import and use SmartDialog instead of raw Dialog to guarantee accessibility.",
              });
            }
          },
        };
      },
    },
  },
};
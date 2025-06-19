module.exports = {
  rules: {
    "no-raw-dialog": {
      meta: { type: "problem" },
      create(ctx) {
        return {
          JSXOpeningElement(node) {
            if (node.name.name === "Dialog") {
              ctx.report({
                node,
                message:
                  "Use <SmartDialog> instead of raw <Dialog> for accessibility.",
              });
            }
          },
        };
      },
    },
  },
};
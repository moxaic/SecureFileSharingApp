module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto"
      }
    ],
    "react-native/no-inline-styles": false,
    "react-native/no-unused-imports": false,
    quotes: ["warn", "double"]
  }
};

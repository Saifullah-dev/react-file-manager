export const validateApiCallback = (callback, callbackName, ...args) => {
  try {
    if (typeof callback === "function") {
      callback(...args);
    } else {
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${callbackName}" is required.`
      );
    }
  } catch (error) {
    console.error(error.message);
  }
};

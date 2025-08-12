import prefixSelector from 'postcss-prefix-selector';

export default {
  plugins: [
    prefixSelector({
      prefix: '.file-explorer',
      transform(prefix, selector, prefixedSelector) {
        // Bỏ qua các selector toàn cục
        if (
          selector.startsWith('html') ||
          selector.startsWith('body') ||
          selector.startsWith(':root') ||
          selector.startsWith('*')
        ) {
          return selector;
        }

        // Bỏ qua selector đã có .file-explorer
        if (selector.includes('.file-explorer')) {
          return selector;
        }

        return prefixedSelector;
      },
    }),
  ],
};

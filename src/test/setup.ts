import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock scrollTo for jsdom
Element.prototype.scrollTo = function () {
  // Mock implementation
};

// Mock scrollIntoView for jsdom
Element.prototype.scrollIntoView = function () {
  // Mock implementation
};

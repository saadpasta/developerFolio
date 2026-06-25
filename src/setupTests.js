import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

// jsdom does not implement matchMedia, which Main reads for the dark-mode
// preference. Provide a stable stub for every test. A plain function is used
// (not jest.fn) so it survives Jest's resetMocks reset between tests.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  });
}

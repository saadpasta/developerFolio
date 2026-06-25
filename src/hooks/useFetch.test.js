import React from "react";
import {mount} from "enzyme";
import {act} from "react-dom/test-utils";
import useFetch from "./useFetch";

// Renders the hook's state into the DOM so we can assert on it.
function HookProbe({url, options}) {
  const {data, error, isLoading} = useFetch(url, options);
  return (
    <div>
      <span className="loading">{String(isLoading)}</span>
      <span className="data">{data ? JSON.stringify(data) : ""}</span>
      <span className="error">{error ? "error" : ""}</span>
    </div>
  );
}

// Flushes the microtask queue so fetch().then() chains settle.
const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0));

afterEach(() => {
  jest.restoreAllMocks();
  delete global.fetch;
});

it("returns parsed JSON on a successful response", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({hello: "world"})
  });

  let wrapper;
  await act(async () => {
    wrapper = mount(<HookProbe url="/data.json" />);
  });
  await act(async () => {
    await flushPromises();
  });
  wrapper.update();

  expect(global.fetch).toHaveBeenCalledWith("/data.json", expect.any(Object));
  expect(wrapper.find(".data").text()).toContain("world");
  expect(wrapper.find(".error").text()).toBe("");
  expect(wrapper.find(".loading").text()).toBe("false");
});

it("does not fetch when the url is falsy", async () => {
  global.fetch = jest.fn();

  let wrapper;
  await act(async () => {
    wrapper = mount(<HookProbe url={null} />);
  });

  expect(global.fetch).not.toHaveBeenCalled();
  expect(wrapper.find(".loading").text()).toBe("false");
  expect(wrapper.find(".data").text()).toBe("");
});

it("exposes an error and logs context when the response is not ok", async () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  global.fetch = jest.fn().mockResolvedValue({ok: false, status: 404});

  let wrapper;
  await act(async () => {
    wrapper = mount(
      <HookProbe url="/missing.json" options={{errorMessage: "context"}} />
    );
  });
  await act(async () => {
    await flushPromises();
  });
  wrapper.update();

  expect(wrapper.find(".error").text()).toBe("error");
  expect(wrapper.find(".data").text()).toBe("");
  expect(console.error).toHaveBeenCalled();
});

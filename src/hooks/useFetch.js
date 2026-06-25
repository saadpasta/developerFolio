import {useState, useEffect} from "react";

/**
 * Fetches and parses a JSON resource once on mount.
 *
 * Centralises the fetch / parse / error-handling boilerplate that used to be
 * duplicated across the Projects, Profile and Blogs sections.
 *
 * @param {string|null} url  Resource to request. Pass a falsy value (null/"")
 *                           to skip the request entirely — handy when a section
 *                           is disabled in portfolio.js.
 * @param {object} [options]               Standard fetch() options.
 * @param {string} [options.errorMessage]  Extra context appended to the console
 *                                          error when the request fails.
 * @returns {{data: any, error: Error|Response|null, isLoading: boolean}}
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(url));

  const {errorMessage = "", ...fetchOptions} = options;

  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    // Guards against state updates after the component unmounts.
    let active = true;
    const controller = new AbortController();
    setIsLoading(true);

    fetch(url, {signal: controller.signal, ...fetchOptions})
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(json => {
        if (active) {
          setData(json);
        }
      })
      .catch(err => {
        // The abort fired on unmount is expected — ignore it.
        if (!active || err.name === "AbortError") {
          return;
        }
        console.error(`${err} ${errorMessage}`.trim());
        setError(err);
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {data, error, isLoading};
};

export default useFetch;

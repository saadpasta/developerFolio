import { ProviderError } from "./ProviderError";
export function chain(...providers) {
    return () => {
        let promise = Promise.reject(new ProviderError("No providers in chain"));
        for (const provider of providers) {
            promise = promise.catch((err) => {
                if (err?.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        }
        return promise;
    };
}

const useFetch = () => {
  const fetchHandler = async (endpoint, requestConfiguration) => {
    const httpRequestHandler = await fetch(endpoint, {
      method: requestConfiguration.method ? requestConfiguration.method : "GET",
      body:
        requestConfiguration.body &&
        requestConfiguration.headers["Content-Type"]
          ? JSON.stringify(requestConfiguration.body)
          : requestConfiguration.body &&
            !requestConfiguration.headers["Content-Type"]
          ? requestConfiguration.body
          : null,
      headers: requestConfiguration.headers ? requestConfiguration.headers : {},
    });
    const response = await httpRequestHandler.json();

    return response;
  };
  return fetchHandler;
};

export default useFetch;

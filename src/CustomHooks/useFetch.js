const useFetch = () => {
  const fetchHandler = async (endpoint, requestConfiguration) => {
    const httpRequestHandler = await fetch(endpoint, {
      method: requestConfiguration.method ? requestConfiguration.method : "GET",
      body: requestConfiguration.body
        ? JSON.stringify(requestConfiguration.body)
        : null,
      headers: requestConfiguration.headers ? requestConfiguration.headers : {},
    });
    console.log('no')
    const response = await httpRequestHandler.json();
    
    return response;
  };
  return fetchHandler;
};

export default useFetch;

export const apiconfig = (endpoint, body, service) => {
  // const [status, setstatus] = useState()
  const config = {
    method: service,
    url: 'http://cement.buildemate.com/' + endpoint,
    data: body,
    // headers: { 'User-Agent': 'Console app' }
  };

  return config;
};

export const apiurl = 'http://cement.buildemate.com/';

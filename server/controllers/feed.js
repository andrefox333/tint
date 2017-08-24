import axios from 'axios';

export function all(req, res) {
  const options = {
    method: 'GET',
    url: `https://api.tintup.com/v1/feed/${req.params
      .id}?api_token=a5614c9f87775b3f76ee3cb0c1f2c063af03b3cd`,
  };
  axios(options).then((response) => {
    return res.json(response.data);
  });
}

On the release of version 1.0.0 a test sample api was created on the heroku servers. The api is for demonstration only and no warranty is provided on it. Do not use in production.

You can access it by sending a get for https://patoserver.herokuapp.com/find:

```typescript

    import axios from 'axios';

    /* ... */

    const path = 'https://www.makeareadme.com/';
    const type = 'css';

    axios.get(`https://patoserver.herokuapp.com/find?path=${path}&type=${type}`);

```

You can check api status sending a get for https://patoserver.herokuapp.com/status:

```typescript

    import axios from 'axios';

   /* ... */

    axios.get(`https://patoserver.herokuapp.com/status`);

```

Also, if the api status is offline, you can check [a basic patofinder javascript server implementation](https://github.com/notelho/patoserver).

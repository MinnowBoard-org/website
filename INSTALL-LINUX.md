# Developer Installation: Linux

## Downloading and running the website without nginx

```bash
git clone git@github.com/minnowboard-org/website minnow
cd minnow
bower install
npm install
```

NOTE: If you don't have bower (or node) installed, you can run the following:
```bash
sudo apt install build-essential git npm nodejs nodejs-legacy
sudo npm install -g bower
```

That should install everything you need to run the site from a webserver.

To launch the service, use npm start:

```bash
npm start
```

The above will launch the express.js application, which will open port
8080 for inbound HTTP connections. You can connect to this locally via:

```bash
xdg-open http://localhost:8080
```

# Configuring to run behind nginx

If you are using nginx as a proxy (and https) server, you need to add a
location mapping from the root host directory to the application:

```nginx
# At the top level
  upstream minnow {
    server 127.0.0.1:8080;
  }

# Within a server {} block
  location / {
    proxy_pass http://minnow;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
```

Assuming you have nginx configured to serve https, you can then connect to
the application using https through the nginx proxy:

```bash
xdg-open https://localhost
```

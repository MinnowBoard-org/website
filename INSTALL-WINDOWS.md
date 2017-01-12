# Developer Installation: Windows

## NodeJS, NPM, Bower

We will use [chocolatey](https://chocolatey.org/install) as a package manager
for installing and managing the required components to host a local instance
of the website.

Open an CMD.EXE shell with Administrator privileges (go to the Windows
`Run box`, type `cmd` and instead of pressing ENTER, press the key combination
Ctrl+Shift+Enter.)

Once the command session is opened, run the following:

```shell
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Once chocolatey is installed, install the necessary packages in the same shell
session:

```shell
choco install nodejs npm git
```

After the above installs, you will need to exit the current cmd.exe shell and
launch a new Administrator cmd terminal for the packages to be found in the
path.

Install `bower` for the Polymer package management within the website:

```shell
npm install -g bower
```

**NOTE:** If you are behind a proxy, you will need to configure `npm` to work
behind the proxy before you attempt to install bower. See
`A note about proxies...` at the end of this document for hints on doing that.


### GitHub Desktop Client

Follow the instructions on [desktop.github.com](https://desktop.github.com/) to
install the GitHub Desktop client.

#### Clone git@github.com:MinnowBoard-org/website.git

Run the Desktop client and enter your GitHub credentials.

Clone the git@github.com:MinnowBoard-org/website.git.

You can use the default directories, which will result in the project being
cloned into `%HOMEPATH%\Documents\GitHub\website`.

#### Update the website dependencies

After you have cloned the project, open a cmd terminal and update the website's bower components.

If prompted about being unable to find suitable versions for components, pick
the highest number option (typically will say something like
"... and is required by minnow".)

```shell
cd %homepath%\documents\github\website
bower install
```

Then install the Node modules:

```shell
cd %homepath%\documents\github\website
npm install
```

Any time you perform a pull from the upstream project you should re-run
the `bower install` and `npm install` steps to ensure your local environment
is serving all of the required files.

### Run the website nodejs app

From the command shell:

```shell
cd %homepath%\documents\github\website
node app.js
```
**NOTE**: There used to be a `/` provided on the command-line. With the
addition of vulcanization support, this has changed. Do not provide a command
line path or the site will not be able to find the files to serve.

You can now connect to your local instance of the website by opening
[http://localhost:8080/](http://localhost:8080/)

## A note about proxies...

If you happen to work behind a proxy of some kind, and have never installed
git, bower, or ssh to use that proxy, you can use the following as a guideline.

From an Administrator cmd terminal, configure `npm` and `git` to run behind
the proxy.

In all of the lines below, replace `http://PROXY-ADDR:PROXY-PORT/` with your
proxy address:

```shell
npm config set proxy http://PROXY-ADDR:PROXY-PORT/
npm config set https-proxy http://PROXY-ADDR:PROXY-PORT/
npm config set registry http://registry.npmjs.org/
git config --global http.proxy http://PROXY-ADDR:PROXY-PORT/
```

Next, configure `bower` to run behind the proxy. Create a new file in `notepad`
and paste the following:

```text
{
  "proxy": "http://PROXY-ADDR:PROXY-PORT/",
  "https-proxy": "http://PROXY-ADDR:PROXY-PORT/"
}
```

Save the file in your home directory (`%homepath%`) with the name `.bowerrc`.
Make sure Notepad does not add a `.txt` extension. You can verify the file
was saved correctly by opening a command terminal and running:

```shell
type %homepath%\.bowerrc
```

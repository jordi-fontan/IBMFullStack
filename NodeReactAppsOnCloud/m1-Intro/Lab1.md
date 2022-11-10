## Hands-on Lab - First Server with ServerSide Java Script

- Objective for Exercise:

   - Use the terminal to git clone and get Node.JS server code

   - Create a web server using Server side Java script

    - Run the server

   - Access the server from the client and get a response from server


Hands-on Lab - First Server with ServerSide Java Script (20 min)
Objective for Exercise:

    Use the terminal to git clone and get Node.JS server code
    Create a web server using Server side Java script
    Run the server
    Access the server from the client and get a response from server

-------------------------

### Step 1: Verify Environment and Command-line tools

    Open a terminal window by using the menu in the editor: Terminal > New Terminal.

1. Verify that node CLI is installed.

     node --version

    You should see output similar to this, though the versions may be different:

    v12.18.3

2. Change to your project folder.

      cd /home/project

3.   Clone the git repository that contains the artifacts needed for this lab, if it doesn't already exist.

    git clone https://github.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React.git

4.    Change to the directory for this lab.

    cd lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/http_server

5.    List the contents of this directory to see the artifacts for this lab.

    ls

5.    Check the content of index.js. This is the server side script we will run in the next section.

    cat index.js

    You should see output similar to this.

    const http = require('http');

    const requestListener = function (req, res) {
      res.writeHead(200);
      res.end('Hello, World!');
    }

    const port = 8080;
    const server = http.createServer(requestListener);
    console.log('server listening on port: ' + port);

    Alternatively, you can also view the content of index.js through the file explorer menu. It would appear like this.


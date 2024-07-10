const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    if (!file) {
      console.log('Please provide a file to read.');
    } else {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
        } else {
          console.log(data);
        }
      });
    }
    break;
  
  case 'delete':
    if (!file) {
      console.log('Please provide a file to delete.');
    } else {
      fs.unlink(file, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log(`File '${file}' deleted`);
        }
      });
    }
    break;
  
  case 'create':
    if (!file) {
      console.log('Please provide a file to create.');
    } else {
      fs.writeFile(file, '', (err) => {
        if (err) {
          console.error(`Error creating file: ${err}`);
        } else {
          console.log(`File '${file}' created`);
        }
      });
    }
    break;
  
  case 'append':
    if (!file || !content) {
      console.log('Please provide both content to append and the file.');
    } else {
      fs.appendFile(file, content + '\n', (err) => {
        if (err) {
          console.error(`Error appending to file: ${err}`);
        } else {
          console.log(`Content appended to the file '${file}'`);
        }
      });
    }
    break;
  
  case 'rename':
    const newFile = process.argv[4];
    if (!file || !newFile) {
      console.log('Please provide the current and new file names.');
    } else {
      fs.rename(file, newFile, (err) => {
        if (err) {
          console.error(`Error renaming file: ${err}`);
        } else {
          console.log(`File '${file}' renamed to '${newFile}'`);
        }
      });
    }
    break;
  
  case 'list':
    const directory = file || '.';
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error(`Error listing directory: ${err}`);
      } else {
        files.forEach(file => {
          console.log(file);
        });
      }
    });
    break;
  
  default:
    console.log(`Invalid operation '${operation}'`);
}


// Way to run these files
// To read a file: node index.js read test.txt
// To append content: node index.js append test.txt "New content"
// To delete a file: node index.js delete test.txt
// To create a file: node index.js create test.txt
// To rename a file: node index.js rename test.txt new.txt
// To list directory contents: node index.js list .
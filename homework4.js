#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const yargs = require('yargs');

function readTheFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(data);
    inquirer
      .prompt([
        {
          name: 'searchStr',
          type: 'input',
          message: 'search in file:'
        }
      ])
      .then(answer => {
        search(answer.searchStr, data);
      });
  });
}

function search(searchStr, data) {
  let search = searchStr + '.*';
  let find = data.match(new RegExp(search, 'g'));
  console.log(find);
  if (find.length > 0) {
    console.log(find.join('\n'));
  }
}

function showFiles(dirPath) {
  const isFile = fileName => {
    return fs.lstatSync(path.join(dirPath, fileName)).isFile();
  };
  const isDir = fileName => {
    return fs.lstatSync(path.join(dirPath, fileName)).isDirectory();
  };

  const list = fs.readdirSync(dirPath).filter(isFile);
  const listDir = fs.readdirSync(dirPath).filter(isDir);
  inquirer
    .prompt([
      {
        name: 'fileName',
        type: 'list',
        message: 'Choose file or directory :',
        choices: list.concat(listDir)
      }
    ])
    .then(answer => {
      const filePath = path.join(dirPath, answer.fileName);
      if (isFile(answer.fileName)) {
        console.log(answer.fileName);
        console.log(filePath);
        readTheFile(filePath);
      } else {
        showFiles(filePath);
      }
    });
}

inquirer
  .prompt([
    {
      name: 'filePath',
      type: 'input',
      message: 'Choose path:'
    }
  ])
  .then(answer => {
    const dirPath = path.join(__dirname, answer.filePath);
    showFiles(dirPath);
  });

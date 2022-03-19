const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
  const {q, name, page = '1', apikey} = req.query;

  res.json({
    msg: 'Get Api - Controller',
    q, name, page, apikey
  });
};

const usersPost = (req, res = response) => {
  const {name, age} = req.body; 

  res.json({
    msg: 'Post Api - Controller',
    name, age
  });
};

const usersPut = (req, res = response) => {
  const {id} = req.params;

  res.json({
    msg: 'Put Api - Controller'
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'Delete Api - Controller'
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: 'Patch Api - Controller'
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch
}
const { User } = require("../models");
const bcrypt = require("bcryptjs");

//async function loginPost(req, res) {}

//async function logout(req, res) {}

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("registro");
}

async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const passwordHasheada = await bcrypt.hash(password, 10);
  await User.create({ firstname, lastname, email, password: passwordHasheada });
  return res.redirect("/");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  //login,
  //loginPost,
  //logout,
};

const { User } = require("../models");

async function login(req, res) {
  return res.render("login");
}

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

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  await User.create({ firstname, lastname, email, password });
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
  login,
  //loginPost,
  //logout,
};

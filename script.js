const API_URL = "https://69327c9ae5a9e342d26f600b.mockapi.io/user";

const loader = document.getElementById("loader");
const dataBody = document.getElementById("dataBody");

let editId = null; // store ID for editing

// SHOW LOADER
function showLoader() {
  loader.style.display = "block";
}

// HIDE LOADER
function hideLoader() {
  loader.style.display = "none";
}

// GET ALL DATA
async function getData() {
  showLoader();
  const res = await fetch(API_URL);
  const data = await res.json();
  hideLoader();
  renderData(data);
}

// SHOW DATA
function renderData(items) {
  dataBody.innerHTML = "";
  items.forEach(item => {
    dataBody.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>
          <button class="edit-btn" onclick="openModal(${item.id}, '${item.name}')">Edit</button>
          <button class="del-btn" onclick="deleteItem(${item.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// CREATE ITEM
async function createItem() {
  const newName = document.getElementById("name").value;

  if (!newName.trim()) {
    alert("Please enter a name");
    return;
  }

  showLoader();
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName })
  });

  hideLoader();
  document.getElementById("name").value = "";
  getData();
}

// OPEN MODAL
function openModal(id, name) {
  editId = id;
  document.getElementById("editName").value = name;
  document.getElementById("editModal").style.display = "flex";
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// SAVE EDIT (PUT)
async function saveEdit() {
  const newName = document.getElementById("editName").value;

  showLoader();
  await fetch(`${API_URL}/${editId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName })
  });

  hideLoader();
  closeModal();
  getData();
}

// DELETE ITEM
async function deleteItem(id) {
  if (!confirm("Are you sure?")) return;

  showLoader();
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  hideLoader();
  getData();
}

getData();

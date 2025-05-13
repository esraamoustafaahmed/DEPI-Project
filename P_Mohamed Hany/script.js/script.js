document.getElementById("searchInput").addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();
  let apartments = document.querySelectorAll(".apart.divv");

  apartments.forEach((apartment) => {
    let textContent = apartment.textContent.toLowerCase();
    if (textContent.includes(searchTerm)) {
      apartment.style.display = "flex";
    } else {
      apartment.style.display = "none";
    }
  });
});

let people = [];

function saveData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const field = document.getElementById("field").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const social = document.getElementById("social").value;

  if (name && phone) {
    people.push({ name, phone, field, whatsapp, social });
    console.log("تم حفظ البيانات بنجاح!");
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("field").value = "";
    document.getElementById("whatsapp").value = "";
    document.getElementById("social").value = "";
  } else {
    alert("يرجى إدخال الاسم ورقم الهاتف.");
  }
}

function searchData() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchValue) ||
      person.phone.includes(searchValue) ||
      person.field.toLowerCase().includes(searchValue) ||
      person.whatsapp.includes(searchValue) ||
      person.social.toLowerCase().includes(searchValue)
  );

  if (filteredPeople.length > 0) {
    filteredPeople.forEach((person) => {
      const div = document.createElement("div");
      div.textContent = `${person.name} - ${person.phone} - ${person.field} - ${person.whatsapp} - ${person.social}`;
      resultsContainer.appendChild(div);
    });
  } else {
    resultsContainer.innerHTML = "<p>لم يتم العثور على نتائج.</p>";
  }
}

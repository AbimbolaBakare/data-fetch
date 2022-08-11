const no = document.querySelectorAll(".no");
const gender = document.querySelectorAll(".gender");
const age = document.querySelectorAll(".age");
const row = document.querySelectorAll(".row");
const label = document.querySelector("label");
let page = 1;

const toggleLoader = (displayType: string) => {
  (document.getElementsByClassName(
    "loader"
  )[0] as HTMLDivElement).style.display = displayType;
};

const disableButton = () => {
  (document.querySelector(".prev-button") as HTMLButtonElement).disabled =
    page === 1 ? true : false;
};

const fetchData = () => {
  disableButton();
  toggleLoader("block");
  fetch(
    `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      toggleLoader("none");
      const results = data.results[0];

      const pageResult = Object.values(results)[0];

      row.forEach((_, key) => {
        row[key].setAttribute("id", `${pageResult[key].id}`);
        row[key].setAttribute("data-entryid", `${pageResult[key].id}`);
        no[key].textContent = ` ${pageResult[key].row}`;
        gender[key].textContent = ` ${pageResult[key].gender}`;
        age[key].textContent = ` ${pageResult[key].age}`;
        label.textContent = `Showing Page ${page}`;
      });
    })
    .catch(() => {
      toggleLoader("none");
      console.log("An error occurred");
    });
};

const navigate = (type: string) => {
  if (type === "prev" && page !== 1) {
    page--;
    fetchData();
  } else if (type === "next") {
    page++;
    fetchData();
  }
};

const startApp = async () => {
  fetchData();
  const previousButton = document.querySelector(".prev-button");
  previousButton.addEventListener("click", () => navigate("prev"));

  const nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", () => navigate("next"));
};
document.addEventListener("DOMContentLoaded", startApp);

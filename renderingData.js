// challenge1: rendering data
const getData = async () => {
  try {
    const res = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    if (res.status !== 200) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

const renderData = async () => {
  const data = await getData();

  let html = "";
  let main = document.querySelector("main");
  if (typeof data === "string") {
    main.innerHTML = `<p>${data}</p>`;
  }

  data.data.map((el) => {
    //  render the dom
    html += `<h2>name : ${el.employee_name}</h2>
         <p>age: ${el.employee_age}</p>`;
  });
  main.innerHTML = html;
};

renderData();

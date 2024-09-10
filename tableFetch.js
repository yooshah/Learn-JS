fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let items;
    data.map((val) => {
      items += `<tr>
    <td>${val.title}</td>
                  <td>${val.price}</td>
                  <td>${val.description}</td>
                  <td>${val.title}</td>
                         <td><img src='${val.image}'></td>
    </tr> `;
    });
    document.getElementById("table-body").innerHTML = items;
  })
  .catch((err) => console.log(err));

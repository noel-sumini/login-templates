function submitForm() {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userid,
        password: password,
      }),
    })
      .then((result) => result.json())
      .then((data) => alert(data.msg));
  }
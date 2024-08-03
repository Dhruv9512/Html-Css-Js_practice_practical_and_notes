function showConfirmBox() {
  let userResponse = confirm("Do you want to proceed?");

  if (userResponse) {
    console.log("User clicked OK.");
  } else {
    console.log("User clicked Cancel.");
  }
}

showConfirmBox();

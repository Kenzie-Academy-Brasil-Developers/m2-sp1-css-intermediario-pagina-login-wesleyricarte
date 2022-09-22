const buttonsControllersModal = document.querySelectorAll(
  "[data-modal-control]"
);

// console.log(buttonsControllersModal);

for (let i = 0; i < buttonsControllersModal.length; i++) {
  buttonsControllersModal[i].addEventListener("click", function () {
    // Event.perventDefault();
    let valueDataModalControl =
      buttonsControllersModal[i].getAttribute("data-modal-control");

    console.log(valueDataModalControl);
    document
      .getElementById(valueDataModalControl)
      .classList.toggle("show-modal");
  });
}

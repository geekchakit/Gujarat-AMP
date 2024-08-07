function SendContactForm(FormType) {
  if (FormType == "HeaderForm") {
    if ($("#contactNo").val() == "") {
      // alert('if');
      if ($("#contactNo").val() != "") {
        $("#contactNoval").prop("hidden", true);
      } else {
        $("#contactNoval").prop("hidden", false);
      }
    } else {
      //  alert('else');
      $("#contactNoval").prop("hidden", true);
      $("#SentFromForm").prop("disabled", true);
      var data = {
        name: $("#fullname").val(),
        mobileNumber: $("#contactNo").val(),
        message: $("#message").val(),
        website: "Gujarat",
      };

      fetch("https://darshanrathazurebackend.azurewebsites.net/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        console.log(response);
        swal("Good job!", "Your Response Has been submited!", "success");
        $("#fullname").val("");
        $("#contactNo").val("");
        $("#message").val("");
        $("#SentFromForm").prop("disabled", false);
        localStorage.setItem("pkgname", null);
        return true;
      });
    }
  } else if (FormType == "ContactDiv") {
    if ($("#contactNoC").val() == "") {
      // alert('if');
      if ($("#contactNoC").val() != "") {
        $("#contactNoCval").prop("hidden", true);
      } else {
        $("#contactNoCval").prop("hidden", false);
      }
    } else {
      $("#contactNoCval").prop("hidden", true);
      $("#SentResponse").prop("disabled", true);
      $("#SentFromContact").prop("disabled", true);
      var data = {
        name: $("#fullnameC").val(),
        mobileNumber: $("#contactNoC").val(),
        message: $("#messageC").val(),
        website: "Gujarat",
      };

      fetch("https://darshanrathazurebackend.azurewebsites.net/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        console.log(response);
        swal("Good job!", "Your Response Has been submited!", "success");
        $("#fullnameC").val("");
        $("#contactNoC").val("");
        $("#messageC").val("");
        $("#SentFromContact").prop("disabled", false);
        $("#SentResponse").prop("disabled", false);
        localStorage.setItem("pkgname", null);
        return true;
      });
    }
  } else {
    // alert('else');
    if (FormType == "BModal") {
      // alert('BModal');
      if ($("#contactNoBModal").val() == "") {
        // alert('if');
        $("#contactNoBModalval").prop("hidden", false);
      } else {
        // alert('else');
        $("#contactNoBModalval").prop("hidden", true);
        $("#SentResponse").prop("disabled", true);
        $("#SentFromContact").prop("disabled", true);
        var data = {
          name: $("#fullnameBModal").val(),
          mobileNumber: $("#contactNoBModal").val(),
          message: $("#messageBModal").val(),
          website: "Gujarat",
        };
        //  console.log(templateParams);
        fetch("https://darshanrathazurebackend.azurewebsites.net/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((response) => {
          console.log(response);
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#fullnameBModal").val("");
          $("#contactNoBModal").val("");
          $("#messageBModal").val("");
          $("#SentFromContact").prop("disabled", false);
          $('#SentResponse').prop("disabled", false);
          $("#SentResponse").prop("disabled", false);
          localStorage.setItem("pkgname", null);
          return true;
        });
      }
    }
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

if ($(window).width() < 739) {
  $(".mobileCall").prop("hidden", false);
  $(".pcCall").prop("hidden", true);
} else {
  $(".mobileCall").prop("hidden", true);
  $(".pcCall").prop("hidden", false);
}

function GoToDiv(ID) {
  if ($(window).width() > 739) {
    $("html, body").animate(
      {
        scrollTop: $("#" + ID).offset().top,
      },
      1000
    );
  } else {
    if (ID == "GujaratPackageDiv") {
      var height = $("body").height();
      $("html, body").animate(
        {
          scrollTop: height / 1.5,
        },
        1000
      );
    } else if (ID == "GujaratBestAttraction") {
      var height = $("body").height();
      $("html, body").animate(
        {
          scrollTop: height / 0.4,
        },
        1000
      );
    } else {
      //Contact Scroll
      var height = $("body").height();
      $("html, body").animate(
        {
          scrollTop: height / 0.29,
        },
        1000
      );
    }
  }
  $("body").removeClass("offcanvas");
  $("body").removeClass("overflow");
  $(".js-gtco-nav-toggle").removeClass("active");
}

function SendEnquery() {
  $("#myModal").modal("show");
}

function PackageEnquiry(PackageName) {
  $("#PackageModal").modal("show");
  localStorage.setItem("pkgname", PackageName);
}

$("#PackageEnquirySent").click(function () {
  if ($("#contactNoPKG").val() == "") {
    // alert('if')
    $("#contactNoPKGval").prop("hidden", false);
  } else {
    //  alert('else');
    $("#contactNoPKGval").prop("hidden", true);
    $("#PackageEnquirySent").prop("disabled", true);
    // alert(localStorage.getItem('pkgname'));
    var data = {
      name: $("#fullnamePKG").val(),
      mobileNumber: $("#contactNoPKG").val(),
      package: localStorage.getItem("pkgname"),
      message: $("#messagePKG").val(),
      website: "Gujarat",
    };

    fetch("https://darshanrathazurebackend.azurewebsites.net/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        console.log(response);
        swal("Good job!", "Your Response Has been submited!", "success");
        $("#fullnamePKG").val("");
        $("#contactNoPKG").val("");
        $("#messagePKG").val("");
        // $("#MineBntForm").prop("disabled", false);
        localStorage.setItem("pkgname",null);
        return true;
      });
  }
});


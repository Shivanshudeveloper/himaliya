$( document ).ready(function() {
    $("#section1Btn").click(() => {
        var db = firebase.firestore();
        var fullname = $("#fullname").val(),
            email = $("#email").val(),
            gender = $("#gender").val(),
            dob = $("#dob").val(),
            percentage12 = $("#percentage12").val(),
            percentage10 = $("#percentage10").val(),
            state = $("#sts").val(),
            city = $("#state").val(),
            presentqualification = $("#presentqualification").val(),
            program = $("#program").val();

        if ( fullname === '' || email === '' || gender === '' || dob === '' || percentage12 === '' || percentage10 === '' || state === '' || city === '' || presentqualification === '' ) {
            swal({
                title: "Empty Fields!",
                text: "You have left some fields empty!",
                icon: "info",
            });
        } else {
            if ( program === "Under Graduate" ) {
                $("#section2").show();
                $("#section1").hide();
                $("#submitUg").click(() => {
                    var enqueryug = $("#enqueryug").val();
                    db.collection("students").add({
                        fullname,
                        email,
                        gender,
                        dob,
                        percentage12,
                        percentage10,
                        state,
                        city,
                        presentqualification,
                        program,
                        enqueryug,
                        phoneno: ""
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        window.location = "phone_verification.html?id="+docRef.id;
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                });
            } else {
                $("#section3").show();
                $("#section1").hide();
                $("#submitPg").click(() => {
                    var institute = $("#institute").val(),
                    degree = $("#degree").val(),
                    specilization = $("#specilization").val(),
                    cgpaobtained = $("#cgpaobtained").val(),
                    enquerypg = $("#enquerypg").val();

                    db.collection("students").add({
                        fullname,
                        email,
                        gender,
                        dob,
                        percentage12,
                        percentage10,
                        state,
                        city,
                        presentqualification,
                        program,
                        enquerypg,
                        institute,
                        degree,
                        specilization,
                        cgpaobtained,
                        phoneno: ""
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        window.location = "phone_verification.html?id="+docRef.id;
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
                });
            }
        }
    });
});
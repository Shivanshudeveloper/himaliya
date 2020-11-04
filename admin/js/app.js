$( document ).ready(function() {
    var db = firebase.firestore();
    var i = 1;
    db.collection("students").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                $("#tablebody").append(`
                    <tr>
                        <th scope="row">${i}</th>
                        <td>
                            <a  href="info.html?id=${doc.id}">
                                ${doc.data().fullname}
                            </a>
                        </td>
                        <td>${doc.data().email}</td>
                        <td>${doc.data().phoneno}</td>
                        <td>${doc.data().program}</td>
                        <td>${doc.data().state}</td>
                    </tr>
                `);
                i = i + 1;
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
});
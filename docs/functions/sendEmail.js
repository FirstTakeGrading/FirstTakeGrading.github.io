function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "noah2list@gmail.com",
        Password: "fireb",
        To: 'noah@noahlist.com',
        From: "First Take",
        Subject: "Welcome to First Take!",
        Body: "Hello, welcome to First Take Grading. We will reach out to you soon!",
    }).then(function (message) {
        alert("Successfully added to mailing list!")
        });
}
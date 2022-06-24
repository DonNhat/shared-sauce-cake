export const transValidation = {
    email_incorrect: "Invalid email",
    gender_incorrect: "Invalid gender",
    password_incorrect: "Password must have at least 6 characters",
    password_confirmation_incorrect: "The confirm password is not correct",
};

export const transMailBookingNew = {
    subject: "Email notification of booking progress at Photo Session",
    template: (data) => {
        return `<h3>Thank you for booking an appointment at Photo Session's system </h3>
        <h4>Information for booked appointment:</h4>
        <div>Photographer's name: ${data.doctor} </div>
        <div>Time: ${data.time}</div>
        <div>Date: ${data.date}</div>
        <div>Status: <b> Pending - A new appointment is waiting for confirmation</b></div>
        <h4>Photo Session system will automatically send email notification when confirmed appointment is complete. Thank you !</h4>`;
    },
};

export const transMailBookingFailed = {
    subject: "Email notification of booking progress at Photo Session",
    template: (data) => {
        return `<h3>Thank you for booking an appointment at Photo Session's system  </h3>
        <h4>Information for booked appointment:</h4>
        <div>Photographer's name: ${data.doctor} </div>
        <div>Time: ${data.time}</div>
        <div>Date: ${data.date}</div>
        <div>Status: <b>Cancel - ${data.reason}</b></div>
        <h4>If you have any issue, please contact the support operator<b> to this email </b>. Thank you !</h4>`;
    },
};

export const transMailBookingSuccess = {
    subject: "Email notification of booking progress at Photo Session",
    template: (data) => {
        return `<h3>Thank you for booking an appointment at Photo Session's system </h3>
        <h4>Information for booked appointment:</h4>
        <div>Photographer's name: ${data.doctor} </div>
        <div>Time: ${data.time}</div>
        <div>Date: ${data.date}</div>
        <div>Status: <b>Succeed</b></div>
        <h4>Thank you very much for using our service!</h4>`;
    },
};

export const transMailRemedy= {
    subject: "Email sending the invoice from the photographer",
    template: (data) => {
        return `<h3>Thank you for your trust in booking a session in Photo Session's system.</h3>
        After you have meet the photographer <b> ${data.doctor} </b>, you can review the billing details from this email attachment. </h4>
        <div>The password for extracting attachments has the following form: <i>Full name without accent - 3 digits first phone number - last 2 digits of your birth year</div>
        <br>
        <div>For example: Full name: Donwell, with the registered phone number: 0123456789 and born: 1990, the extracted password is: <b> donwell-012-90 </b> </div>
        <br>
        <div>In the event of neither receiving attachments nor decompressing, please contact the support operator<b> via the email</b></div>
        <h4>Thank you !</h4>`;
    },
};

function showSidebar() {
    const sidebar = document.querySelector(".menu");
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector(".menu");
    sidebar.style.display = 'none';
}


function sendInfo() {
    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;
  
    // Define the email address, subject, and body
    const emailAddress = "programmingworld488@gmail.com";
    const subject = "Information from Website";
    const body = `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`;
  
    // Open Gmail with the pre-filled email
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  }



  

//   Downlaod Resume 

  

const downloadResumeButton = document.getElementById('download-resume');

downloadResumeButton.addEventListener('click', () => {

  // Add the name of your image resume 
  const resumeFile = 'resume.pdf'; // Update with your image file name
  const pdfFile = 'resume.pdf'; // Update with your PDF file name
  const fileType = resumeFile.split('.').pop(); // Get the file extension

  if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
    // Image file
    const url = 'img/' + resumeFile; // Update with the path to your image file

    const a = document.createElement('a');
    a.href = url;
    a.download = resumeFile;
    a.click();
  } else if (fileType === 'pdf') {
    // PDF file
    const pdfUrl = 'img/' + pdfFile; // Update with the path to your PDF file

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = pdfFile;
    a.click();
  } else {
    console.error('Unsupported file type');
  }
});



// Open link in new Window 

document.querySelectorAll('[data-new-window]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
  });
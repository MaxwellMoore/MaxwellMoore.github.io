function showProjectDetails(projectNumber) {
  // Get the project details to show
  const projectDetailsToShow = document.getElementById(
    `project-details-${projectNumber}`
  );

  // Check if it's already open
  const isOpen = projectDetailsToShow.style.display === "flex";

  // Hide all project details divs
  const allProjectDetails = document.querySelectorAll(".project-details");
  allProjectDetails.forEach((detail) => {
    detail.style.display = "none";
  });

  // Show the selected project details if it wasn't open before
  if (!isOpen) {
    projectDetailsToShow.style.display = "flex";
  }
}

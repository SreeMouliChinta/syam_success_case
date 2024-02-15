let topNav = document.querySelector(".top-tools");
let sideNavBtn = document.querySelector(".schedule");
let sideNavContentBox = document.querySelector(".side-tool-content");
let sideNavContent = document.querySelector(".side-tool-content .content");
let sideNavCloseBtn = document.querySelector(".side-tool-content .close-btn");

sideNavBtn.addEventListener("click", function () {
  if (sideNavContent.offsetWidth == 0) {
    topNav.style.width = "70vw";
    sideNavContentBox.classList.add("opened");
    sideNavContent.style.display = "block";
    editScheduleContent.style.display = "flex";
    editScheduleBtn.classList.add("task-selected");
    viewRecentRunsContent.style.display = "none";
    viewRecentRunsBtn.classList.remove("task-selected");
  } else {
    topNav.style.width = "95vw";
    sideNavContentBox.classList.remove("opened");
    sideNavContent.style.display = "none";
    editScheduleContent.style.display = "flex";
    editScheduleBtn.classList.add("task-selected");
    viewRecentRunsContent.style.display = "none";
    viewRecentRunsBtn.classList.remove("task-selected");
  }
});

sideNavCloseBtn.addEventListener("click", function () {
  topNav.style.width = "95vw";
  sideNavContentBox.classList.remove("opened");
  sideNavContent.style.display = "none";
  editScheduleContent.style.display = "flex";
  editScheduleBtn.classList.add("task-selected");
  viewRecentRunsContent.style.display = "none";
  viewRecentRunsBtn.classList.remove("task-selected");
});

let editScheduleBtn = document.querySelector(".edit-schedule-btn");
let editScheduleContent = document.querySelector(".edit-schedule-content");
let viewRecentRunsBtn = document.querySelector(".view-recent-runs-btn");
let viewRecentRunsContent = document.querySelector(".view-recent-runs-content");

editScheduleBtn.addEventListener("click", function () {
  editScheduleContent.style.display = "flex";
  editScheduleBtn.classList.add("task-selected");
  viewRecentRunsContent.style.display = "none";
  viewRecentRunsBtn.classList.remove("task-selected");
});

viewRecentRunsBtn.addEventListener("click", function () {
  editScheduleContent.style.display = "none";
  editScheduleBtn.classList.remove("task-selected");
  viewRecentRunsContent.style.display = "block";
  viewRecentRunsBtn.classList.add("task-selected");
});

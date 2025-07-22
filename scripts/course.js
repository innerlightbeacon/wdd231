// scripts/course.js

document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces basic programming concepts.', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Intro to HTML and CSS.', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Writing and using functions in programming.', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'Intro to object-oriented programming.', technology: ['C#'], completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Creating interactive web pages with JS.', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'UX, accessibility, API usage.', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
  ];

  const container = document.getElementById("course-container");
  const totalCredits = document.getElementById("credit-total");

  function renderCourses(courseList) {
    container.innerHTML = "";
    let credits = 0;

    courseList.forEach(course => {
      const card = document.createElement("div");
      card.className = course.completed ? "course-card completed" : "course-card";

      // Add to credit total only if completed
      if (course.completed) {
        credits += course.credits;
      }

      const statusIcon = course.completed ? '✅' : '⏳';
      const statusColor = course.completed ? 'green' : 'gray';

      card.innerHTML = `
        <h3>
          <span style="color:${statusColor}">${statusIcon}</span> 
          ${course.subject} ${course.number} - ${course.title}
        </h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
        <p class="status">${course.completed ? '✅ Completed' : '⏳ In Progress'}</p>
      `;
      container.appendChild(card);
    });

    totalCredits.textContent = `Total Credits Earned: ${credits}`;
  }

  document.getElementById("all").addEventListener("click", () => renderCourses(courses));
  document.getElementById("wdd").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "WDD")));
  document.getElementById("cse").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "CSE")));

  renderCourses(courses); // Initial load
});

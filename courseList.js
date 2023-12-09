 


function enrollCourse(course) {
  let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
  enrolledCourses.push(course);
  localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
}

enrollCourse({ id: 1, name: 'React Basics' });
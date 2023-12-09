const express=require("express");

let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
console.log(enrolledCourses);
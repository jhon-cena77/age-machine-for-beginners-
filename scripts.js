/* original javascript: function Enter() {
    age = window.prompt("what year were you born")
    yearsold = 2023 - age;
    window.alert("you are " + yearsold + " years old")
}*/

function Enter() {
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Note: months are 0-indexed, so add 1
    const currentDay = currentDate.getDate();

    // Prompt for the year of birth
    let birthYear;
    do {
        birthYear = window.prompt("Enter the year of your birth (between 1800 and " + currentYear + "):");
    } while (isNaN(birthYear) || birthYear < 1800 || birthYear > currentYear);

    // Prompt for the month of birth
    let birthMonth;
    do {
        birthMonth = window.prompt("Enter the month of your birth (between 1 and 12):");
    } while (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12);

    // Prompt for the day of birth
    let birthDay;
    do {
        birthDay = window.prompt("Enter the day of your birth (between 1 and 31):");
    } while (isNaN(birthDay) || birthDay < 1 || birthDay > 31);

    // Calculate age based on the provided birthdate
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Note: months are 0-indexed in JavaScript

    // Calculate the age in years, months, and days
    const ageInMilliseconds = currentDate - birthDate;

    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
    const years = Math.floor(ageInMilliseconds / millisecondsInYear);

    const remainingMilliseconds = ageInMilliseconds % millisecondsInYear;
    const millisecondsInMonth = millisecondsInYear / 12;
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);

    const remainingDays = Math.floor((remainingMilliseconds % millisecondsInMonth) / (24 * 60 * 60 * 1000));

    // Display the result
    window.alert("You are " + years + " years, " + months + " months, and " + remainingDays + " days old.");
    console.log("You are " + years + " years, " + months + " months, and " + remainingDays + " days old.");
}

function generatePassword(firstName, middleName, lastName) {
    // Extract 2 characters from each name
    const firstChars = firstName.slice(0, 2);
    const middleChars = middleName.slice(0, 2);
    const lastChars = lastName.slice(0, 2);

    // Generate a 3-digit random number
    const randomDigits = Math.floor(Math.random() * 900) + 100;

    // Combine the characters and random digits to form the password
    const password = firstChars + middleChars + lastChars + randomDigits;

    return password;
}
console.log(generatePassword("Shrikant","Rajendra","Jagtap"));
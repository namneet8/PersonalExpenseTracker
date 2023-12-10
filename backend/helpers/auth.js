const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                console.log('Error generating salt:', err);
                reject(err);
            }
            console.log('Generated salt:', salt);

            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.log('Error hashing password:', err);
                    reject(err);
                }
                console.log('Generated hash:', hash);

                resolve(hash);
            });
        });
    });
}

const comparePassword = (password,hashed) =>{
    return bcrypt.compare(password, hashed);
}

module.exports = {
    hashPassword,
    comparePassword
}
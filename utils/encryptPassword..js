let crypto = require('crypto');

const encryptPassword = (password, salt) => {
    return crypto.createHmac('sha1', salt).update(password).digest('hex');
};


module.exports=encryptPassword;
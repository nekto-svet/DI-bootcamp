const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
    createUsersPassword,
    checkUser,
} = require ('../models/hashpwd_models.js')

const {
    createUser,
    getUsersFromDB,
    getOneFromDB,
    changeUserInDB,
} = require ('../models/users_modules.js')

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

const registerNewUser = (req, res) => {
    const {email, username, first_name, last_name, password} = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPass = bcrypt.hashSync(password, salt)
    createUsersPassword(username, hashedPass)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).jason({msg:'can not add hash'})
        })
    createUser(email, username, first_name, last_name)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).json({msg:'can not add user'})
    })
}


const logIn = (req, res) => {
    const { username, password } = req.body;
    checkUser(username).then((user) => {
        if (user.length === 0) {
            res.status(404).json({ success: false, msg: 'User not found' });
        } else {
            const hashedPasswordFromDB = user[0].password;
            bcrypt.compare(password, hashedPasswordFromDB, (err, result) => {
                if (err) {
                    console.error('Error during password comparison:', err);
                    res.status(500).json({ success: false, msg: 'Internal server error' });
                } else {
                    if (result) {
                        res.json({ success: true, msg: 'Login successful' });
                    } else {
                        res.status(401).json({ success: false, msg: 'Incorrect password' });
                    }
                }
            });
        }
    }).catch((error) => {
        console.error('Error during user retrieval:', error);
        res.status(500).json({ success: false, msg: 'Internal server error' });
    });
};


const getAllUsers = (req, res) => {
    getUsersFromDB().then (data => {
        if(data.length === 0) return res.status(404).json({msg:"Not Found"});
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Found"});
    })
}


const findUser = (req, res) => {
    const {id} = req.params;
    getOneFromDB(id).then (data => {
        if(data.length === 0) return res.status(404).json({msg:"Not Found"});
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
}


const updateUser = (req, res) =>{ 
    const {id} = req.params;
    console.log(id);
    const{email, first_name, last_name} = req.body
    console.log(email, first_name, last_name);
    changeUserInDB(id, email, first_name, last_name).then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg:"Not Updated"});
    })
}


module.exports = {
    registerNewUser,
    logIn,
    getAllUsers,
    findUser,
    updateUser,
}
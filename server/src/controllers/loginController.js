const connection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) =>{
    const {username, password} = req.body;
    const consult = 'SELECT * FROM USUARIO WHERE usuario = ? AND contrasena = ?';

    try {
      connection.query(consult, [username, password], (err, result)=>{
          if(err){
              res.status(500).send(err);
              
          }

          if(result.length > 0){
            console.log(result)
            let user= result[0]
            const role = user.rol
            //console.log(username,role)
            
            
              const token = jwt.sign({username,role}, "Stack", {
                  expiresIn: '3m'
              });
              res.send({token});
          } else {
              console.log('wrong user')
              res.send({message: 'wrong user'})
          }
      })
    } catch (e) {
        console.error(e)

    }

}
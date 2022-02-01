









const axios = require('axios');
const DeleteUser = async () => {
await   axios.delete(`http://localhost:4000/Users/:id`)
            .then((res) => {
                res.send();
            })
            .catch(err => err);
  }
module.exports  =   DeleteUser;
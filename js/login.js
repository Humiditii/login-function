
const db = {
    "Users": [
        {
            "id": "1",
            "email": "tea@example.com",
            "password": "abc"
        },
        {
            "id": "2",
            "email": "tea2@example.com",
            "password": "abc"
        },
        {
            "id": "3",
            "email": "john@example.com",
            "password": "abc"
        },
        {
            "id": "4",
            "email": "john.c@example.com",
            "password": "abc"
        },
        {
            "id": "5",
            "email": "jhont@example.com",
            "password": "abc"
        },
        {
            "id": "6",
            "email": "qube@example.com",
            "password": "abc"
        }
    ]
}

const login =  (userN, pwd)=>{
    const username = userN;
    const password = pwd;
    const usersObject = db.Users
    // To find the particular user about to login from the database file
    const findUser = usersObject.find( user => user.email === username);
    //console.log(findUser)
    if(findUser){
        if(password === findUser.password || null ){
            const auth = 'dashboard.html';
            //window.location.href = auth;
            console.log('logged')
        }else{
            const response = {
                statusCode : 401,
                error: 'Password incorrect'
            }

            return response;
            //console.log(response);
        }
    }else{
        const response = {
            statusCode: 404,
            error: 'user not found incorrect'
        }

        return response;
       // console.log(response)
    }
}

//login('tea2@.com', 'jjjj');

//console.log(db.Users);
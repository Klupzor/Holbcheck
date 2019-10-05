                                               Holbcheck
Project progress 

Holberton API:

  Authentication

    URL: POST /users/auth_token.json
    Parameters:
      api_key: available in My Tools
      email: your Holberton’s email
      password: your Holberton’s password
      scope: scope of your API usage. In your case it will be checker
    Rate limit: 100 requests per hour
    Result:
      Hash:
        user_id: your user ID
        full_name: your name
        auth_token: the auth_token to use for future requests
        expiration_date: when this token will be expired (in UTC) - 12 hours from the request

  Get my profile
  
  URL: GET /users/me.json
  Parameters:
    auth_token: from the authentication request
    Rate limit: 100 requests per hour
  Result:
    Hash:
      id: user ID
      email: user email
      full_name: user name
      first_name: user first name
      last_name: user last name
      linkedin_url: LinkedIn url
      twitter_username: Twitter username
      github_username: Github username
      profile_pic: signed profile picture
Authors
  Maria Fernanda Mendez, Madez17, [https://github.com/Madez17]
  Andres Lopez, Klupzor, [https://github.com/Klupzor/Holbcheck]
  Yesid Gonzalez,  yawzyag, [https://github.com/yawzyag]
  Oscar Vargas,  naxus1, [https://github.com/naxus1]
  Ximena Andrade, xica369, [https://github.com/xica369]
  Carlos Arias, carlosariasf, [https://github.com/carlosariasf]
  Rodrigo Sierra, RodrigoSierraV,[https://github.com/RodrigoSierraV] 

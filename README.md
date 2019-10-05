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
        
  Get a project
  
    URL: GET /projects/:id.json
    Parameters:
      auth_token: from the authentication request
      :id: ID of the project (part of the URL)
      Rate limit: 100 requests per hour
      Result:
    Hash:
      id: project ID
      name: project name
      track_id: track ID
      created_at: when this project has been created
      updated_at: when this project has been updated
      tasks: array of hashes:
      id: task ID
      title: task title
      position: task position
      checker_available: true if the Checker is available for this task - otherwise false (= manual review needed)
      github_repo: Github repository to use
      github_dir: Github directory to use
      github_file: Github file to use      

  Get a task

    URL: GET /tasks/:id.json
    Parameters:
      auth_token: from the authentication request
      :id: ID of the task (part of the URL)
      Rate limit: 100 requests per hour
    Result:
      Hash:
        id: task ID
        title: task title
        project_id: project ID
        created_at: when this project has been created
        updated_at: when this project has been updated
        github_repo: Github repository to use
        github_dir: Github directory to use
        github_file: Github file to use
        position: position of this task in the project
        checker_available: true if the Checker is available

  Request a correction
  
      URL: POST /tasks/:id/start_correction.json
      Parameters:
        auth_token: from the authentication request
        :id: ID of the task (part of the URL)
        Rate limit: 30 requests per hour
      Result:
        Hash:
          id: correction request ID - if the value of id is null or 0, it means the correction can’t be queued

  Get a correction result

    URL: GET /correction_requests/:id.json
    Parameters:
      auth_token: from the authentication request
      :id: ID of the correction request (part of the URL)
      Rate limit: 1000 requests per hour
    Result:
      Hash:
        id: correction request ID
        user_id: requester user ID
        task_id: task ID corrected
        request_type: always “Test review” for you :-)
        status: 3 potential statuses:
        “Sent”: in process
        “Fail”: something happened
        “Done”: correction ready
        created_at: when the correction has been requested
        updated_at: when the correction has been updated
        result_display: hash of the result:
        error: error message
        info: information message
        delay: delay of your correction request in the Checker
        info_message: delay message
        checks: array of hashes describing all checks result:
        id: check ID
        passed: true if the check passed - otherwise false
        title: title of the check
        check_label: type of check => requirement, code, answer or efficiency
        commands: array of commands executed for testing this check - not needed


Authors
  Maria Fernanda Mendez, Madez17, [https://github.com/Madez17]
  Andres Lopez, Klupzor, [https://github.com/Klupzor/Holbcheck]
  Yesid Gonzalez,  yawzyag, [https://github.com/yawzyag]
  Oscar Vargas,  naxus1, [https://github.com/naxus1]
  Ximena Andrade, xica369, [https://github.com/xica369]
  Carlos Arias, carlosariasf, [https://github.com/carlosariasf]
  Rodrigo Sierra, RodrigoSierraV,[https://github.com/RodrigoSierraV] 

# User Registration API Documentation

## HTTP method: `POST`
## Endpoint: `/users/register`



### Description
This endpoint handles new user registration. It creates a new user in the database, hashes the provided password for security, and returns an authentication token along with the created user object.

### Request

#### URL
```
POST /users/register
```

#### Headers
```
Content-Type: application/json
```

#### Body Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | String | Yes | User's email address (must be at least 5 characters and unique) |
| fullname | Object | Yes | Object containing user's name information |
| fullname.firstname | String | Yes | User's first name (must be at least 3 characters) |
| fullname.lastname | String | No | User's last name (if provided, must be at least 3 characters) |
| password | String | Yes | User's password (must be at least 6 characters) |

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "secure123password"
}
```

### Response

#### Success Response (201 Created)
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "mongodb_generated_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Response (400 Bad Request)
When validation fails:
```json
{
  "errors": [
    {
      "value": "j",
      "msg": "First name must be 3 char long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- **Email**: Must be a valid email format and at least 5 characters long
- **First Name**: Must be at least 3 characters long
- **Last Name**: If provided, must be at least 3 characters long
- **Password**: Must be at least 6 characters long

### Additional Notes
- The password is hashed using bcrypt before storage
- A JWT token is generated upon successful registration
- The email address must be unique across all users
- The password field is excluded from the returned user object for security



# User Login API Documentation

## HTTP method: `POST`
## Endpoint: `/users/login`

### Description
This endpoint handles user authentication. It verifies the user's credentials and returns an authentication token along with the user object if the login is successful.

### Request

#### URL
```
POST /users/login
```

#### Headers
```
Content-Type: application/json
```

#### Body Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | String | Yes | User's registered email address |
| password | String | Yes | User's password |

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "secure123password"
}
```

### Response

#### Success Response (200 OK)
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "mongodb_generated_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

##### Incorrect Credentials (401 Unauthorized)
```json
{
  "errors": [
    {
      "msg": "Invalid email or password"
    }
  ]
}
```

##### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Email is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- **Email**: 
  - Must be a valid email format
  - Must be a registered email address
- **Password**:
  - Must match the password associated with the email address

### Additional Notes
- Authentication is performed using bcrypt password comparison
- A new JWT token is generated upon successful login
- The password is never returned in the response
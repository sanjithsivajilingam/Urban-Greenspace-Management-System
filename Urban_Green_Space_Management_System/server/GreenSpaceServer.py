from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Park Manager Login Information
adminUser = "manager"
adminPassword = "manager"

# User Login Information
userUser = "Person"
userPassword = "COE892"

# Method for verifying login credentials
@app.post("/loginrequest")
async def handleLogin(loginCredentials: dict):
    username = loginCredentials.get('username')
    password = loginCredentials.get('password')
    
    print("Received username: " + username)
    print("Received password: " + password)

    if(username == adminUser and password == adminPassword):
        return {"code": "managerSuccess"}
    
    elif(username == userUser and password == userPassword):
        return {"code": "userSuccess"}
    
    else:
        raise HTTPException(status_code=401, detail="Username and/or password invalid!")
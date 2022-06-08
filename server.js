const express = require('express')
const app = express()
const PORT = 8000

const silksDrops = {
'star': {
    'baseWrap': 'catchers',
    'heightRequirement': 'medium',
    'difficulty': 'intermediate'
     },

'double star': {
    'baseWrap': 's-wrap and catchers',
    'heightRequirement': 'high',
    'difficulty': 'advanced'
     },
     
'wheel down': {
    'baseWrap': 's-wrap',
    'heightRequirement': 'medium',
    'difficulty': 'intermediate'
     },

'angel': {
    'baseWrap': 'transcendance',
    'heightRequirement': 'low',
    'difficulty': 'beginner'
     },

'unknown': {
    'baseWrap': 'none',
    'heightRequirement': 'none',
    'difficulty': 'none'
     },
}
//Does this look like an event listener to you? Instead of it being a click it is a network request. When it hears the network request it fires a function.
app.get('/', (request, response) => {
       //We had the __dirname so the server knows where to go to find the index.html file
       response.sendFile(__dirname + '/index.html') 
 
})
//If they make a request to the api we will respond with the object:named suchly
app.get('/api/:name', (request,response) => {
    const silksDropsName = request.params.name.toLowerCase()
    if (silksDrops[silksDropsName]) {
        response.json(silksDrops[silksDropsName])
    } else {
        response.json(silksDrops['unknown'])
    }
    
}) 


//tell it where to listen and what to do. 
// by using the process environment variable we are saying to try to use whatever Heroku is setting up as the PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
}) 


//How to push to heroku
/*
heroku login -i
heroku create silks-drop-api
echo "web: node server.js" > Procfile
git add .
git commit -m "changes"
git push heroku main
*/
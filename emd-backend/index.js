const express = require("express");
const cors = require("cors")
const dbConnection = require("./dbConnection")

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// get_All_Events
app.get("/events", (req, res) => {
    dbConnection.query("SELECT * FROM eventsdata", (err, rows) => {
        if(err) {
            console.log("myDB connection error", err)
        }else{
            res.send(rows)
        }
    })
})

// get_Single_Event_by_ID
app.get("/view/:id", (req, res) => {
    dbConnection.query("SELECT * FROM eventsdata WHERE id=?",[req.params.id], (err, rows) => {
        if(err) {
            console.log("myDB connection error", err)
        }else{
            res.send(rows)
        }
    })
})

// add_event
app.post("/add-event", (req, res) => {
   
    const requestData = req.body
    const eventKeys = Object.keys(requestData);
    const eventValues = Object.values(requestData);

    if(requestData.title === ""){
    // return res.status(500).send('please add title field', err)
        return res.status(500).json({
            error: {
              message: "sab field ko add kro set title"
            }
          });

    }

    const insertQuery = `INSERT INTO eventsdata (${eventKeys.join(', ')}) VALUES ('${eventValues.join("', '")}')`;

    dbConnection.query( insertQuery, (err, result) => {
        if(err){
            res.status(500).send('some thing wrong yor data', err)
        }else{
            res.status(200).send('Event Data inserted successfully')
        }
    } )

  });

// delete_single_event
app.delete("/delete-event/:id", (req, res)=>{

    const eventId =req.params.id;
    const deleteQuery = `DELETE FROM eventsdata WHERE id = ${eventId}`;

    dbConnection.query( deleteQuery, (err, result)=>{
        if (err) {
            res.status(500).send('Something went wrong with deleting the data', err);
        } else {
            res.status(200).send('Event Deleted successfully');
        }
    })
} )


// update_Event
app.put("/update-event/:id", (req, res) => {
    const eventData = req.body;

    console.log("backend update Query__", eventData);

    const updateQuery = `
        UPDATE eventsdata
        SET
            title = '${eventData.title}',
            description = '${eventData.description}',
            createdDate = '${eventData.createdDate}',
            durationTime = '${eventData.durationTime}',
            status = '${eventData.status}',
            video = '${eventData.video}',
            joinSession = '${eventData.joinSession}',
            thumbnail = '${eventData.thumbnail}',
            address = '${eventData.address}',
            email = '${eventData.email}',
            startTime = '${eventData.startTime}',
            endTime = '${eventData.endTime}'
        WHERE id = ${eventData.id}
    `;

    dbConnection.query(updateQuery, (err, result) => {
        if (err) {
            res.status(500).send("Your update query failed__", err);
        } else {
            res.status(200).send("Your update query succeeded");
        }
    });
});


  app.listen(port);



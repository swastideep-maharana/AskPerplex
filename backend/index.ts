import express from "express";

const app = express()

app.post("/conversation", async (req, res) => {
    //get the query from the user

    // make sure user has access/credits to hit the endpoints

    //chcek if we have web serach indexed for a similar query

    //web search to gather sources 

    //do some context enginnering on the propmt + web search responses 

    //hit the llm and stream back the response 

    //also stream back the sources and the follow up qustions (which we can get from another parallell llm call)

    //close the event stream
});



app.listen(3000); 
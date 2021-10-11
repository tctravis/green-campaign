// Credit to Josh Comeau 
const faunadb = require('faunadb');
exports.handler = async (event) => {
    // console.log('here')
    const q = faunadb.query;
    const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET_KEY,
    })
    const document = await client.query(
        q.Get(q.Index('all_customers'))
    )
    return {
        statusCode: 200,
        body: JSON.stringify({
            voters: document.data,
        }),
    };
};
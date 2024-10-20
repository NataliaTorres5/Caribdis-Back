function httpResponse(res, statusCode, data) {
    res.status(statusCode).json({ error: false, response: data})
    
}

export default httpResponse
exports.serverError = function Error(res, error){
    res.status(500).json({
            success: false,
            error: error.toString(),
            message: 'Something went wrong'
        });
}